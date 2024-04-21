import React from "react";

function User() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            fill="none"
            shape-rendering="auto"
            width="42"
            height="42"
            className="rounded-full"
        >
            <mask id="viewboxMask">
                <rect
                    width="100"
                    height="100"
                    rx="0"
                    ry="0"
                    x="0"
                    y="0"
                    fill="#fff"
                />
            </mask>
            <g mask="url(#viewboxMask)">
                <rect fill="#f1f4dc" width="100" height="100" x="0" y="0" />
                <g transform="matrix(1.2 0 0 1.2 -10 -10)">
                    <g transform="translate(58, -35) rotate(-4 50 50)">
                        <path
                            d="M100 50A50 50 0 1 1 0 50a50 50 0 0 1 100 0Z"
                            fill="#69d2e7"
                        />
                    </g>
                </g>
                <g transform="matrix(.8 0 0 .8 10 10)">
                    <g transform="translate(-21, -14) rotate(99 50 50)">
                        <path d="M0 0h100v100H0V0Z" fill="#f88c49" />
                    </g>
                </g>
                <g transform="matrix(.4 0 0 .4 30 30)">
                    <g transform="translate(-4, 4) rotate(120 50 50)">
                        <path d="m50 7 50 86.6H0L50 7Z" fill="#1c799f" />
                    </g>
                </g>
            </g>
        </svg>
    );
}

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
            <User />
        </div>
    );
}
