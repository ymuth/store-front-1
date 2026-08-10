"use server";

import { prisma } from "@prisma-db";
import { revalidatePath } from "next/cache";

export async function deleteUserAccount(userId: string) {
    await prisma.session.deleteMany({ where: { userId } });
    await prisma.account.deleteMany({ where: { userId } });
    await prisma.user.delete({ where: { id: userId } });

    revalidatePath("/admin/users");
}



export async function deleteInvitation(invitationId: string) {
    await prisma.invitation.delete({ where: { id: invitationId } });

    revalidatePath("/admin/users");
}
