"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ConceptVisualsProps {
  currentStepId: string;
}

export function ConceptVisuals({ currentStepId }: ConceptVisualsProps) {
  // Helper utility for generating distinct staggered dot delays
  const getDelay = (index: number) => index * 0.08;

  return (
    <div className="relative mt-8 w-full h-full flex items-center justify-center pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStepId}
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center w-full h-full">
          {/* 1. IDEAS: Burst/Expansion (Spark Concept) */}
          {currentStepId === "ideas" && (
            <div className="grid grid-cols-4 gap-3 p-2 relative">
              <motion.div
                animate={{ scale: [0, 1.3, 1], opacity: [0, 1, 0.6] }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-indigo-500 blur-xl opacity-30" />
              </motion.div>
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.9, 0.3] }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                    delay: getDelay(i),
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  className={`w-2 h-2 rounded-full ${i % 2 === 0 ? "bg-indigo-300" : "bg-purple-300/60"}`}
                />
              ))}
            </div>
          )}

          {/* 2. BUSINESS: Structure/Growth (Growth Graph) */}
          {currentStepId === "business" && (
            <div className="flex items-end gap-3 h-16 md:h-24 w-full justify-center px-4 relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="w-full h-1 px-4 border-b border-dashed border-white/50" />
              </div>
              {[40, 70, 55, 95].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: "circOut",
                  }}
                  className="relative w-4 md:w-5 rounded-t-sm bg-gradient-to-t from-emerald-600/60 to-emerald-400">
                  {i === 3 && (
                    <motion.div
                      animate={{ y: [0, -5, 0], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -top-6 left-1/2 -translate-x-1/2 w-3 h-3 bg-emerald-300 rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-1.5 h-1.5 bg-emerald-800 rounded-full" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          )}

          {/* 3. VISIONS: Connectivity/Nodes (Network Web) */}
          {currentStepId === "visions" && (
            <div className="relative w-full h-full flex items-center justify-center">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    x: [
                      Math.sin(i + getDelay(i)) * 30,
                      Math.sin(i + 3 + getDelay(i)) * 20,
                      Math.sin(i + getDelay(i)) * 30,
                    ],
                    y: [
                      Math.cos(i + getDelay(i)) * 30,
                      Math.cos(i + 2 + getDelay(i)) * 20,
                      Math.cos(i + getDelay(i)) * 30,
                    ],
                    scale: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`absolute w-3 h-3 md:w-4 md:h-4 rounded-full ${i === 0 ? "bg-indigo-500" : "bg-purple-300/40"} border border-indigo-500/20`}
                />
              ))}
            </div>
          )}

          {/* 4. PROJECTS: Building/Execution (Blocks Layout) */}
          {currentStepId === "projects" && (
            <div className="grid grid-cols-3 gap-2 w-[80%] h-[70%]">
              {[...Array(9)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: i * 0.05,
                    ease: "backOut",
                  }}
                  className={`w-full h-full rounded-md border border-white/5 ${
                    i === 0 || i === 4 || i === 8
                      ? "bg-orange-500/80 border-orange-300"
                      : "bg-neutral-800"
                  }`}
                />
              ))}
            </div>
          )}

          {/* 5. DREAMS: Imagination/Flow (Particles) */}
          {currentStepId === "dreams" && (
            <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20 - Math.random() * 40, -40 - Math.random() * 20],
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.5],
                    x: [
                      0,
                      (Math.random() - 0.5) * 40,
                      (Math.random() - 0.5) * 60,
                    ],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeOut",
                  }}
                  className="absolute w-1.5 h-1.5 rounded-full bg-rose-300"
                  style={{ bottom: i * 2 }}
                />
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
