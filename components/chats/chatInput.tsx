"use client";

import { Input } from "@/components/ui/input";
import FileSpreadsheet from "@/public/file-spreadsheet";
import SendArrow from "@/public/sendArrow";
import { useState } from "react";
import currentChatMessage from "@/store/atom/currentChatMessage";
import { useRecoilState } from "recoil";
import useSchema from "@/store/hook/useSchema";
import useIsUsingDDL from "@/store/hook/useIsUsingDDL";

import schemaAtom from "@/store/atom/schema";
import { useSetRecoilState } from "recoil";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export default function ChatInput() {
    const [message, setMessage] = useState("");
    const [chatMessages, setChatMessages] = useRecoilState(currentChatMessage);
    const schema = useSchema();

    const { usingDDL } = useIsUsingDDL();

    const [tempMessage, setTempMessage] = useState("");
    const [ddl, setDDL] = useState("");

    const [confMsg, setConfMsg] = useState("");

    const setSchema = useSetRecoilState(schemaAtom);

    const generateSchema = (ddl: string) => {
        fetch("/api/db/dllToSchema", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ddl,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setSchema(data);
                setConfMsg(
                    "Schema Added Successfully, You can start asking questions now."
                );
            });
    };

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
                // console.log(data, "this data");
                if (data.query) {
                    // saveChats(data.query, "code")
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
                        {
                            type: "user",
                            message: tempMessage,
                            isLoading: false,
                        },
                    ];
                    setChatMessages([...chatMessages, ...newMessage]);
                } else {
                    // saveChats(data.msg, "ai")
                    const newMessage = [
                        {
                            type: "user",
                            message: tempMessage,
                            isLoading: false,
                        },
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
        <div
            className={`flex gap-2 h-fit fixed bottom-0  m-2 bg-white ${
                usingDDL ? "w-[93%]" : "w-[67%]"
            }`}
        >
            <Input
                placeholder="Ask questions related to your database."
                onChange={(e) => {
                    setMessage(e.target.value);
                    setTempMessage(e.target.value);
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
            <Dialog>
                <DialogTrigger>
                    {" "}
                    <div className="border-2 border-[#D1D5DB] hover:border-black duration-200 cursor-pointer flex items-center w-11 justify-center rounded">
                        <FileSpreadsheet />
                    </div>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            Define your Database using DDL
                        </DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                        <Textarea
                            placeholder="Define your database using DDL"
                            onChange={(e) => {
                                setDDL(e.target.value);
                            }}
                            value={ddl}
                        />
                        <Button
                            className="mt-4"
                            onClick={() => {
                                generateSchema(ddl);
                            }}
                        >
                            Add this to Model
                        </Button>
                        {<p>{confMsg}</p>}
                    </DialogDescription>
                </DialogContent>
            </Dialog>
        </div>
    );
}
