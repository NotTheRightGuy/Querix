import { PromptTemplate } from "@langchain/core/prompts";
import { ChatOllama } from "@langchain/community/chat_models/ollama";

const system_prompt = PromptTemplate.fromTemplate(`
    You are an state of the art AI model that can convert DDL to Schema.
    User will provide you a series of DDL commands and you will convert it to a schema. You should be
    able to handle foreign keys and primary keys as well

    The final schema should look something like this:

    - Table Name: users
        - Columns:
            - id: int
            - name: string
            - email: string
            - created_at: datetime
            - updated_at: datetime
        
    - Table Name: posts
        - Columns:
            - id: int
            - title: string
            - content: string
            - user_id: int
            - created_at: datetime
            - updated_at: datetime

    Provide a schema as such for these DDL commands: {DDL}.
    Strictly provide the schema in the format mentioned above and no other message should be present in the response.
    
`);

const model = new ChatOllama({ model: "llama3" });

export default async function generateSQL(DDL : string) {
  const prompt = await system_prompt.format({ DDL: DDL});
  const response = await model.invoke(prompt);
  console.log(response);
  return response;
}
