"use client";
import ChatIcon from "@/public/ChatIcon";
import DesktopHalfTwo from "@/public/DesktopHalfTwo";
import DesktopHalfOne from "@/public/DesktopImage";
import Efficiency from "@/public/Efficiency";
import GeminiIcon from "@/public/geminiIcon";
import HeroIcon from "@/public/heroIcon";
import HeroImage from "@/public/HeroImage";
import Image from "next/image";
import Features from "../public/QuerixFeatures.png";
import { FAQ } from "@/components/pages/home/FAQ";
import { motion, stagger, animate, delay, useScroll } from "framer-motion";
import { useUser } from "@clerk/nextjs";

export default function Home() {
  const { user, isSignedIn } = useUser();
  const companyItems = [
    "About",
    "Features",
    "Pricing",
    "Wall of Love",
    "Athletes",
    "Manifesto",
    "Careers",
    "Blog",
    "Status page",
    "Terms of use",
    "Disclaimer",
    "Privacy policy",
  ];
  const communityItems = [
    "Refer a friend",
    "Ideas",
    "Script",
    "Streams",
    "House Rules",
    "Moderators",
    "Chats",
  ];
  const businessItems = [
    "Widgets",
    "Advertising",
    "Query Libs",
    "Referrals",
    "Partner Program",
    "Affiliate Program",
  ];
  const menuItems = ["Home", "Features", "FAQs"];

  // nimate("", { opacity: 1 }, { delay: stagger(0.1) })
  return (
    <>
      <div className="w-screen h-max flex items-center scroll-smooth justify-start flex-col">
        <header className="fixed top-0 right-0 z-[1000] bg-white h-24 w-full flex items-center justify-between py-2 px-8 border-b">
          <div className="absolute left-8 top-4 h-14">
            <HeroIcon />
          </div>
          <div className="flex flex-1 w-fit justify-center items-center gap-10 font-medium">
            <a href="#" className="font-normal">
              Home
            </a>
            <span className="text-slate-300">|</span>
            <a href="#features" className="font-normal">
              Features
            </a>
            <span className="text-slate-300">|</span>
            <a href="#faqs" className="font-normal">
              FAQ's
            </a>
          </div>

          {isSignedIn ? (
            <a href="/dashboard" className="absolute right-8 ">
              <button className="rounded-md focus:outline-none font-medium bg-blue-700 text-white px-6 py-2">
                Dashboard
              </button>
            </a>
          ) : (
            <a href="/sign-in" className="absolute right-8 ">
              <button className="rounded-md focus:outline-none font-medium bg-blue-700 text-white px-6 py-2">
                Sign In
              </button>
            </a>
          )}
        </header>
        <section
          className="w-screen relative h-screen px-8 mt-40"
          id="Features"
        >
          <div className="flex flex-col gap-10 items-start justify-start w-1/2">
            <motion.h1
              className="text-5xl font-bold tracking-wide leading-[71px]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "backOut" }}
            >
              We revolutionize your SQL interaction experience with <br />
              our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">
                intuitive platform
              </span>
            </motion.h1>
            <motion.p
              className="text-gray-600 text-2xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "backOut", delay: 0.2 }}
            >
              Elevate your database insights effortlessly with our AI-generated
              SQL queries. Simply converse with our AI to unlock the next level
              of data understanding.
            </motion.p>
            <motion.button
              style={{ boxShadow: "0px 12px 24px 0px rgba(5, 104, 203, 0.20)" }}
              className="bg-blue-700 font-normal text-white flex items-center justify-center p-3 gap-3 box rounded-xl hover:scale-[1.03] transition-all ease-in duration-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "backOut", delay: 0.2 }}
            >
              <GeminiIcon />

              <span className="text-white text-2xl font-medium">
                Get Started
              </span>
            </motion.button>
            <motion.div
              className="absolute -top-44 right-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "backOut", delay: 0.4 }}
            >
              <HeroImage />
            </motion.div>
          </div>
        </section>
        <section className="w-screen relative h-screen px-8">
          <div className="flex flex-col gap-10 items-start justify-start w-[50%]">
            <div
              className="text-5xl font-bold tracking-wide leading-[71px]"
              id="features"
            >
              WHY QUERIX
            </div>
            <div className="text-gray-600 text-2xl">
              Cut down on query creation time with Querix's lightning-fast
              generation process.
            </div>
            <div className="text-gray-600 flex flex-col items-start justify-start gap-4">
              <ChatIcon />
              <div className="font-medium text-black text-xl">
                Conversational Querying
              </div>
              <div className="text-gray-600 text-lg font-normal">
                With Querix, crafting SQL queries is as easy as having a
                conversation. Simply describe the data you need, and our
                AI-powered platform will generate the SQL query for you. No need
                to memorize complex syntax or navigate through databases
                manually.
              </div>
            </div>
            <div className="text-gray-600 flex flex-col items-start justify-start gap-4">
              <Efficiency />
              <div className="font-medium text-black text-xl">Efficiency</div>
              <div className="text-gray-600 text-lg font-normal">
                Querix streamlines the query generation process, saving you time
                and effort. Our intuitive interface and fast generation
                capabilities allow you to create precise SQL queries in seconds,
                freeing you up to focus on analyzing the results and making
                informed decisions.
              </div>
            </div>

            <div className="absolute top-10 right-0">
              <DesktopHalfOne />
            </div>
          </div>
        </section>
        <section className="w-screen pt-56 relative h-screen px-8 flex flex-row-reverse items-start justify-start">
          <div className="flex-col flex gap-16 items-start justify-start w-[50%]">
            <div className="text-gray-600 flex flex-col items-start justify-start gap-4">
              <ChatIcon />
              <div className="font-medium text-black text-xl">
                Conversational Querying
              </div>
              <div className="text-gray-600 text-lg font-normal">
                With Querix, crafting SQL queries is as easy as having a
                conversation. Simply describe the data you need, and our
                AI-powered platform will generate the SQL query for you. No need
                to memorize complex syntax or navigate through databases
                manually.
              </div>
            </div>
            <div className="text-gray-600 flex flex-col items-start justify-start gap-4">
              <Efficiency />
              <div className="font-medium text-black text-xl">Efficiency</div>
              <div className="text-gray-600 text-lg font-normal">
                Querix streamlines the query generation process, saving you time
                and effort. Our intuitive interface and fast generation
                capabilities allow you to create precise SQL queries in seconds,
                freeing you up to focus on analyzing the results and making
                informed decisions.
              </div>
            </div>
            <div className="absolute bottom-0 left-0">
              <DesktopHalfTwo />
            </div>
          </div>
        </section>
        <section className="w-screen pt-56 relative h-screen flex flex-row-reverse items-start justify-start">
          <Image src={Features} alt="" className="w-screen h-screen" />
        </section>
        <section className="w-screen h-screen flex items-center justify-center">
          <div className="w-full px-8 pt-36" id="faqs">
            <FAQ />
          </div>
        </section>
        <footer className="w-screen px-8 border-t py-8 flex items-start justify-between h-[500px]">
          <div className="">
            <HeroIcon />
            <p className="font-medium mt-3">Transforming Scripting</p>
          </div>
          <div className="flex  justify-between space-x-32 items-start">
            <div>
              <p className="text-[#090808] font-bold text-lg mb-5">
                Contact Us
              </p>
              <a href="mailto:devvrat.singhrathod@devvrat.me">
                devvrat.singhrathod@devvrat.me
              </a>
            </div>
            <div>
              <p className="text-[#090808] font-bold text-lg mb-5">Company</p>
              {companyItems.map((element) => (
                <p key={element} className="text-gray-600 font-medium">
                  {element}
                </p>
              ))}
            </div>
            <div>
              <p className="text-[#090808] font-bold text-lg mb-5">Community</p>
              {communityItems.map((element) => (
                <p key={element} className="text-gray-600 font-medium">
                  {element}
                </p>
              ))}
            </div>
            <div>
              <p className="text-[#090808] font-bold text-lg mb-5">
                For Business
              </p>
              {businessItems.map((element) => (
                <p key={element} className="text-gray-600 font-medium">
                  {element}
                </p>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
