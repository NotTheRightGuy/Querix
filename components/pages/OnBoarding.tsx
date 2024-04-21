import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ClipLoader from "react-spinners/ClipLoader";
import { useRecoilState, useSetRecoilState } from "recoil";
import connectionString from "@/store/atom/connectionString";
import completedOnBoard from "@/store/atom/completedOnBoard";
import { motion } from "framer-motion";

import schema from "@/store/atom/schema";

export function OnBoarding() {
    const [ConnectionStr, setConnectionStr] = useState("");
    const [loading, setloading] = useState(false);
    const [message, setMessage] = useState("");

    const setConnStr = useSetRecoilState<any>(connectionString);
    const setOnBoardComplete = useSetRecoilState(completedOnBoard);

    const setSchema = useSetRecoilState(schema);

    const postConnectionString = async () => {
        setloading(true);
        console.log(ConnectionStr, "conn");
        const response = await fetch("http://localhost:3000/api/db/schema", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ connection_string: ConnectionStr }),
        })
            .then((res) => res.json())
            .then((data) => {
                setConnStr(ConnectionStr);
                if (data.schema) {
                    console.log("Connection String added");
                    setSchema(data.schema);
                    setloading(false);
                } else {
                    console.error("Failed to add connection string");
                    setloading(false);
                    setMessage("Failed to add connection string");
                }

                setOnBoardComplete(true);
            });

        // check if connections string is stored in the atom
        console.log("connection string atom", ConnectionStr);
    };
    return (
        <div className="z-[1000] flex items-center w-screen h-screen backdrop-blur-sm justify-center space-x-2 ">
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                // animate on setONBoardComplete = true

                // transition={{ duration: 0.1 }}
                className="shadow-sm flex items-center justify-between bg-[#F9FAFB] border rounded-md p-4 space-x-2"
            >
                <Card className="w-[350px] border-none rounded-none bg-transparent shadow-none">
                    <CardHeader>
                        <CardTitle>Connect to datasource</CardTitle>
                        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">
                                        Add connection string
                                    </Label>
                                    <Input
                                        id="name"
                                        onChange={(e) =>
                                            setConnectionStr(e.target.value)
                                        }
                                        placeholder="postgres://postgres:postgres@localhost:5432/postgres"
                                    />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex flex-col justify-center items-start relative">
                        <Button
                            disabled={loading ? true : false}
                            onClick={postConnectionString}
                        >
                            Connect{" "}
                            {loading ? (
                                <ClipLoader
                                    color="#FFF"
                                    size={14}
                                    className="ml-2"
                                />
                            ) : (
                                ""
                            )}
                        </Button>
                        <p
                            className={`${
                                message === "" ? "hidden" : "block text-red-300"
                            } absolute top-12`}
                        >
                            {message === "" ? "" : message}
                        </p>
                    </CardFooter>
                </Card>
                <div className="h-56 w-0.5 bg-slate-300"></div>
                <Card className="w-[350px] border-none rounded-none bg-transparent shadow-none">
                    <CardHeader>
                        <CardTitle>Define your own DDL</CardTitle>
                        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
                    </CardHeader>
                    <CardContent className="invisible">
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        placeholder="Name of your project"
                                    />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button>Define DDL</Button>
                    </CardFooter>
                </Card>
            </motion.div>
        </div>
    );
}
