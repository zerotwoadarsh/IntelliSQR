import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import bodyParser from "body-parser";


import { login, register } from "./controllers/authController";

dotenv.config();
express.urlencoded({ extended: true }); 

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5174;
app.listen(PORT, () => console.log(`Server running on port heelo ${PORT}`));

app.get("/", (req, res) => {
    res.send("Hello from Express!");
})

app.post("/register", register as any);
app.post("/login", login as any);

