import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatOllama } from "@langchain/community/chat_models/ollama";
import { BufferMemory } from "langchain/memory";

const system_prompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    `You are a helpful AI assistant expert in querying SQL databases to answer users' questions when provided with the database schema .
     Respond with a JSON object containing two keys: 'msg' (a helpful message regarding the query), and 'query' (the SQL query used to find the answer).
     Strictly adhere to the format provided and not send any other information.
     If what users ask is not something to do with SQL querying, you can respond with 'I'm sorry, I can't help with that.',
     
     Database Schema: {schema}`,
  ],
  ["human", "{question}\n"],
  ["ai", ""],
]);

const model = new ChatOllama({ model: "llama3" });
const memory = new BufferMemory();

export default async function generateSQL(question: string, schema: any) {
  const prompt = await system_prompt.format({ schema: schema, question: question });
  const response = await model.invoke(prompt);
  console.log(response);
  return response;
}
