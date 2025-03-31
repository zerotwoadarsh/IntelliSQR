import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { registerSchema, loginSchema } from "../validations/authValidation";

dotenv.config();
const prisma = new PrismaClient();
const SECRET_KEY = "default_secret";

// Register Function
export const register = async (req: Request, res: Response) => {
  try {
    // Validate input
    const { uid, password } = registerSchema.parse(req.body);

    // Check if user exists
    const existingUser = await prisma.user.findUnique({ where: { uid } });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Salt and hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user in MongoDB
    const user = await prisma.user.create({
      data: { uid, password: hashedPassword },
    });

    // Generate token
    const token = jwt.sign({ uid: user.uid }, SECRET_KEY, { expiresIn: "1h" });

    res.status(201).json({ message: "User registered!", token, user });
  } catch (error:any) {
    console.log(error);
    res.status(500).json({ message: "Error registering user", error: error.message });
  }
};

// Login Function
export const login = async (req: Request, res: Response) => {
  try {
    // Validate input
    const { uid, password } = loginSchema.parse(req.body);

    // Find user
    const user = await prisma.user.findUnique({ where: { uid } });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate token
    const token = jwt.sign({ uid: user.uid }, SECRET_KEY, { expiresIn: "1h" });

    res.status(200).json({ message: "Login successful", token, user });
  } catch (error:any) {
    console.log(error)
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
};
