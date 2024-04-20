"use client";

import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Terminal() {
    const [code, setCode] = useState("SELECT * FROM MISERY");

    return (
        <div className="w-full flex flex-col justify-between h-screen border-l-2 border-slate-100">
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
            <div className="pl-2 pb-4 flex items-center justify-start text-gray-800 text-xs">
                <div>{">>"}</div>

                <SyntaxHighlighter language="sql" style={a11yLight}>
                    {code}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}
