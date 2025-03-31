
# Full-Stack Authentication System

This is a full-stack authentication system built using React, TypeScript, Node.js, Express, Prisma, and MongoDB. It includes user registration and login with password hashing, salting, and JWT authentication.


## Features

- User registration with hashed and salted passwords

- Secure login with JWT authentication

- Frontend validation using react-hook-form and zod

- Backend validation with zod

- MongoDB integration using Prisma


## Tech Stack

**Frontend:** 


- React – For building the user interface

- TypeScript – Type safety

- React Hook Form – Form handling

- Axios – API requests

- Tailwind CSS – Styling

- Zod – Form validation

**Backend:** 

- Node.js & Express.js – Backend server

- TypeScript – Type safety

- Prisma ORM – Database management

- MongoDB – Database

- Bcrypt.js – Password hashing and salting

- JWT – Authentication

- Zod – Input validation


## Installation

Clone the Repository

```bash
  https://github.com/zerotwoadarsh/IntelliSQR.git
  cd IntelliSQR
```
Backend Setup

```bash
  cd backend
  npm install
```

Run Migrations (Prisma)
```bash
  npx prisma generate
```

Start Backend Server
```bash
  npm run dev
```

Frontend Setup

```bash
  cd ../frontend
  npm install
```

Start Frontend Server

```bash
  npm run dev
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT=5174`

`JWT_SECRET=your_secret_key`

`DATABASE_URL=mongodb+srv://your_mongodb_url`

