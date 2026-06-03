"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";
import { ConceptVisuals } from "./concept-visual";
import FlipWords from "@/components/ui/FlipWords";

// Animation states for the central graphic
const animationSteps = [
  { id: "ideas", label: "Ideas" },
  { id: "business", label: "Business" },
  { id: "visions", label: "Visions" },
  { id: "projects", label: "Projects" },
  { id: "dreams", label: "Dreams" },
];

export default function HeroSection() {
  const [stepIndex, setStepIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion values to capture target cursor positions
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out coordinate tracking using dampening springs
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Map mouse positions cleanly to 3D degree rotations (-90 to 90 degrees creates your full 180-degree freedom arc)
  const cursorRotateY = useTransform(springX, [-0.5, 0.5], [-90, 90]);
  const cursorRotateX = useTransform(springY, [-0.5, 0.5], [30, -30]); // Pitches slightly forward/backward

  // Track global interval to rotate step strings
  useEffect(() => {
    const interval = setInterval(() => {
      setStepIndex((prev) => (prev + 1) % animationSteps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Handle pointer tracking relative to the center bounds of the element frame
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    // Normalize coordinates from center framework (-0.5 to 0.5)
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  // Reset module alignment back into defaults when pointer exits the field
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const currentStep = animationSteps[stepIndex];

  return (
    // Perspective wrapper added here to allow 3D depth distortions to map accurately
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-32 pb-16 [perspective:1200px]">
      {/* Symmetrical Centralized Column Framework */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center w-full max-w-6xl mx-auto">
        {/* UPPER LAYER: Central Complex Pipeline Graphics Animation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full mb-6 relative flex justify-center">
          <div className="relative w-full max-w-4xl min-h-[280px] sm:min-h-[340px] flex items-center justify-center">
            {/* LAYER 1: Glowing Radial Backdrop Layer */}
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
              <div className="absolute w-72 sm:w-96 h-56 sm:h-72 bg-indigo-500/15 rounded-full blur-3xl animate-pulse" />
            </div>

            {/* LAYER 2: Particle Pipeline Vector Paths */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <svg
                className="w-full h-full min-h-[280px] sm:min-h-[340px] drop-shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-300"
                viewBox="0 0 1200 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <defs>
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

                  <linearGradient
                    id="streamHighlight"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%">
                    <stop offset="0%" stopColor="#4f46e5" stopOpacity="0" />

                    <stop offset="50%" stopColor="#818cf8" stopOpacity="0.8" />

                    <stop offset="100%" stopColor="#c084fc" stopOpacity="0" />
                  </linearGradient>

                  <radialGradient id="sphere3D" cx="35%" cy="35%" r="65%">
                    <stop offset="0%" stopColor="#ffffff" />

                    <stop offset="20%" stopColor="#cbd5e1" />

                    <stop offset="60%" stopColor="#475569" />

                    <stop offset="100%" stopColor="#0f172a" />
                  </radialGradient>

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

                {/* Vector paths pipeline rendering */}

                <g filter="url(#elementShadow)">
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

                  <motion.path
                    d="M 1050 200 C 950 200, 880 200, 600 200"
                    stroke="url(#tubeMetallic)"
                    strokeWidth="32"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                  />

                  <motion.path
                    d="M 1020 280 C 940 260, 880 220, 600 210"
                    stroke="url(#tubeMetallic)"
                    strokeWidth="20"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                  />

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

                {/* Spheres tracking animation frames */}

                <g filter="url(#elementShadow)">
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

                {/* Output channel vectors */}

                <g filter="url(#elementShadow)">
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

                  <path
                    d="M 600 200 L 150 200"
                    stroke="url(#streamHighlight)"
                    strokeWidth="4"
                    fill="none"
                    opacity="0.7"
                  />
                </g>

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

            {/* LAYER 3: Glassmorphic Hub Module (With Stable 3D Mouse Tracking Setup) */}
            {/* We wrap the inner element in an infinite ambient container to separate the tracking from the baseline loop */}
            <motion.div
              animate={{ rotateY: [0, 180, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ transformStyle: "preserve-3d" }}
              className="absolute z-20 w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-48 flex items-center justify-center">
              <motion.div
                style={{
                  rotateY: cursorRotateY,
                  rotateX: cursorRotateX,
                  transformStyle: "preserve-3d",
                }}
                className="w-full h-full rounded-3xl p-4 flex flex-col items-center justify-center border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl transition-all duration-100 ease-out cursor-grab active:cursor-grabbing">
                {/* Backside/Depth content container depth assignment */}
                <div
                  style={{ transform: "translateZ(40px)" }}
                  className="absolute top-3 px-3 py-0.5 rounded-full bg-white/10 text-[10px] sm:text-xs font-semibold tracking-wide text-indigo-200 uppercase">
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

                <div
                  style={{ transform: "translateZ(25px)" }}
                  className="w-full h-full flex items-center justify-center mt-4">
                  <ConceptVisuals
                    currentStepId={currentStep.id.toLowerCase()}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* LOWER LAYER: Symmetrical Clean Typography Engine */}
        <div className="w-full flex flex-col items-center mt-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-3xl sm:text-3xl md:text-3xl lg:text-5xl font-extrabold tracking-tight text-center leading-[1.15] max-w-4xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-white">
              Bringing your{" "}
            </span>
            <span className="inline-block min-w-[140px] sm:min-w-[240px] text-left md:text-center px-1">
              <FlipWords
                words={["Ideas", "Business", "Visions", "Projects", "Dreams"]}
                duration={2500}
                className="text-brand-primary drop-shadow-[0_0_15px_rgba(125,42,232,0.35)] text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
              />
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-300 to-white">
              To App.
            </span>
          </motion.h1>

          {/* Symmetrical Interface Action Controllers */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-row items-center justify-center gap-4 w-full">
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
      </div>
    </section>
  );
}
