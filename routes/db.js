//==================connectivity to mongodb==========================================================
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
//Mongo Db Connection
const MONGO_URL = process.env.Mongo_URL;

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongodb is succesfuly connected");
  return client;
}

export const client = await createConnection();
