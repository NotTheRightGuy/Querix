import { getSchema } from "@/actions/getSchema";
import { NextResponse } from "next/server";


export async function POST(req: NextResponse){
    const body = await req.json();
    const connection_string = body["connection_string"];
    const schema = await getSchema(connection_string);
    
    if (Object.keys(schema).length === 0) {
        return Response.json({ message: "Schema is empty. Please consider seeding the database." });
    } else {
        // Add a message and send the schema back
        return Response.json({ message: "Schema retrieved successfully.", schema });
    }
}
