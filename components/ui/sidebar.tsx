"use client";

import { useState, useRef } from "react";
import Icon from "../ui/icon";
import { motion } from "framer-motion";

export default function Sidebar() {
    const asideRef = useRef(null);

    const [name, setName] = useState("Jeet Gajjar");
    const [email, setEmail] = useState("jeetgajjar@gmail.com");

    const variants = {
        initial: {
            width: "5rem",
            transition: {
                duration: 0.3,
            },
        },
    };

    return (
        <motion.aside
            className="z-40 h-screen overflow-clip fixed ml-4  left-0 bg-white border-[#CDD7E1] border-r "
            variants={variants}
            initial="initial"
            id="drawer-navigation"
            whileHover={{ width: "250px" }}
        >
            <div
                className={`overflow-y-auto px-2 h-full bg-white dark:bg-gray-800 flex flex-col justify-between`}
            >
                <ul className="space-y-2">
                    <div className="my-4">
                        <Icon />
                    </div>
                    <li>
                        <a
                            href="#"
                            className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16.5 18H16.125L13.65 13.5C14.025 13.125 14.25 12.6 14.25 12C14.25 10.725 13.275 9.75 12 9.75C10.725 9.75 9.75 10.725 9.75 12C9.75 12.6 9.975 13.125 10.35 13.5L7.875 18H7.5C6.225 18 5.25 18.975 5.25 20.25C5.25 21.525 6.225 22.5 7.5 22.5C8.775 22.5 9.75 21.525 9.75 20.25C9.75 19.65 9.525 19.125 9.15 18.75L11.625 14.175H12.375L14.85 18.75C14.475 19.125 14.25 19.65 14.25 20.25C14.25 21.525 15.225 22.5 16.5 22.5C17.775 22.5 18.75 21.525 18.75 20.25C18.75 18.975 17.775 18 16.5 18ZM12 11.25C12.45 11.25 12.75 11.55 12.75 12C12.75 12.45 12.45 12.75 12 12.75C11.55 12.75 11.25 12.45 11.25 12C11.25 11.55 11.55 11.25 12 11.25ZM7.5 21C7.05 21 6.75 20.7 6.75 20.25C6.75 19.8 7.05 19.5 7.5 19.5C7.95 19.5 8.25 19.8 8.25 20.25C8.25 20.7 7.95 21 7.5 21ZM16.5 21C16.05 21 15.75 20.7 15.75 20.25C15.75 19.8 16.05 19.5 16.5 19.5C16.95 19.5 17.25 19.8 17.25 20.25C17.25 20.7 16.95 21 16.5 21Z"
                                    fill="black"
                                />
                                <path
                                    d="M18.6 6.825C17.925 3.75 15.225 1.5 12 1.5C8.775 1.5 6.075 3.75 5.4 6.825C3.15 7.275 1.5 9.3 1.5 11.625C1.5 14.325 3.675 16.5 6.375 16.5H6.75V15H6.375C4.5 15 3 13.5 3 11.625C3 9.9 4.35 8.4 6.075 8.25H6.75L6.825 7.65C7.125 4.95 9.375 3 12 3C14.625 3 16.875 4.95 17.175 7.575L17.25 8.25L17.85 8.325C19.575 8.475 20.925 9.975 20.925 11.7C20.925 13.575 19.425 15.075 17.55 15.075H17.25V16.575H17.625C20.325 16.575 22.5 14.4 22.5 11.7C22.5 9.3 20.85 7.275 18.6 6.825Z"
                                    fill="black"
                                />
                            </svg>

                            <span className="ml-3 absolute left-20">
                                SQL Concierge
                            </span>
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17ZM19 19H5V5H19V19.1M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z"
                                    fill="#555E68"
                                />
                            </svg>

                            <span className="ml-3 absolute left-20">
                                Analytics
                            </span>
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16 17V19H2V17C2 17 2 13 9 13C16 13 16 17 16 17ZM12.5 7.50001C12.5 6.80777 12.2947 6.13108 11.9101 5.55551C11.5256 4.97994 10.9789 4.53133 10.3394 4.26643C9.69985 4.00152 8.99612 3.93221 8.31718 4.06726C7.63825 4.20231 7.01461 4.53565 6.52513 5.02513C6.03564 5.51462 5.7023 6.13826 5.56725 6.81719C5.4322 7.49612 5.50152 8.19986 5.76642 8.8394C6.03133 9.47894 6.47993 10.0256 7.0555 10.4102C7.63108 10.7947 8.30777 11 9 11C9.92826 11 10.8185 10.6313 11.4749 9.97488C12.1313 9.3185 12.5 8.42826 12.5 7.50001ZM15.94 13C16.5547 13.4758 17.0578 14.0804 17.4137 14.7715C17.7696 15.4626 17.9697 16.2233 18 17V19H22V17C22 17 22 13.37 15.94 13ZM15 4.00001C14.3118 3.99681 13.6388 4.20254 13.07 4.59001C13.6774 5.43874 14.0041 6.45629 14.0041 7.50001C14.0041 8.54372 13.6774 9.56127 13.07 10.41C13.6388 10.7975 14.3118 11.0032 15 11C15.9283 11 16.8185 10.6313 17.4749 9.97488C18.1313 9.3185 18.5 8.42826 18.5 7.50001C18.5 6.57175 18.1313 5.68151 17.4749 5.02513C16.8185 4.36876 15.9283 4.00001 15 4.00001Z"
                                    fill="#555E68"
                                />
                            </svg>

                            <span className="ml-3 absolute left-20">
                                Portfolios
                            </span>
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 21C9.7 21 7.696 20.2377 5.988 18.713C4.28 17.1883 3.30067 15.284 3.05 13H5.1C5.33333 14.7333 6.10433 16.1667 7.413 17.3C8.72167 18.4333 10.2507 19 12 19C13.95 19 15.6043 18.321 16.963 16.963C18.3217 15.605 19.0007 13.9507 19 12C18.9993 10.0493 18.3203 8.39533 16.963 7.038C15.6057 5.68067 13.9513 5.00133 12 5C10.85 5 9.775 5.26667 8.775 5.8C7.775 6.33333 6.93333 7.06667 6.25 8H9V10H3V4H5V6.35C5.85 5.28333 6.88767 4.45833 8.113 3.875C9.33833 3.29167 10.634 3 12 3C13.25 3 14.421 3.23767 15.513 3.713C16.605 4.18833 17.555 4.82967 18.363 5.637C19.171 6.44433 19.8127 7.39433 20.288 8.487C20.7633 9.57967 21.0007 10.7507 21 12C20.9993 13.2493 20.762 14.4203 20.288 15.513C19.814 16.6057 19.1723 17.5557 18.363 18.363C17.5537 19.1703 16.6037 19.812 15.513 20.288C14.4223 20.764 13.2513 21.0013 12 21ZM14.8 16.2L11 12.4V7H13V11.6L16.2 14.8L14.8 16.2Z"
                                    fill="#555E68"
                                />
                            </svg>

                            <span className="ml-3 absolute left-20">
                                History
                            </span>
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M19.1401 12.94C19.1801 12.64 19.2001 12.33 19.2001 12C19.2001 11.68 19.1801 11.36 19.1301 11.06L21.1601 9.47999C21.3401 9.33999 21.3901 9.06999 21.2801 8.86999L19.3601 5.54999C19.2401 5.32999 18.9901 5.25999 18.7701 5.32999L16.3801 6.28999C15.8801 5.90999 15.3501 5.58999 14.7601 5.34999L14.4001 2.80999C14.3601 2.56999 14.1601 2.39999 13.9201 2.39999H10.0801C9.84011 2.39999 9.65011 2.56999 9.61011 2.80999L9.25011 5.34999C8.66011 5.58999 8.12011 5.91999 7.63011 6.28999L5.24011 5.32999C5.02011 5.24999 4.77011 5.32999 4.65011 5.54999L2.74011 8.86999C2.62011 9.07999 2.66011 9.33999 2.86011 9.47999L4.89011 11.06C4.84011 11.36 4.80011 11.69 4.80011 12C4.80011 12.31 4.82011 12.64 4.87011 12.94L2.84011 14.52C2.66011 14.66 2.61011 14.93 2.72011 15.13L4.64011 18.45C4.76011 18.67 5.01011 18.74 5.23011 18.67L7.62011 17.71C8.12011 18.09 8.65011 18.41 9.24011 18.65L9.60011 21.19C9.65011 21.43 9.84011 21.6 10.0801 21.6H13.9201C14.1601 21.6 14.3601 21.43 14.3901 21.19L14.7501 18.65C15.3401 18.41 15.8801 18.09 16.3701 17.71L18.7601 18.67C18.9801 18.75 19.2301 18.67 19.3501 18.45L21.2701 15.13C21.3901 14.91 21.3401 14.66 21.1501 14.52L19.1401 12.94ZM12.0001 15.6C10.0201 15.6 8.40011 13.98 8.40011 12C8.40011 10.02 10.0201 8.39999 12.0001 8.39999C13.9801 8.39999 15.6001 10.02 15.6001 12C15.6001 13.98 13.9801 15.6 12.0001 15.6Z"
                                    fill="#636B74"
                                />
                            </svg>

                            <span className="ml-3 absolute left-20">
                                Settings
                            </span>
                        </a>
                    </li>
                </ul>
                <ul className="flex flex-row gap-x-6 mt-2 py-3 px-1 items-center border-t border-gray-200 ">
                    <div>
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clip-path="url(#clip0_3_188)">
                                <rect
                                    width="48"
                                    height="48"
                                    rx="24"
                                    fill="#E3EFFB"
                                />
                                <path
                                    d="M18.8192 18.9091H20.788V28.1903C20.788 29.0298 20.6218 29.7479 20.2894 30.3445C19.9613 30.9411 19.4989 31.397 18.9023 31.7124C18.3058 32.0234 17.6069 32.179 16.8058 32.179C16.0685 32.179 15.4059 32.0447 14.8178 31.7763C14.234 31.5078 13.7717 31.1179 13.4308 30.6065C13.0941 30.0909 12.9258 29.4645 12.9258 28.7273H14.8881C14.8881 29.0895 14.9712 29.4027 15.1374 29.6669C15.3079 29.9311 15.5401 30.1378 15.8342 30.2869C16.1325 30.4318 16.4734 30.5043 16.8569 30.5043C17.2745 30.5043 17.6282 30.4169 17.918 30.2422C18.212 30.0632 18.4357 29.8011 18.5891 29.456C18.7425 29.1108 18.8192 28.6889 18.8192 28.1903V18.9091ZM32.5222 23.0447C32.3986 22.657 32.2324 22.3097 32.0236 22.0028C31.8191 21.6918 31.574 21.4276 31.2885 21.2102C31.003 20.9886 30.677 20.8203 30.3105 20.7053C29.9483 20.5902 29.5499 20.5327 29.1152 20.5327C28.378 20.5327 27.7132 20.7223 27.1209 21.1016C26.5286 21.4808 26.0598 22.0369 25.7147 22.7699C25.3738 23.4986 25.2033 24.3913 25.2033 25.4482C25.2033 26.5092 25.3759 27.4062 25.7211 28.1392C26.0662 28.8722 26.5392 29.4283 27.1401 29.8075C27.7409 30.1868 28.4249 30.3764 29.1919 30.3764C29.9036 30.3764 30.5236 30.2315 31.052 29.9418C31.5847 29.652 31.9959 29.2429 32.2857 28.7145C32.5797 28.1818 32.7267 27.5554 32.7267 26.8352L33.2381 26.9311H29.4924V25.3011H34.638V26.7905C34.638 27.8899 34.4036 28.8445 33.9348 29.6541C33.4703 30.4595 32.8269 31.0817 32.0044 31.5206C31.1863 31.9595 30.2488 32.179 29.1919 32.179C28.0073 32.179 26.9675 31.9062 26.0726 31.3608C25.182 30.8153 24.4874 30.0419 23.9888 29.0405C23.4902 28.0348 23.2409 26.8416 23.2409 25.4609C23.2409 24.4169 23.3858 23.4794 23.6756 22.6484C23.9654 21.8175 24.3723 21.1122 24.8965 20.5327C25.4249 19.9489 26.0449 19.5036 26.7566 19.1967C27.4725 18.8857 28.2544 18.7301 29.1025 18.7301C29.8098 18.7301 30.4682 18.8345 31.0776 19.0433C31.6912 19.2521 32.2367 19.5483 32.714 19.9318C33.1955 20.3153 33.5939 20.7713 33.9093 21.2997C34.2246 21.8239 34.4377 22.4055 34.5485 23.0447H32.5222Z"
                                    fill="#12467B"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_3_188">
                                    <rect
                                        width="48"
                                        height="48"
                                        rx="24"
                                        fill="white"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="overflow-clip">
                        <div>
                            <p>{name}</p>
                            <p className="text-gray-500 text-xs">{email}</p>
                        </div>
                    </div>
                </ul>
            </div>
        </motion.aside>
    );
}
