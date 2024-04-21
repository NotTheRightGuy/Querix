"use client"
import Sidebar from "@/components/ui/sidebar"
import Navbar from "@/components/ui/navbar"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
export default function UserPermission() {
    const [dropDownMenu, setDropDownMenu] = useState(-1);
    const [selectedUser, setSelectedUser] = useState({});

    useEffect(() => {
        console.log(selectedUser);
    }, [selectedUser]);

    const users = [
        {
            name: "John Doe",
            email: "johndoe@gmail.com",
            database: "SQL Main",
            role: "All access"
        },
        {
            name: "jane Doe",
            email: "johndoe@gmail.com",
            database: "SQL Main",
            role: "All access"
        },
        {
            name: "Jimmy Doe",
            email: "johndoe@gmail.com",
            database: "SQL Main",
            role: "All access"
        },
        {
            name: "John Doe",
            email: "johndoe@gmail.com",
            database: "SQL Main",
            role: "All access"
        },
        {
            name: "John Doe",
            email: "johndoe@gmail.com",
            database: "SQL Main",
            role: "All access"
        },
        {
            name: "John Doe",
            email: "johndoe@gmail.com",
            database: "SQL Main",
            role: "All access"
        },
    ]
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex flex-col pl-24 w-full gap-2">
                <Navbar
                    currPage="Roles and Permissions"
                />
                <header className="w-full px-4 justify-between flex">
                    <h1 className="text-3xl font-bold">Roles and Permissions</h1>
                    <button className="bg-blue-600 text-white px-4 p-2 rounded-lg">
                        + Invite users
                    </button>
                </header>
                <div className="w-full px-4 mt-10 rounded-xl">
                    <header className="p-4 bg-gray-100 flex justify-between rounded-t-xl w-full font-bold">
                        <p className="w-1/4"> Name </p>
                        <p className="w-1/4"> Email address </p>
                        <p className="w-1/4"> Database </p>
                        <p className="w-1/4"> Roles </p>
                    </header>
                    {
                        users.map((user, index) => (
                            <div key={index} className="p-2 px-4 border-[1px] border-t-0 flex justify-between items-center text-sm w-full"
                                onClick={() => {
                                    setSelectedUser(user);
                                }}
                            >
                                <p className="w-1/4"> {user.name} </p>
                                <p className="w-1/4"> {user.email} </p>
                                <p className="w-1/4"> {user.database} </p>
                                <p className="w-1/4 select-none relative"> 
                                <motion.div
                                    whileTap={{ scale: 0.95 }}

                                    className="border-[#D1D5DB] relative border-solid border-2 rounded-xl px-2 p-1 flex items-center gap-1 cursor-pointer w-fit bg-white"
                                    onClick={() => {
                                        setDropDownMenu(index);
                                    }}
                                >
                                    {user.role}
                                    <div className="animate-pulse" >
                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.5 7.25L9 11.75L13.5 7.25" stroke="#525252" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </motion.div>
                                    {/* <AnimatePresence> */}
                                        <motion.div 
                                            className={`${dropDownMenu === index
                                                ? "absolute top-12 right-40 bg-white "
                                                : "hidden"
                                                } border-[1px] border-solid border-[#D1D5DB] rounded-lg z-50`}
                                        >
                                            <h3 className="p-2 w-max cursor-pointer" onClick={
                                                () => {
                                                    setDropDownMenu(-1);
                                                }
                                            }>Select Database</h3>
                                            <hr />
                                            <div className="flex flex-col px-1 p-1">
                                                <p className="hover:bg-[#D1D5DB] px-1 rounded cursor-pointer" onClick={() => {
                                                    setSelectedUser({ ...selectedUser, role: "All access" })
                                                    // users[index].role = "All access"
                                                    setDropDownMenu(-1)
                                                }}>
                                                    All access
                                                </p>
                                                <p className="hover:bg-[#D1D5DB] px-1 rounded cursor-pointer"
                                                    onClick={() => {
                                                        setSelectedUser({ ...selectedUser, role: "Write access" })
                                                        // users[index].role = "Write access"
                                                        setDropDownMenu(-1)
                                                    }}
                                                >
                                                    Write access
                                                </p>
                                                <p className="hover:bg-[#D1D5DB] px-1 rounded cursor-pointer"
                                                    onClick={() => {
                                                        setSelectedUser({ ...selectedUser, role: "Read access" })
                                                        // users[index].role = "Read access"
                                                        setDropDownMenu(-1)
                                                    }}
                                                >
                                                    Read access
                                                </p>
                                            </div>
                                        </motion.div>
                                    {/* </AnimatePresence> */}
                                </p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}