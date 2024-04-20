"use client";

import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import useTerminalChat from "@/store/hook/useTerminalChat";
import useCurrentlyExecuting from "@/store/hook/useCurrentlyExecuting";

export default function Terminal() {
    const codes = useTerminalChat();
    const currentCommand = useCurrentlyExecuting();

    return (
        <div className="w-full flex flex-col relative h-screen border-l-2 border-slate-100">
            <header className="flex justify-between items-center p-4 h-16 border-b">
                <div className="flex">
                    <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4 17.5L10 11.5L4 5.5"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M12 19.5H20"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>

                    <p className="w-fit">Terminal</p>
                </div>
            </header>
            <div className="pl-2 pb-4 flex flex-col absolute bottom-0 justify-start text-gray-800 text-xs  w-full">
                {codes.map((code, index) => (
                    <div key={index} className="flex flex-col p-4">
                        <div className="flex">
                            <p className="text-gray-800">
                                {" "}
                                {"~ > "}
                                {code.command}
                            </p>
                        </div>
                        <div className="flex">
                            <p className="text-gray-800">{code.output}</p>
                        </div>
                    </div>
                ))}

                <SyntaxHighlighter
                    language="sql"
                    style={a11yLight}
                    wrapLongLines={true}
                >
                    {"~ > " + currentCommand}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}
