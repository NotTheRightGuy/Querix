"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";

export default function AuroraBackgroundDemo() {
    return (
        <AuroraBackground>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
                <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
                    AI SQL Query Builder
                </div>
                <div className="font-extralight text-base md:text-2xl dark:text-neutral-200 py-4">
                    Talk with your data, not your database
                </div>
                <motion.button
                    whileHover={{
                        scale: 1.1,
                    }}
                className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
                    Get Started Now
                </motion.button>
            </motion.div>
        </AuroraBackground>
    );
}
