import express from "express";
// import path from "path"
import Obj from "mongodb";

import dotenv from "dotenv";

import { StudData } from "./routes/students.js";

dotenv.config();

const app = express();
export var ObjectId = Obj.ObjectId;

const PORT = process.env.demosite;

// const path = require("path");
// const fs = require("fs");
// const { MongoClient } = require("mongodb");
// const ObjectId = require("mongodb").ObjectId;
//changing directory
// const currentfile = path.join(__dirname, "databreach");
// console.log(currentfile);

// //writing
// const writetext = "hello world";
// fs.writeFile(`${currentfile}/databreach.txt`, writetext, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("successfully written databreach❤️");
//   }
// });

//picking particular file from the whole dataset
//syntax:
//app.use(express.static())



app.use(express.static("databreach"));
app.use(express.json());
app.use("/all/students", StudData);

//============================================================================

// app.get("/all/students", async (req, res) => {
//   console.log(req.query);
//   const studentsData = await (await client)
//     .db("Mockdata")
//     .collection("students")
//     .find(req.query)
//     .toArray(); // to return all data from an array
//   res.status(200).json(studentsData);
// });

//==============
// app.get("/static", (req, res) => {
//   res.sendFile(path.join(__dirname, "databreach/databreach.txt"));
// });
//================================================================

//get by parameters

app.get("/data/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  console.log(req.params);
  const finaldata = data.find((datas) => datas.id === id);
  //reason to use find..  is if i use filter they return array but find returns only objects
  res.send(finaldata);
});

//get by params from database

// app.get("/all/students/:id", async (req, res) => {
//   const { id } = req.params;
//   console.log(req.params);
//   console.log(id);
//   const students = await (
//     await client
//   )
//     .db("Mockdata")
//     .collection("students")
//     .findOne({ _id: new ObjectId(id) });
//   console.log(students);
//   res.status(200).json(students);
// });

//================================================================

// get by query

app.get("/data", (req, res) => {
  const { country } = req.query;
  console.log(req.query);
  const finalcountry = data.filter(
    (countries) => countries.country === country
  );

  res.send(finalcountry);
});

//================================================================
//get mongodb data by query

// app.get('/all/students', async(req, res)=>{
//   console.log(req.query)
// const students = await (await client).db("Mockdata").collection("students").find(req.query)
// res.status(200).json(students)

// })
//================================================================

//================================================================
//Post data to server

app.post("/data", (req, res) => {
  const postdata = {
    name: req.body.name,
    gender: req.body.gender,
    address: req.body.address,
    country: req.body.country,
    mailid: req.body.mailid,
    phone: req.body.phone,
    id: req.body.id,
  };
  console.log(postdata);
  data.push(postdata);
  res.send(data);
});

// app.post("/all/students", async (req, res) => {
//   const newdata = req.body;

//   const addData = await (await client)
//     .db("Mockdata")
//     .collection("students")
//     .insertMany(newdata);

//   res.status(201).json(addData);
// });

//================================================================

//Edit the database

app.put("/data/:id", (req, res) => {
  const { id } = req.params;
  const editData = data.find((stud) => stud.id === id);
  console.log(editData);
  editData.name = req.body.name;
  editData.gender = req.body.gender;
  editData.address = req.body.address;
  editData.country = req.body.country;
  editData.mailid = req.body.mailid;
  editData.phone = req.body.phone;
  editData.id = req.body.id;

  res.send(data);
});

// //edit from database

// app.put("/all/students/:id", async (req, res) => {
//   const { id } = req.params;
//   const updateStud = req.body;
//   console.log(req.params);
//   console.log(id);
//   const students = await (
//     await client
//   )
//     .db("Mockdata")
//     .collection("students")
//     .updateMany({ _id: new ObjectId(id) }, { $set: updateStud });
//   console.log(students);
//   res.status(200).json(students);
// });

//================================================================

//delete the specific data from the database

app.delete("/data/:id", (req, res) => {
  const { id } = req.params;
  const DeleteData = data.filter((stud) => stud.id != id);
  // const data = DeleteData
  res.send(DeleteData);
});

// //delete from the database

// app.delete('/all/students/:id', async(req, res) => {
//   const { id } = req.params;
//   const deleteStud = await (
//     await client
//   )
//     .db("Mockdata")
//     .collection("students")
//     .deleteOne({_id:new ObjectId(id)});
//   res.status(200).send(deleteStud);

// })

//================================================================

// basic

app.get("/all/data", (req, res) => {
  res.send(data);
});

app.get("/", (req, res) => {
  res.send("Welcome to databreach");
});

app.listen(PORT, () =>
  console.log(`Backend server listening on  localhost:${PORT}`)
);
