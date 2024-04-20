"use client";

import { use, useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import Icon from "../ui/icon";
import { motion, AnimatePresence } from "framer-motion";
import FileSpreadsheet from "@/public/file-spreadsheet";
import SendArrow from "@/public/sendArrow";
import Avatar from "@/public/avatar";
import Exampad from "@/public/examPad";
import Tick from "@/public/tick";
import GreenDot from "@/public/green-dot";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import completedOnBoard from "@/store/atom/completedOnBoard";
import { useRecoilValue } from "recoil";
import {OnBoarding} from "@/components/pages/OnBoarding"
export function Dashboard() {
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const asideRef = useRef(null);
  const [menuItemHidden, setmenuItemHidden] = useState(true);
  const onBoarded = useRecoilValue(completedOnBoard);
  const handleCopyText = async (e: any) => {
    try {
      const curr = e.target.parentNode.parentNode.children[1].innerText;
      await navigator.clipboard.writeText(curr);
      // alert("Copied to clipboard!");
    } catch (err) {
      console.error("Unable to copy to clipboard.", err);
      alert("Copy to clipboard failed.");
    }
  };
  const [code, setCode] = useState("");
  useEffect(() => {
    setCode("CREATE TABLE DEVVRAT");
  }, []);

  const history = [
    {
      text: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    },
    {
      text: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    },
    {
      text: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    },
    {
      text: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    },
    {
      text: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    },
    {
      text: "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    },
    {
      text: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    },
    {
      text: "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    },
    { text: "Fusce consequat. Nulla nisl. Nunc nisl." },
    {
      text: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    },
    {
      text: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    },
    {
      text: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    },
    {
      text: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    },
    {
      text: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    },
    {
      text: "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    },
    {
      text: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    },
    {
      text: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    },
    {
      text: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    },
    {
      text: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    },
  ];
  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900 flex flex-row items-center justify-start">
      {/* Sidebar */}
      <aside
        className={`z-40 h-screen overflow-x-hidden  transition-transform -translate-x-full bg-white  border-[#CDD7E1] md:translate-x-0 dark:bg-gray-800 border-r dark:border-gray-700 ${
          menuItemHidden ? "w-24" : "w-fit"
        }`}
        aria-label="Sidenav"
        ref={asideRef}
        id="drawer-navigation"
        onMouseEnter={() => setmenuItemHidden(!menuItemHidden)}
        onMouseLeave={() => setmenuItemHidden(!menuItemHidden)}
      >
        <div
          className={`overflow-y-auto px-2 h-full bg-white dark:bg-gray-800 flex flex-col justify-between items-center`}
        >
          <ul className="space-y-2">
            <div className="pt-6 mb-10">
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

                <span className="ml-3" hidden={menuItemHidden}>
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

                <span className="ml-3" hidden={menuItemHidden}>
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

                <span className="ml-3" hidden={menuItemHidden}>
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

                <span className="ml-3" hidden={menuItemHidden}>
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

                <span className="ml-3" hidden={menuItemHidden}>
                  Settings
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
                    d="M12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88334 20.6867 5.825 19.9743 4.925 19.075C4.025 18.1757 3.31267 17.1173 2.788 15.9C2.26333 14.6827 2.00067 13.3827 2 12C1.99933 10.6173 2.262 9.31733 2.788 8.1C3.314 6.88267 4.02633 5.82433 4.925 4.925C5.82367 4.02567 6.882 3.31333 8.1 2.788C9.318 2.26267 10.618 2 12 2C13.382 2 14.682 2.26267 15.9 2.788C17.118 3.31333 18.1763 4.02567 19.075 4.925C19.9737 5.82433 20.6863 6.88267 21.213 8.1C21.7397 9.31733 22.002 10.6173 22 12C21.998 13.3827 21.7353 14.6827 21.212 15.9C20.6887 17.1173 19.9763 18.1757 19.075 19.075C18.1737 19.9743 17.1153 20.687 15.9 21.213C14.6847 21.739 13.3847 22.0013 12 22ZM9.1 19.45L10.3 16.7C9.6 16.45 8.996 16.0627 8.488 15.538C7.98 15.0133 7.584 14.4007 7.3 13.7L4.55 14.85C4.93333 15.9167 5.525 16.85 6.325 17.65C7.125 18.45 8.05 19.05 9.1 19.45ZM7.3 10.3C7.58333 9.6 7.97933 8.98767 8.488 8.463C8.99667 7.93833 9.60067 7.55067 10.3 7.3L9.15 4.55C8.08333 4.95 7.15 5.55 6.35 6.35C5.55 7.15 4.95 8.08333 4.55 9.15L7.3 10.3ZM12 15C12.8333 15 13.5417 14.7083 14.125 14.125C14.7083 13.5417 15 12.8333 15 12C15 11.1667 14.7083 10.4583 14.125 9.875C13.5417 9.29167 12.8333 9 12 9C11.1667 9 10.4583 9.29167 9.875 9.875C9.29167 10.4583 9 11.1667 9 12C9 12.8333 9.29167 13.5417 9.875 14.125C10.4583 14.7083 11.1667 15 12 15ZM14.9 19.45C15.95 19.05 16.871 18.4543 17.663 17.663C18.455 16.8717 19.0507 15.9507 19.45 14.9L16.7 13.7C16.45 14.4 16.0667 15.0043 15.55 15.513C15.0333 16.0217 14.4333 16.4173 13.75 16.7L14.9 19.45ZM16.7 10.25L19.45 9.1C19.05 8.05 18.4543 7.12933 17.663 6.338C16.8717 5.54667 15.9507 4.95067 14.9 4.55L13.75 7.35C14.4333 7.6 15.025 7.97933 15.525 8.488C16.025 8.99667 16.4167 9.584 16.7 10.25Z"
                    fill="#555E68"
                  />
                </svg>
                <span className="ml-3" hidden={menuItemHidden}>
                  Settings
                </span>
              </a>
            </li>
          </ul>
          <ul className="p-2.5 space-y-2 flex flex-row items-center justify-center space-x-2 border-t w-full border-gray-200 dark:border-gray-700">
            <div>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3_188)">
                  <rect width="48" height="48" rx="24" fill="#E3EFFB" />
                  <path
                    d="M18.8192 18.9091H20.788V28.1903C20.788 29.0298 20.6218 29.7479 20.2894 30.3445C19.9613 30.9411 19.4989 31.397 18.9023 31.7124C18.3058 32.0234 17.6069 32.179 16.8058 32.179C16.0685 32.179 15.4059 32.0447 14.8178 31.7763C14.234 31.5078 13.7717 31.1179 13.4308 30.6065C13.0941 30.0909 12.9258 29.4645 12.9258 28.7273H14.8881C14.8881 29.0895 14.9712 29.4027 15.1374 29.6669C15.3079 29.9311 15.5401 30.1378 15.8342 30.2869C16.1325 30.4318 16.4734 30.5043 16.8569 30.5043C17.2745 30.5043 17.6282 30.4169 17.918 30.2422C18.212 30.0632 18.4357 29.8011 18.5891 29.456C18.7425 29.1108 18.8192 28.6889 18.8192 28.1903V18.9091ZM32.5222 23.0447C32.3986 22.657 32.2324 22.3097 32.0236 22.0028C31.8191 21.6918 31.574 21.4276 31.2885 21.2102C31.003 20.9886 30.677 20.8203 30.3105 20.7053C29.9483 20.5902 29.5499 20.5327 29.1152 20.5327C28.378 20.5327 27.7132 20.7223 27.1209 21.1016C26.5286 21.4808 26.0598 22.0369 25.7147 22.7699C25.3738 23.4986 25.2033 24.3913 25.2033 25.4482C25.2033 26.5092 25.3759 27.4062 25.7211 28.1392C26.0662 28.8722 26.5392 29.4283 27.1401 29.8075C27.7409 30.1868 28.4249 30.3764 29.1919 30.3764C29.9036 30.3764 30.5236 30.2315 31.052 29.9418C31.5847 29.652 31.9959 29.2429 32.2857 28.7145C32.5797 28.1818 32.7267 27.5554 32.7267 26.8352L33.2381 26.9311H29.4924V25.3011H34.638V26.7905C34.638 27.8899 34.4036 28.8445 33.9348 29.6541C33.4703 30.4595 32.8269 31.0817 32.0044 31.5206C31.1863 31.9595 30.2488 32.179 29.1919 32.179C28.0073 32.179 26.9675 31.9062 26.0726 31.3608C25.182 30.8153 24.4874 30.0419 23.9888 29.0405C23.4902 28.0348 23.2409 26.8416 23.2409 25.4609C23.2409 24.4169 23.3858 23.4794 23.6756 22.6484C23.9654 21.8175 24.3723 21.1122 24.8965 20.5327C25.4249 19.9489 26.0449 19.5036 26.7566 19.1967C27.4725 18.8857 28.2544 18.7301 29.1025 18.7301C29.8098 18.7301 30.4682 18.8345 31.0776 19.0433C31.6912 19.2521 32.2367 19.5483 32.714 19.9318C33.1955 20.3153 33.5939 20.7713 33.9093 21.2997C34.2246 21.8239 34.4377 22.4055 34.5485 23.0447H32.5222Z"
                    fill="#12467B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3_188">
                    <rect width="48" height="48" rx="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="text-left " hidden={menuItemHidden}>
              <div>
                <p>Jeet Gajjar</p>
                <p className="text-gray-500 text-xs ml-0.5">
                  jeetgajjar@gmail.com
                </p>
              </div>
            </div>
            <div hidden={menuItemHidden} className=""></div>
          </ul>
        </div>
      </aside>
      {
        onBoarded ? (<>
        <main className="h-screen flex flex-row items-center justify-start ">
        <div
          className={`flex flex-col items-center justify-start h-screen w-60 border border-r-[#CDD7E1]`}
        >
          <div className="w-full flex flex-col space-y-2 justify-between items-start  overflow-y-scroll">
            <p className="font-bold text-2xl px-2 pt-4">Chats</p>
            <p className="font-normal text-sm text-gray-700 px-2">Todays</p>
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
            <p className="font-normal text-sm text-gray-700">Yesterdays</p>
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
      <div className="w-2/5 flex flex-grow flex-col h-screen border-r">
        <header className="flex justify-between items-center p-4 h-16 border-b">
          {/* <p className="opacity-100 hover:opacity-100 cursor-pointer"> */}
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
            <p className="w-fit">Login Information of EMP</p>
          </div>
          <motion.div
            whileTap={{
              scale: 0.8,
            }}
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
            <GreenDot></GreenDot>
            <AnimatePresence>
              <motion.div
                className={`${
                  dropDownMenu ? "absolute top-12 right-1 bg-white" : "hidden"
                } border-[1px] border-solid border-[#D1D5DB] rounded-lg`}
              >
                <h3 className="p-2 w-max">Select Database</h3>
                <hr />
                <div className="flex flex-col px-1 p-1">
                  <p className="hover:bg-[#D1D5DB] px-1 rounded"> SQL Main </p>
                  <p className="hover:bg-[#D1D5DB] px-1 rounded">
                    {" "}
                    PostgreSQL{" "}
                  </p>
                  <p className="hover:bg-[#D1D5DB] px-1 rounded"> MongoDB </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </header>
        <div className="p-4 w-full h-5/6">
          <div className="flex flex-col h-full gap-4">
            <div className="flex flex-col   w-4/5 gap-2">
              <div className="flex gap-2 ">
                <Avatar></Avatar>
                <div className="flex flex-col w-full">
                  <div className="flex w-full justify-between">
                    <p>Leena AI</p>
                    <p className="text-gray-500">4:23 PM</p>
                  </div>
                  <div className="rounded-xl rounded-tl-none bg-blue-500 p-2.5 text-sm">
                    Processing your request to fetch the data. Please wait a
                    moment while we analyze your query and prepare the results
                    for you.
                  </div>
                </div>
              </div>
              <div className="pl-11 relative ">
                <button
                  className="absolute right-0 p-2 flex items-center justify-center gap-1 bg-gray-600 rounded text-[10px] text-white"
                  onClick={handleCopyText}
                >
                  <Exampad></Exampad>
                  <p>Copy Code</p>
                </button>
                <div className="bg-gray-700 p-2.5 rounded-xl text-gray-200 text-xs ">
                  SELECT orders.order_id, customers.customer_name,
                  products.product_name, order_details.quantity,
                  order_details.unit_price,
                  {"(order_details.quantity * order_details.unit_price)"} AS
                  total_price FROM orders INNER JOIN customers ON
                  orders.customer_id = customers.customer_id INNER JOIN
                  order_details ON orders.order_id = order_details.order_id
                  INNER JOIN products ON order_details.product_id =
                  products.product_id WHERE orders.order_date {">"}=
                  '2023-01-01' AND orders.order_date {"<"}= '2023-12-31' ORDER
                  BY orders.order_id;
                </div>
              </div>
              <div className="flex w-fit pl-11">
                <Tick></Tick>
                <p>Query executed sucessfully</p>
              </div>
            </div>
            <div className="flex gap-2 w-4/5 self-end">
              <div className="flex flex-col w-full">
                <div className="flex w-full justify-between">
                  <p>Leena AI</p>
                  <p className="text-gray-500">4:23 PM</p>
                </div>
                <div className="rounded-xl rounded-tl-none bg-blue-50 p-2.5 text-sm">
                  Processing your request to fetch the data. Please wait a
                  moment while we analyze your query and prepare the results for
                  you.
                </div>
              </div>
              <Avatar></Avatar>
            </div>
          </div>
          <div className="flex gap-2 h-fit">
            <Input className="focus:outline-none" />
            <div className="bg-gray-700 hover:bg-gray-900 duration-200 cursor-pointer  flex items-center w-11 justify-center rounded ">
              <SendArrow></SendArrow>
            </div>
            <div className="border-2 border-[#D1D5DB] hover:border-black duration-200 cursor-pointer flex items-center w-11 justify-center rounded">
              <FileSpreadsheet />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[20%] flex flex-col justify-between h-screen">
        <header className="flex justify-between items-center p-4 h-16 border-b">
          {/* <p className="opacity-100 hover:opacity-100 cursor-pointer"> */}
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
        <div className="pl-2  flex items-center justify-start text-gray-800 text-xs">
          <div>{">>"}</div>

          <SyntaxHighlighter language="sql" style={a11yLight}>
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
        </>):<OnBoarding></OnBoarding>
      }
      
    </div>
  );
}
