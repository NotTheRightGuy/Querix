import { getSchema } from "@/actions/getSchema";
import { NextResponse } from "next/server";


function convertJSONToString(jsonData : any) {
    let output = '';
  
    // Iterate over the object keys
    for (const tableName in jsonData) {
      const tableData = jsonData[tableName];
  
      // Check if the value is an array of objects
      if (Array.isArray(tableData)) {
        output += `Table: ${tableName}\n`;
        output += '\n';
  
        const columns = tableData.map(column => column.column_name);
        output += `*   Columns: ${columns.join(',')}\n`;
        output += '\n';
      }
    }
  
    return output.trim(); // Remove the trailing newline character
  }

export async function POST(req: NextResponse){
    const body = await req.json();
    const connection_string = body["connection_string"];
    const schema = await getSchema(connection_string);
    
    if (Object.keys(schema).length === 0) {
        return Response.json({ message: "Schema is empty. Please consider seeding the database." });
    } else {
        return Response.json({ schema: convertJSONToString(schema) });
    }
}
