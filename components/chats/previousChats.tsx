"use client";
import Avatar from "@/public/avatar";
import User from "@/public/user";
import SQLQuery from "./sqlQuery";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
export default function PreviousChats(props:any) {
    const [previousMessages, setPreviousMessages] = useState([]);
    const { user, isSignedIn } = useUser();
    const [currUser, setCurrUser] = useState(null);
    useEffect(() => {
        if (isSignedIn && user){
            console.log(user,"usersssssssssssssssss")
            console.log(user.emailAddresses[0].emailAddress,"email")
            fetch('http://localhost:3000/api/saveUser',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({id:user.id,email:user.emailAddresses[0].emailAddress,fullName:user.fullName,imageUrl:user.imageUrl})
            })
            .then(res=>res.json())
            .then(res=>{
                setCurrUser(res.user)
                setPreviousMessages(res.user.chats)
                console.log(res.user.chats,"reqturend api in chatcon")
            })
        }
        console.log(user,"user")
    }, []);
    return (
        <div className="mb-16 mt-20 px-4 w-[68vw] flex flex-col pb-52">
            {previousMessages.map(
                (message:any) => {
                    if (message.type === "ai") {
                        return (
                            <div className="flex gap-2 mt-2">
                            <Avatar />
                            <div className="flex flex-col">
                                <div className="flex w-full justify-between items-center">
                                    <p className="font-medium">Quirx AI</p>
                                </div>
                                <div className="rounded-xl rounded-tl-none bg-blue-500 p-2.5 text-sm w-fit text-white">
                                    {message.message}
                                </div>
                            </div>
                        </div>
                        );
                    } else if (message.type === "user") {
                        return (
                            <div className="flex gap-2 mt-2 self-end items-center">
                            <div className="flex flex-col">
                                <div className="flex w-full justify-between items-center">
                                    <p className="font-medium">User</p>
                                </div>
                                <div className="rounded-xl rounded-tr-none bg-blue-500 p-2.5 text-sm w-fit text-white">
                                    {message.message}
                                </div>
                            </div>
                            <User />
                        </div>
                        );
                    } else if (message.type === "code") {
                        return (
                            <SQLQuery
                                key={Math.random()}
                                query={message.message}
                            />
                        );
                    }
                }
            )}
        </div>
    );
}
