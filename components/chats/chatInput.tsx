"use client";

import { Input } from "@/components/ui/input";
import FileSpreadsheet from "@/public/file-spreadsheet";
import SendArrow from "@/public/sendArrow";
import { useState } from "react";
import currentChatMessage from "@/store/atom/currentChatMessage";
import { useRecoilState } from "recoil";
import useSchema from "@/store/hook/useSchema";

export default function ChatInput() {
    const [message, setMessage] = useState("");
    const [chatMessages, setChatMessages] = useRecoilState(currentChatMessage);
    const schema = useSchema();

    const sendMessage = () => {
        setChatMessages([
            ...chatMessages,
            {
                type: "user",
                message,
                isLoading: false,
            },
            {
                type: "ai",
                message: "",
                isLoading: true,
            },
        ]);
        setMessage("");

        fetch("/api/db/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                schema,
                question: message,
            }),
        })
            .then((res) => res.json())
            .then((data: any) => {
                console.log(data);
                if (data.query) {
                    const newMessage = [
                        {
                            type: "ai",
                            message: data.msg,
                            isLoading: false,
                        },
                        {
                            type: "code",
                            message: data.query,
                            isLoading: false,
                        },
                    ];
                    setChatMessages([...chatMessages, ...newMessage]);
                } else {
                    const newMessage = [
                        {
                            type: "ai",
                            message: data.msg,
                            isLoading: false,
                        },
                    ];
                    setChatMessages([...chatMessages, ...newMessage]);
                }
            });
    };

    return (
        <div className="flex gap-2 h-fit fixed bottom-0 w-[67%] m-2 bg-white">
            <Input
                placeholder="Ask questions related to your database."
                onChange={(e) => {
                    setMessage(e.target.value);
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        sendMessage();
                    }
                }}
                value={message}
            />
            <div
                className="bg-gray-700 hover:bg-gray-900 duration-200 cursor-pointer flex items-center w-11 justify-center rounded "
                onClick={sendMessage}
            >
                <SendArrow></SendArrow>
            </div>
            <div className="border-2 border-[#D1D5DB] hover:border-black duration-200 cursor-pointer flex items-center w-11 justify-center rounded">
                <FileSpreadsheet />
            </div>
        </div>
    );
}
