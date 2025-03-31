This is a full-stack authentication system built using React, TypeScript, Node.js, Express, Prisma, and MongoDB. It includes user registration and login with password hashing, salting, and JWT authentication.

Features

User registration with hashed and salted passwords

Secure login with JWT authentication

Frontend validation using react-hook-form and zod

Backend validation with zod

MongoDB integration using Prisma

Tech Stack

Frontend

React (Next.js) – For building the user interface

TypeScript – Type safety

React Hook Form – Form handling

Axios – API requests

Tailwind CSS – Styling

Zod – Form validation

Backend

Node.js & Express.js – Backend server

TypeScript – Type safety

Prisma ORM – Database management

MongoDB – Database

Bcrypt.js – Password hashing and salting

JWT – Authentication

Zod – Input validation

Prerequisites

Ensure you have the following installed:

Node.js (v16+)

MongoDB (local or Atlas instance)

npm or yarn

Installation

Clone the Repository

https://github.com/zerotwoadarsh/IntelliSQR.git

Backend Setup

cd backend
npm install

Configure Environment Variables

Create a .env file in the backend folder:

PORT=5174
JWT_SECRET=your_secret_key
DATABASE_URL=mongodb+srv://your_mongodb_url

Run Migrations (Prisma)

npx prisma generate

Start Backend Server

npm run dev

Frontend Setup

cd ../frontend
npm install

Start Frontend Server

npm run dev