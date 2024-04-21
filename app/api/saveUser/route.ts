import {client} from '../../../lib/mongodb';
import { NextResponse } from 'next/server';

export async function POST(request:any, response:any) {
    try {

        const data=await request.json();

        const {id,email,fullName}=data;
      
        const conn = await client.connect();
        const db = conn.db('hacknuthon');
        const user=await db.collection("registeredUsers").findOne({email:email});
        console.log(user,"request cameeeeee");
        if (!user){
            await db.collection("registeredUsers").insertOne({
                email:email,
                id:id,
                fullName:fullName
            })
            return NextResponse.json({
                user:user   
            });
        }
        else{
            return NextResponse.json({
                user:user
            });
        }
    } catch (err) {
        return NextResponse.error();
    }
} 
