import { NextResponse } from "next/server";
import generateSQL from "@/actions/generateSQL";

export async function POST(req: NextResponse) {
    const body = await req.json();
    const { schema, question } = body;

    if (!schema || !question) {
        return Response.json({ err: "Schema or question missing" });
    }

    const response = await generateSQL(question, schema);
    const content = response.lc_kwargs.content;
    if (!content) {
        return Response.json({ err: "Error in generating SQL" });
    } else {
        return Response.json(
            JSON.parse(content)
        );
    }
}
