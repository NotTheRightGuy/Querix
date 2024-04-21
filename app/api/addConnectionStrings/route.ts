// write an endpoint to push connection strings in the array in the database
// code

import { client } from '../../../lib/mongodb';
import { NextResponse } from 'next/server';

export async function POST(request: any, response: any) {
    try {

        const data = await request.json();

        const { connection_string, email } = data;

        const conn = await client.connect();
        const db = conn.db('hacknuthon');
        const user: any = await db.collection("registeredUsers").findOne({ email: email });
        // check if connectionStrings are unique
        if (user.connectionStrings.includes(connection_string)) {
            return NextResponse.json({
                msg: "Connection String Already Exists",
            });
        }
        if (user) {
            await db.collection("registeredUsers").updateOne({ email: email }, { $push: { connectionStrings: connection_string } })
            return NextResponse.json({
                msg: "Connection String Added",
            });
        }
        else {
            return NextResponse.json({
                msg: "User Not Found",
            });
        }

    } catch (err) {
        return NextResponse.error();
    }
}

