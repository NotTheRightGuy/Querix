import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatOllama } from "@langchain/community/chat_models/ollama";
import { BufferMemory } from "langchain/memory";

const system_prompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    `You are a helpful AI assistant expert in querying SQL databases to answer users' questions when provided with the database schema in JSON format.
     Respond with a JSON object containing two keys: 'msg' (a helpful message regarding the query), and 'query' (the SQL query used to find the answer).
     If the question cannot be answered with an SQL query, respond with a JSON object containing only the key 'msg' with the value "Sorry, I cannot help you with that."
     Database Schema: {schema}`,
  ],
  ["human", "{question}\n"],
  ["ai", ""],
]);

const model = new ChatOllama({ model: "mistral" });
const memory = new BufferMemory();

export default async function generateSQL(question: string, schema: any) {
  const prompt = await system_prompt.format({ schema: schema, question: question });
  const response = await model.invoke(prompt);
  return response;
}
