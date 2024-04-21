"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { anOldHope } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Exampad from "@/public/examPad";
import { Button } from "../ui/button";
import { useSetRecoilState } from "recoil";
import currentlyExecuting from "@/store/atom/currentlyExecuting";
import useConnectionString from "@/store/hook/useConnectionString";
import { useState } from "react";
import { useRecoilState } from "recoil";
import terminalChat from "@/store/atom/terminalChat";
import useIsUsingDDL from "@/store/hook/useIsUsingDDL";

function jsonToQueryOutput(jsonData: any) {
    const { rows, fields } = jsonData;
    const headers = fields.map((field: any) => field.name);
    const formattedRows = rows.map((row: any) => {
        const rowData = fields.map((field: any) => row[field.name]);
        return `${rowData.join(" | ")}<EOL>`;
    });
    const output = [`${headers.join(" | ")}<EOL>`, ...formattedRows];
    return output.join("\n");
}

export default function SQLQuery({ query }: { query: string }) {
    const [hasQueryExecuted, setHasQueryExecuted] = useState(false);
    const [isExecuting, setIsExecuting] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleCopyText = async (e: any) => {
        try {
            const curr = e.target.parentNode.parentNode.children[1].innerText;
            await navigator.clipboard.writeText(curr);
        } catch (err) {
            console.error("Unable to copy to clipboard.", err);
            alert("Copy to clipboard failed.");
        }
    };

    const connectionString = useConnectionString();
    const setCurrentlyExecuting = useSetRecoilState(currentlyExecuting);

    const [terminalChatState, setTerminalChatState] =
        useRecoilState(terminalChat);

    function handleExecute() {
        console.log("Executing query:", query);
        setCurrentlyExecuting(query);
        setIsExecuting(true);
        fetch("/api/db/execute", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                connectionString,
                sqlQuery: query,
            }),
        })
            .then((res) => res.json())
            .then((data: any) => {
                if (data.error) {
                    console.error(data.error);
                    setIsError(true);
                } else {
                    console.log("Query executed successfully.");
                    const output = jsonToQueryOutput(data);
                    console.log(output);
                    setTerminalChatState((prev) => [
                        ...prev,
                        {
                            command: query,
                            output: output,
                        },
                    ]);
                    setHasQueryExecuted(true);
                }
            });
        setIsExecuting(false);
    }

    return (
        <div className="pl-11 relative w-fit mt-2 ml-1 mb-4">
            <button
                className="absolute right-0 px-4 py-3 flex items-center justify-center gap-1 rounded text-[10px] text-white"
                onClick={handleCopyText}
            >
                <Exampad></Exampad>
            </button>
            <div className="p-2.5 rounded-xl text-xs font-mono bg-slate-900 pr-16 text-wrap">
                <SyntaxHighlighter
                    language="sql"
                    style={anOldHope}
                    wrapLines={true}
                    wrapLongLines={true}
                    customStyle={{ overflowX: "hidden" }}
                >
                    {query}
                </SyntaxHighlighter>
            </div>
            {
                // If the query has executed, show a success message
                hasQueryExecuted && (
                    <div className="rounded-xl text-green-400 p-2.5 text-sm w-fit font-bold">
                        Query executed successfully.
                    </div>
                )
            }
            {
                // If the query has executed with an error, show an error message
                isError && (
                    <div className="rounded-xl text-red-400 p-2.5 text-sm w-fit font-bold">
                        Query execution failed. Please check the query and try
                        again.
                    </div>
                )
            }
            {
                // If the query has not executed, show a failure message
                !hasQueryExecuted && (
                    <div className="flex items-center mt-1 gap-4">
                        <div className="rounded-xl bg-slate-500 p-2.5 text-sm w-fit text-white">
                            Would you like me to execute this query?
                        </div>
                        <div>
                            <Button
                                variant={"destructive"}
                                onClick={handleExecute}
                            >
                                {isExecuting ? "Executing..." : "Execute"}
                            </Button>
                        </div>
                    </div>
                )
            }
        </div>
    );
}
