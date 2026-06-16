"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TickerTape() {
  const items = [
    "App Development",
    "Video Editing",
    "Email Marketing",
    "Web Design",
    "Cloud Architecture",
    "Automation Systems"
  ];

  // Duplicate items to ensure smooth infinite scrolling
  const scrollItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden bg-brand-primary/5 py-6 border-y border-brand-primary/10 -rotate-2 transform-gpu scale-[1.05] z-20 shadow-[0_0_40px_rgba(125,42,232,0.15)] mt-12 mb-20 backdrop-blur-sm">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex gap-8 items-center"
          animate={{ x: ["0%", "-33.333333%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {scrollItems.map((item, index) => (
            <React.Fragment key={index}>
              <span className="text-4xl md:text-5xl font-medium tracking-tight text-foreground/90 italic ml-4">
                {item}
              </span>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="inline-block text-2xl md:text-3xl text-brand-primary/80 mx-6 select-none"
              >
                ✦
              </motion.span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

