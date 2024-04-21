// write an endpoint to push an object to an array of objects
// the object strign contains type, message and query
// code

import {client} from '../../../lib/mongodb';
import { NextResponse } from 'next/server';

export async function POST(request:any, response:any) {
    try {

        const data=await request.json();

        const { type, message, query, email } = data;
      
        const conn = await client.connect();
        const db = conn.db('hacknuthon');
        const user=await db.collection("registeredUsers").findOne({email:email});

        if (user){
            if (type === "code"){
                await db.collection("registeredUsers").updateOne({email:email},
                {$push:{chats:{type:type, query:message}}
                })
            }
            else{
                await db.collection("registeredUsers").updateOne({email:email},
                    {$push:{chats:{type:type, message:message}}
                })
            }
            return NextResponse.json({
                msg: "Chat added",
            });
        }
        else{
            return NextResponse.json({
                msg: "User Not Found",
            });
        }

    } catch (err) {
        return NextResponse.error();
    }
} 

