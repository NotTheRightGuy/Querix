import executeSQL from "@/actions/executeSQL";
import { NextResponse } from "next/server";

export async function POST(req: NextResponse) {
    const body = await req.json();
    const { connectionString, sqlQuery } = body;
    if(!connectionString || !sqlQuery){
        return Response.json({ error: 'Missing connection string or sql query' });
    }
    try {
        const result = await executeSQL(connectionString, sqlQuery);
        return Response.json(result);
    } catch (error) {
        return Response.json({ error });
    }
}
