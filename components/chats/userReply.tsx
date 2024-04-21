import Image from "next/image";
import React from "react";

export default function UserReply({ message = "" }) {
    return (
        <div className="flex gap-2 mt-2 self-end items-center">
            <div className="flex flex-col">
                <div className="flex w-full justify-between items-center">
                    <p className="font-medium">User</p>
                </div>
                <div className="rounded-xl rounded-tr-none bg-blue-500 p-2.5 text-sm w-fit text-white">
                    {message}
                </div>
            </div>
            <Image src={`https://api.dicebear.com/8.x/big-ears-neutral/svg`} alt='icon' />
        </div>
    );
}
