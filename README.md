# Storefront Website

A full-stack storefront web application built with **Next.js**, designed to provide a fast, secure and maintainable website with integrated authentication, database functionality and email services.

The project was built as a practical full-stack application rather than a static frontend, with a focus on clean architecture, secure user access and efficient server-side functionality.

## Features

* Responsive storefront interface built with **Next.js**
* Server-side and client-side functionality using the Next.js App Router
* Secure authentication using **Better Auth**
* Private, invite-only user registration
* Token-based invitation system to prevent unauthorised sign-ups
* Persistent PostgreSQL database hosted with **Neon**
* Database access and schema management using **Prisma ORM**
* Transactional email functionality using **Resend**
* Secure handling of environment variables and sensitive credentials
* Efficient database queries and server-side operations
* Production-ready structure designed for deployment and further expansion

## Tech Stack

* **Next.js**
* **React**
* **TypeScript**
* **Prisma ORM**
* **PostgreSQL / Neon**
* **Better Auth**
* **Resend**
* **Tailwind CSS**

## Authentication

Authentication is handled using **Better Auth**.

Unlike a standard public registration system, account creation is restricted to invited users. Invitations are generated using secure tokens, allowing administrators to control who can create an account.

This helps prevent unauthorised registrations while maintaining a straightforward onboarding process for approved users.

## Database

The application uses a PostgreSQL database hosted through **Neon**.

**Prisma ORM** is used as the database abstraction layer, providing:

* Type-safe database queries
* Schema-based database modelling
* Database migrations
* Simplified relationships between application data
* Safer and more maintainable server-side database access

## Email

**Resend** is used for transactional email functionality within the application.

This allows the application to send emails directly from server-side functionality without exposing sensitive credentials to the client.

## Security

The application was developed with security in mind, including:

* Invite-only account creation
* Token-based registration
* Server-side authentication
* Protected application routes
* Environment variables for sensitive credentials
* Server-side database access
* Validation of user input and requests

## Getting Started

Clone the repository and install the dependencies:

```bash
npm install
```

Create a `.env` file and add the required environment variables for:

```env
DATABASE_URL=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
RESEND_API_KEY=
```

Additional environment variables may be required depending on the deployment configuration.

Generate the Prisma client:

```bash
npx prisma generate
```

Run the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Database Development

After making changes to the Prisma schema, create and apply a migration with:

```bash
npx prisma migrate dev
```

To inspect the database using Prisma Studio:

```bash
npx prisma studio
```

## Purpose

This project was built primarily to demonstrate **full-stack application development and functionality**, with a greater focus on backend features, authentication, database design and application architecture than visual design.

It demonstrates experience building and integrating:

* Secure authentication and protected routes
* Invite-only registration using tokens
* Relational database functionality
* Type-safe database access with Prisma
* Transactional email services
* Server-side application logic
* Full-stack features using Next.js and TypeScript

The interface is intentionally kept relatively simple, as the main objective of this project was to develop the underlying functionality and demonstrate how different parts of a production-style web application work together.

For a project focused more heavily on **frontend design, responsive UI and visual presentation**, see **[mugz.dev](https://mugz.dev)** and the **[git repository](https://github.com/ymuth/mugz-dev)**.

