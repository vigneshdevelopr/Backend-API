import { ObjectId } from "../index.js";
import { client } from "../routes/db.js";




export function getStudents(req){
   return client
    .db("Mockdata")
    .collection("students")
    .find(req.query)
    .toArray(); // to return all data from an array
}

export function getStudentsbyParams(id) {
   return client

    .db("Mockdata")
    .collection("students")
    .findOne({ _id: new ObjectId(id) });
  console.log(students);
}

export function postStudent(newdata){

  return  client
    .db("Mockdata")
    .collection("students")
    .insertOne(newdata);
}

export function putStudent(id,updateStud){
  return  client

    .db("Mockdata")
    .collection("students")
    .findOneAndUpdate({ _id: new ObjectId(id) }, { $set: updateStud });
  console.log(students);
}

export function deleteStudent(id){
    return client

    .db("Mockdata") 
    .collection("students")
    .deleteOne({ _id: new ObjectId(id) });
}