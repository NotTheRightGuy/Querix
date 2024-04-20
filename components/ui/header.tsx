"use client";

import { motion, AnimatePresence } from "framer-motion";
import GreenDot from "@/public/green-dot";
import { useState } from "react";

export default function Header() {
    const [dropDownMenu, setDropDownMenu] = useState(false);

    return (
        <header className="flex justify-between items-center p-4 h-16 border-b fixed top-0 w-[69%]">
            <div className="flex">
                <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15 18.5L9 12.5L15 6.5"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                <p className="w-fit pl-2">Login Information of EMP</p>
            </div>
            <motion.div
                onClick={() => {
                    setDropDownMenu(!dropDownMenu);
                }}
                className="border-[#D1D5DB] relative border-solid border-2 rounded-xl px-2 p-1 flex items-center gap-1 cursor-pointer"
            >
                <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M4.5 7.25L9 11.75L13.5 7.25"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                SQL Main
                <div className="animate-pulse">
                    <GreenDot />
                </div>
                <AnimatePresence>
                    <motion.div
                        className={`${
                            dropDownMenu
                                ? "absolute top-12 right-1 bg-white"
                                : "hidden"
                        } border-[1px] border-solid border-[#D1D5DB] rounded-lg`}
                    >
                        <h3 className="p-2 w-max">Select Database</h3>
                        <hr />
                        <div className="flex flex-col px-1 p-1">
                            <p className="hover:bg-[#D1D5DB] px-1 rounded">
                                {" "}
                                SQL Main{" "}
                            </p>
                            <p className="hover:bg-[#D1D5DB] px-1 rounded">
                                {" "}
                                PostgreSQL{" "}
                            </p>
                            <p className="hover:bg-[#D1D5DB] px-1 rounded">
                                {" "}
                                MongoDB{" "}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </header>
    );
}
