"use client";

import { Input } from "@/components/ui/input";
import FileSpreadsheet from "@/public/file-spreadsheet";
import SendArrow from "@/public/sendArrow";
import { useState } from "react";
import currentChatMessage from "@/store/atom/currentChatMessage";
import { useRecoilState } from "recoil";

export default function ChatInput() {
    const [message, setMessage] = useState("");
    const [chatMessages, setChatMessages] = useRecoilState(currentChatMessage);

    const sendMessage = () => {
        setChatMessages([
            ...chatMessages,
            {
                type: "user",
                message,
            },
        ]);
        setMessage("");
    };

    return (
        <div className="flex gap-2 h-fit fixed bottom-0 w-[67%] m-2  bg-white  py-2">
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
