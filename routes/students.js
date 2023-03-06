import express from "express";
import { client } from "./db.js";
import { ObjectId } from "../index.js";
import {
  deleteStudent,
  getStudents,
  getStudentsbyParams,
  postStudent,
  putStudent,
} from "../Components/Students.js";

const router = express.Router();
router.get("/", async (req, res) => {
  console.log(req.query);
  try {
    const studentsData = await getStudents(req);
    if (studentsData.length <= 0)
      return res.status(404).send({ data: "Content not found" });
    res.status(200).json(studentsData);
  } catch (error) {
    console.log(error);
    res.status(500).send({ data: "internal server error" });
  }
});
//get by params from database
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    console.log(req.params);
    console.log(id);
    const students = await getStudentsbyParams(id);
    if (!students) return res.status(400).send({ data: "user not found !" });
    res.status(200).json(students);
  } catch (error) {
    console.log(error);
    res.status(500).send({ data: "internal server error" });
  }
});
//post
router.post("/", async (req, res) => {
  const newdata = {name:req.body.name, batch: req.body.batch, age:req.body.age, qualification: req.body.qualification,
  experience: req.body.experience
  }

  try {
    const addData = await postStudent(newdata);

    res.status(200).json(addData)
  } catch (error) {
    console.log(error);
    res.status(500).send({data: "internal server error" });
  }
});
//edit from database
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updateStud = req.body;
if(!updateStud)return res.status(400).json({data: "content not found "})
    console.log(req.params);
    console.log(id);
    const students = await putStudent(id, updateStud);
    // if(students=[])return res.status(400).json({data: "content not entered"})
    res.status(200).json({data: "Edited Successfullly"});
  } catch (error) {
    console.log(error);
    res.status(500).send({ data: "internal server error" });
  }
});
//delete from the database
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteStud = await deleteStudent(id);
    if (!deleteStud) return res.status(400).send({ data: "user not found" });
    res.status(200).send(deleteStud);
  } catch (error) {
    console.log(error);
    res.status(500).send({ data: "internal server error" });
  }
});

export const StudData = router;
