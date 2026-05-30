"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight} from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";
import { ConceptVisuals } from "./concept-visual";
import FlipWords from "@/components/ui/FlipWords";

// Animation states for the central graphic
// Define all 5 synchronized concept states
const animationSteps = [
    { id: "ideas", label: "Ideas" },
    { id: "business", label: "Business" },
    { id: "visions", label: "Visions" },
    { id: "projects", label: "Projects" },
    { id: "dreams", label: "Dreams" },
];

export default function HeroSection() {
const [stepIndex, setStepIndex] = useState(0);

// Core loop sequence through all 5 dynamic animation steps
useEffect(() => {
  const interval = setInterval(() => {
    setStepIndex((prev) => (prev + 1) % animationSteps.length);
  }, 3000); // Transitions smoothly every 3 seconds to sync with FlipWords
  return () => clearInterval(interval);
}, []);

const currentStep = animationSteps[stepIndex];

  return (
    <section className="relative w-full min-h-screen bg-site-bg-dark flex flex-col items-center justify-center overflow-hidden px-4 py-16">
      <div className="text-center flex flex-col items-center w-full">
        <div className="w-full flex flex-col md:flex-row-reverse items-center px-18">
          {/* Top Floating Badge and Animation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full mb-12">
            {/* --- Main Hero Content Wrapper --- */}
            <div className="w-full z-10 relative flex justify-center">
              <div className="relative w-full min-h-[320px] flex items-center justify-center">
                {/* LAYER 1: Glowing Layer  */}
                <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                  <div className="absolute w-80 sm:w-96 h-64 sm:h-80 bg-indigo-500/15 rounded-full blur-3xl animate-pulse" />
                </div>

                {/* LAYER 2: Ambient Particle / SVG Stream Lines */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <svg
                    className="w-full max-w-xs sm:max-w-xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl h-full min-h-[300px] md:min-h-[420px] drop-shadow-[0_0,30px_rgba(99,102,241,0.15)] transition-all duration-300"
                    viewBox="0 0 1200 400"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      {/* Dark metallic dimensional gradient for the tubes */}
                      <linearGradient
                        id="tubeMetallic"
                        x1="0%"
                        y1="50%"
                        x2="100%"
                        y2="50%">
                        <stop offset="0%" stopColor="#0f111a" />
                        <stop offset="40%" stopColor="#1e2235" />
                        <stop offset="50%" stopColor="#3a4161" />
                        <stop offset="65%" stopColor="#1e2235" />
                        <stop offset="100%" stopColor="#0b0d14" />
                      </linearGradient>

                      {/* Bright linear accent reflection for the tubing highlights */}
                      <linearGradient
                        id="streamHighlight"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%">
                        <stop offset="0%" stopColor="#4f46e5" stopOpacity="0" />
                        <stop
                          offset="50%"
                          stopColor="#818cf8"
                          stopOpacity="0.8"
                        />
                        <stop
                          offset="100%"
                          stopColor="#c084fc"
                          stopOpacity="0"
                        />
                      </linearGradient>

                      {/* Realistic glowing 3D sphere gradient */}
                      <radialGradient id="sphere3D" cx="35%" cy="35%" r="65%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="20%" stopColor="#cbd5e1" />
                        <stop offset="60%" stopColor="#475569" />
                        <stop offset="100%" stopColor="#0f172a" />
                      </radialGradient>

                      {/* Drop shadow filter to give elements elevation separation */}
                      <filter
                        id="elementShadow"
                        x="-20%"
                        y="-20%"
                        width="140%"
                        height="140%">
                        <feDropShadow
                          dx="0"
                          dy="8"
                          stdDeviation="6"
                          floodColor="#000000"
                          floodOpacity="0.5"
                        />
                      </filter>
                    </defs>

                    {/* ================= RIGHT SIDE: INPUT PIPELINE (BALLS ROLL IN) ================= */}
                    <g filter="url(#elementShadow)">
                      {/* Upper input funnel tube */}
                      <motion.path
                        d="M 1020 120 C 940 140, 880 180, 600 190"
                        stroke="url(#tubeMetallic)"
                        strokeWidth="24"
                        strokeLinecap="round"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                      {/* Center direct input tube */}
                      <motion.path
                        d="M 1050 200 C 950 200, 880 200, 600 200"
                        stroke="url(#tubeMetallic)"
                        strokeWidth="32"
                        strokeLinecap="round"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{
                          duration: 1.2,
                          ease: "easeOut",
                          delay: 0.1,
                        }}
                      />
                      {/* Lower input funnel tube */}
                      <motion.path
                        d="M 1020 280 C 940 260, 880 220, 600 210"
                        stroke="url(#tubeMetallic)"
                        strokeWidth="20"
                        strokeLinecap="round"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{
                          duration: 1.5,
                          ease: "easeOut",
                          delay: 0.2,
                        }}
                      />

                      {/* Glowing overlays tracking along input lines */}
                      <path
                        d="M 1020 120 C 940 140, 880 180, 600 190"
                        stroke="url(#streamHighlight)"
                        strokeWidth="3"
                        fill="none"
                        opacity="0.6"
                      />
                      <path
                        d="M 1050 200 C 950 200, 880 200, 600 200"
                        stroke="url(#streamHighlight)"
                        strokeWidth="4"
                        fill="none"
                        opacity="0.6"
                      />
                      <path
                        d="M 1020 280 C 940 260, 880 220, 600 210"
                        stroke="url(#streamHighlight)"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.4"
                      />
                    </g>

                    {/* Active Input Spheres rolling inwards from right towards the center */}
                    <g filter="url(#elementShadow)">
                      {/* Upper entry line sphere */}
                      <motion.circle
                        cx="990"
                        cy="142"
                        r="11"
                        fill="url(#sphere3D)"
                        animate={{
                          x: [0, -250, -350],
                          y: [0, 30, 48],
                          opacity: [0, 1, 1, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                          delay: 0.5,
                        }}
                      />
                      {/* Main central direct entry sphere */}
                      <motion.circle
                        cx="1000"
                        cy="200"
                        r="14"
                        fill="url(#sphere3D)"
                        animate={{ x: [0, -380], opacity: [0, 1, 1, 0] }}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      {/* Lower entry line sphere */}
                      <motion.circle
                        cx="960"
                        cy="254"
                        r="10"
                        fill="url(#sphere3D)"
                        animate={{
                          x: [0, -220, -320],
                          y: [0, -28, -42],
                          opacity: [0, 1, 1, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                          delay: 1.2,
                        }}
                      />
                    </g>

                    {/* ================= LEFT SIDE: SINGLE OUTPUT PIPELINE ================= */}
                    <g filter="url(#elementShadow)">
                      {/* Combined straight left output line */}
                      <motion.path
                        d="M 600 200 L 150 200"
                        stroke="url(#tubeMetallic)"
                        strokeWidth="36"
                        strokeLinecap="round"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          duration: 1.2,
                          ease: "easeInOut",
                          delay: 0.4,
                        }}
                      />
                      {/* Neon Core Accent line */}
                      <path
                        d="M 600 200 L 150 200"
                        stroke="url(#streamHighlight)"
                        strokeWidth="4"
                        fill="none"
                        opacity="0.7"
                      />
                    </g>

                    {/* Processed output balls emerging from processing card onto single left line */}
                    <g filter="url(#elementShadow)">
                      <motion.circle
                        cx="540"
                        cy="200"
                        r="14"
                        fill="url(#sphere3D)"
                        animate={{ x: [0, -360], opacity: [1, 1, 0.8, 0] }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <motion.circle
                        cx="460"
                        cy="200"
                        r="14"
                        fill="url(#sphere3D)"
                        animate={{ x: [0, -280], opacity: [1, 1, 0.8, 0] }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "linear",
                          delay: 1.6,
                        }}
                      />
                      <motion.circle
                        cx="380"
                        cy="200"
                        r="14"
                        fill="url(#sphere3D)"
                        animate={{ x: [0, -200], opacity: [1, 1, 0.5, 0] }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "linear",
                          delay: 3.2,
                        }}
                      />
                    </g>
                  </svg>
                </div>

                {/* LAYER 3: Floating Glassmorphic Card */}
                <motion.div
                  layout
                  transition={{ type: "spring", stiffness: 100, damping: 18 }}
                  className="absolute z-20 w-44 h-44 sm:w-52 sm:h-52 md:w-80 md:h-56 rounded-3xl p-6 flex flex-col items-center justify-center border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
                  {/* The dynamic Pill / Badge Header Section */}
                  <div className="absolute top-4 px-3 py-0.5 rounded-full bg-white/10 text-[10px] sm:text-xs font-semibold tracking-wide text-indigo-200 uppercase">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentStep.id}
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.2 }}>
                        {currentStep.label}
                      </motion.span>
                    </AnimatePresence>
                  </div>

                  {/* Clean Visual Animation Engine Injection */}
                  <ConceptVisuals
                    currentStepId={currentStep.id.toLowerCase()}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Dynamic Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.1,
            }}>
            <div className="sm:text-5xl md:text-6xl lg:text-8xl font-bold font- bg-clip-text bg-gradient-to-r from-white via-brand-primary to-white w-full no-wrap">
              Bringing your{" "}
              <FlipWords
                words={["Ideas", "Business", "Visions", "Projects", "Dreams"]}
                duration={2500}
                className="text-brand-primary drop-shadow-[0_0_15px_rgba(125,42,232,0.35)]"
              />
              <br />
              To App.
            </div>
          </motion.h1>
        </div>

        {/* Feature Check Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-xs text-white/60">
          <span className="flex items-center gap-1.5">✓ Payout up to 90%</span>
          <span className="flex items-center gap-1.5">
            ✓ Balance based drawdown
          </span>
          <span className="flex items-center gap-1.5">✓ Unique programs</span>
        </motion.div>

        {/* Action Callouts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 w-full">
          <AnimatedButton href="/contact" variant="primary" icon={ArrowRight}>
            Get Started
          </AnimatedButton>
          <AnimatedButton
            href="/projects"
            variant="secondary"
            icon={ArrowUpRight}>
            Explore Project
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  );
}
