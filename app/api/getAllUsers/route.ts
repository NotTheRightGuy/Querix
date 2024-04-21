import { client } from '../../../lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET(request:any, response:any) {
    try {
        const conn = await client.connect();
        const db = conn.db('hacknuthon');
        const users = await db.collection("registeredUsers").find().toArray();
        // console.log(users, "users");
        return NextResponse.json(users);
    }
    catch (err) {
        return NextResponse.error();
    }
}