const { MongoClient } = require("mongodb");
const uri=process.env.DB_URI
export const client = new MongoClient(uri);