import 'dotenv/config'
import { PrismaClient } from '../src/generated/prisma'
import { PrismaNeon } from '@prisma/adapter-neon'

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL!,
})

const basePrisma = new PrismaClient({ adapter })

const WRITE_OPS = new Set([
  'create', 'createMany',
  'update', 'updateMany', 'upsert',
  'delete', 'deleteMany',
])

export const prisma = basePrisma.$extends({
  name: 'auto-logger',
  query: {
    $allModels: {
      async $allOperations({ model, operation, args, query }) {
        const result = await query(args)

        // Don't log writes to the Log table itself — avoids infinite recursion
        if (model !== 'Log' && WRITE_OPS.has(operation)) {
          const a = args as any
          const payload = a.data ?? a.where ?? {}
          
          try {
            await basePrisma.log.create({
              data: {
                model: model ?? 'unknown',
                operation,
                description: buildDescription(model, operation, payload),
              },
            })
          } catch (err) {
            console.error('Failed to write log entry:', err)
          }
        }

        return result
      },
    },
  },
})

function buildDescription(model: string | undefined, operation: string, payload: any): string {
  // Try to pull something human-readable out of the payload
  const name = payload?.name ?? payload?.id ?? JSON.stringify(payload)
  switch (operation) {
    case 'create':
      return `New ${model} added: ${name}`
    case 'update':
    case 'upsert':
      return `${model} updated: ${name}`
    case 'delete':
      return `${model} deleted: ${name}`
    case 'createMany':
    case 'updateMany':
    case 'deleteMany':
      return `Bulk ${operation} on ${model}`
    default:
      return `${operation} on ${model}`
  }
}