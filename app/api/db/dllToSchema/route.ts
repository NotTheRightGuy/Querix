import convertDDLToSchema from "@/actions/convertDDLtoSchema";
import { NextResponse } from "next/server";

export async function POST(req: NextResponse) {
    const body = await req.json();
    const { ddl } = body;
    if (!ddl) {
        return Response.json({ error: "Missing ddl" });
    }
    try {
        const result = await convertDDLToSchema(ddl);
        return Response.json(result.lc_kwargs.content);
    } catch (error) {
        return Response.json({ error });
    }
}
