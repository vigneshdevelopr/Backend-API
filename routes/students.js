import express from "express";
import { client } from "./db.js"
// import Obj from "mongodb";
// var ObjectId = Obj.ObjectId;

import { ObjectId } from "../index.js";

const router = express.Router();

// router.get("/", async (req, res) => {
//   console.log(req.params);
//   // console.log(id);
//   const students =   await client .db("Mockdata")
//     .collection("students")
//     .find();
//   console.log(students);
//   res.status(200).json(students);
// })

router.get("/", async (req, res) => {
  console.log(req.query);
  const studentsData = await client
    .db("Mockdata")
    .collection("students")
    .find(req.query)
    .toArray(); // to return all data from an array
  res.status(200).json(studentsData);
});

//get by params from database

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  console.log(id);
  const students = await client

    .db("Mockdata")
    .collection("students")
    .findOne({ _id: new ObjectId(id) });
  console.log(students);
  res.status(200).json(students);
});

//post

router.post("/", async (req, res) => {
  const newdata = req.body;

  const addData = await client
    .db("Mockdata")
    .collection("students")
    .insertMany(newdata);

  res.status(201).json(addData);
});

//edit from database

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updateStud = req.body;
  console.log(req.params);
  console.log(id);
  const students = await client

    .db("Mockdata")
    .collection("students")
    .updateMany({ _id: new ObjectId(id) }, { $set: updateStud });
  console.log(students);
  res.status(200).json(students);
});

//delete from the database

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deleteStud = await client

    .db("Mockdata")
    .collection("students")
    .deleteOne({ _id: new ObjectId(id) });
  res.status(200).send(deleteStud);
});

export const StudData = router;
