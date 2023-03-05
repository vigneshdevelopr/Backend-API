import express from "express";
import Obj from "mongodb";
import dotenv from "dotenv";
import { StudData } from "./routes/students.js";
import cors from "cors"
//env configuration
dotenv.config();
const app = express();
export var ObjectId = Obj.ObjectId;
const PORT = process.env.demosite;

//middleware
app.use(express.static("databreach"));
app.use(express.json());
app.use(cors());
app.use("/all/students", StudData);


app.get("/", (req, res) => {
  res.send("Welcome to databreach");
});

app.listen(PORT, () =>
  console.log(`Backend server listening on  localhost:${PORT}`)
);
