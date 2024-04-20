"use client";

import { useState } from "react";

export default function History() {
    const [history, setHistory] = useState([
        {
            text: "Quisque porta volutpat erat. Quisque erat eros, viverra eget",
        },
    ]);

    return (
        <main className="h-screen flex flex-row items-center justify-start ">
            <div
                className={`flex flex-col items-center justify-start h-screen w-60 border border-r-[#CDD7E1]`}
            >
                <div className="w-full flex flex-col space-y-2 justify-between items-start  overflow-y-scroll">
                    <p className="font-bold text-2xl px-2 pt-4">Chats</p>
                    <p className="font-normal text-sm text-gray-700 px-2">
                        Todays
                    </p>
                    <div className="flex flex-col items-start justify-center">
                        {history.map((item) => (
                            <div
                                className="bg-transparent overflow-hidden text-ellipsis h-8 text-black hover:bg-gray-100 text-sm cursor-pointer p-2 rounded-[6px]"
                                key={Math.random()}
                            >
                                {item.text}
                            </div>
                        ))}
                    </div>
                    <p className="font-normal text-sm text-gray-700">
                        Yesterdays
                    </p>
                    <div className="flex flex-col items-start justify-center">
                        {history.map((item) => (
                            <div
                                className="bg-transparent overflow-hidden text-ellipsis h-8 text-black hover:bg-gray-100 text-sm cursor-pointer p-2 rounded-[6px]"
                                key={Math.random()}
                            >
                                {item.text}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
