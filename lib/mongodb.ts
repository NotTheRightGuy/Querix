// const { MongoClient } = require("mongodb");
import { MongoClient } from "mongodb";
const uri=process.env.DB_URI || ""
export const client = new MongoClient(uri);