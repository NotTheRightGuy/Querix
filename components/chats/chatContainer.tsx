"use client";
import useCurrentChatMessage from "@/store/hook/useCurrentChatMessage";
import AiReply from "./AiReply";
import UserReply from "./userReply";
import EmptyState from "../ui/emptyState";
import SQLQuery from "./sqlQuery";
import { useEffect } from "react";

export default function ChatContainer() {
    const messages = useCurrentChatMessage();
    // useEffect(() => {
    //     const lastMessage = messages[messages.length - 1];
    //     // if (lastMessage && lastMessage.type === "ai" && lastMessage.isLoading) {
    //         // setTimeout(() => {
    //         //     const newMessage = [
    //         //         {
    //         //             type: "ai",
    //         //             message: "I am a bot",
    //         //             isLoading: false,
    //         //         },
    //         //     ];
    //         //     messages.push(...newMessage);
    //         // }, 1000);
    //         messages.push(...lastMessage);
    //     }
    // }, [lastMessage]);
    console.log(messages, "thisis");
    return (
        <div className="mb-16 mt-20 px-4 w-[68vw] flex flex-col pb-52">
            {/* {messages.length === 0 && <EmptyState />} */}
            {messages.map(
                (message: {
                    type: string;
                    message: string;
                    isLoading: boolean;
                }) => {
                    if (message.type === "ai") {
                        return (
                            <AiReply
                                key={Math.random()}
                                message={message.message}
                                isLoading={message.isLoading}
                            />
                        );
                    } else if (message.type === "user") {
                        return (
                            <UserReply
                                key={Math.random()}
                                message={message.message}
                            />
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
