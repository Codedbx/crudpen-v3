"use strict";
"use client";

import React from "react";
import { motion } from "framer-motion"; // FIX 1: Added missing motion import
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { AnimatedButton } from "@/components/ui/animated-button";
import Link from "next/link";
import TeamSection from "@/components/ui/team-section";
import Image from "next/image";
import HeroSection from "@/components/ui/hero-section";
import Navbar from "@/components/layout/Navbar";
import {
  Star,
  ArrowUpRight,
  Zap,
  Code,
  Cpu,
  Cloud,
  Search,
  Check,
  MessageSquare,
  Sparkles,
  ArrowRight,
  TrendingUp,
  ShieldAlert,
  Database,
} from "lucide-react";

// FIX 2: Defined the waterBalls array structure so .map() doesn't fail
// Configured with smaller sizes (ranging from 30px to 80px) and a higher count
const waterBalls = [
  { size: 40,  initialX: "12%", initialY: "8%",  duration: 14, delay: 0 },
  { size: 70,  initialX: "85%", initialY: "12%", duration: 18, delay: 1.5 },
  { size: 55,  initialX: "35%", initialY: "25%", duration: 16, delay: 0.5 },
  { size: 30,  initialX: "65%", initialY: "30%", duration: 12, delay: 2 },
  { size: 80,  initialX: "20%", initialY: "50%", duration: 22, delay: 3 },
  { size: 45,  initialX: "75%", initialY: "55%", duration: 15, delay: 1 },
  { size: 60,  initialX: "45%", initialY: "70%", duration: 19, delay: 2.5 },
  { size: 35,  initialX: "90%", initialY: "78%", duration: 13, delay: 0.2 },
  { size: 50,  initialX: "15%", initialY: "85%", duration: 17, delay: 4 },
  { size: 65,  initialX: "60%", initialY: "90%", duration: 20, delay: 1.8 },
];

export default function Home() {
  return (
    <div className="relative w-full flex flex-col items-center overflow-hidden">
      {/* HERO SECTION */}
      {/* HERO SECTION */}
      <section className="w-full relative flex flex-col items-center justify-center z-10">
        <div className="relative min-h-screen w-full overflow-x-hidden">
          
          {/* ================= BACKGROUND WATER BALLS ANIMATION LAYER ================= */}
          <div className="absolute inset-x-0 top-0 h-full pointer-events-none z-0 overflow-hidden">
            <div className="absolute inset-0 z-0">
              {waterBalls.map((ball, index) => (
                <motion.div
                  key={index}
                  className="absolute rounded-full mix-blend-screen shadow-[inset_0_4px_12px_rgba(255,255,255,0.3)]" 
                  style={{
                    width: ball.size,
                    height: ball.size,
                    left: ball.initialX,
                    top: ball.initialY,
                  }}
                  animate={{
                    x: [0, 45, -35, 25, 0],
                    y: [0, -70, 45, -45, 0],
                    scale: [1, 1.2, 0.85, 1.1, 1],
                    borderRadius: [
                      "50%",
                      "40% 60% 70% 30% / 45% 45% 55% 55%",
                      "65% 35% 50% 50% / 55% 45% 55% 45%",
                      "50%",
                    ],
                  }}
                  transition={{
                    duration: ball.duration,
                    delay: ball.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
            <div className="absolute inset-0 backdrop-blur-[4px] z-[1]" />
          </div>
          <HeroSection />
        </div>
        
        {/* Dotted Glow Background */}
        <DottedGlowBackground
          className="pointer-events-none z-0"
          gap={18}
          radius={1.5}
          color="rgba(0,0,0,0.1)"
          darkColor="rgba(255,255,255,0.1)"
          glowColor="rgba(125, 42, 232, 0.45)"
          darkGlowColor="rgba(125, 42, 232, 0.9)"
          opacity={0.5}
          speedMin={0.3}
          speedMax={0.9}
        />
      </section>

      {/* ABOUT US SECTION (Asymmetric layouts & rotating badge) */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 relative">
        <div className="flex flex-col text-left relative">
          <span className="text-[10px] uppercase tracking-[0.18em] text-brand-primary font-extrabold px-3 py-1 bg-brand-primary/10 border border-brand-primary/15 rounded-full w-fit mb-6">
            ABOUT OUR AGENCY
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight leading-tight mb-6">
            Your partner in automation, analysis & digital marketing
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm mb-8 max-w-lg">
            At Crudpen, we engineer custom software architectures designed to
            solve structural business inefficiencies. We create modular database
            layers, optimize cloud structures, and ship spectacular user
            interfaces that convert users at record scale.
          </p>

          <AnimatedButton
            href="/about"
            variant="primary"
            icon={ArrowRight}
            className="mb-16">
            Explore More
          </AnimatedButton>

          {/* 150+ Badge floating in left column area */}
          <div className="h-32 w-32 rounded-full bg-brand-primary flex flex-col items-center justify-center text-black shadow-[0_0_30px_rgba(125,42,232,0.3)] border-4 border-background self-start ml-8 md:ml-12 z-20 hover:scale-105 transition-transform duration-300">
            <span className="text-3xl font-black leading-none tracking-tight">
              150+
            </span>
            <span className="text-[8px] font-bold uppercase tracking-widest mt-1 opacity-80 text-center px-2">
              Systems Shipped
            </span>
          </div>
        </div>

        {/* Right side Image with Code Quality badge */}
        <div className="relative w-full h-[500px] flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
          <div className="absolute inset-0 bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />

          {/* Main big image */}
          <div className="relative w-[85%] h-[90%] rounded-3xl overflow-hidden shadow-2xl border border-border z-10">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
              alt="Team meeting"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent pointer-events-none" />
          </div>

          {/* Overlapping Code Quality 100% Badge */}
          <div className="absolute left-[5%] bottom-[10%] h-24 w-24 rounded-full glass border-2 border-brand-primary/50 flex items-center justify-center text-foreground shadow-[0_0_20px_rgba(125,42,232,0.2)] z-20 backdrop-blur-md hover:border-brand-primary transition-colors duration-300">
            <div className="flex flex-col items-center justify-center">
              <span className="text-[8px] uppercase tracking-widest text-brand-primary font-bold mb-1">
                Code Quality
              </span>
              <span className="text-xl font-black">100%</span>
            </div>
            {/* Dashed outer ring decoration */}
            <div className="absolute inset-1 rounded-full border border-foreground/20 border-dashed pointer-events-none" />
          </div>
        </div>
      </section>

      {/* SMART SERVICES SECTION (Grid with central Smartphone Dashboard mockup) */}
      <section className="w-full bg-background py-24 border-y border-border relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-brand-primary font-bold mb-3 block">
            OUR EXPERTISE
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4 leading-tight">
            Smart Services For{" "}
            <span className="text-brand-primary">Digital Growth</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto leading-relaxed">
            We cover the entire lifecycle of software engineering, providing
            modern tooling and top-tier capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-7xl mx-auto px-6 md:px-8">
          {/* Left Cards */}
          <div className="flex flex-col gap-6">
            {/* Automation */}
            <div className="glass-glow rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300 flex flex-col gap-4 border-brand-primary/10 group">
              <div className="h-10 w-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                <Cpu className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground group-hover:text-brand-primary transition-colors">
                Automation Systems
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Integrating AI automation, large language models, and robust
                APIs directly into your core business flows.
              </p>
              <Link
                href="/services"
                className="text-[10px] font-bold text-brand-primary hover:underline flex items-center gap-1">
                Read More <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>

            {/* Fullstack Architecture */}
            <div className="glass-glow rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300 flex flex-col gap-4 border-brand-primary/10 group">
              <div className="h-10 w-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                <Code className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground group-hover:text-brand-primary transition-colors">
                Fullstack Architecture
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Building highly dynamic websites, portals, and platforms using
                React, Next.js, and TypeScript.
              </p>
              <Link
                href="/services"
                className="text-[10px] font-bold text-brand-primary hover:underline flex items-center gap-1">
                Read More <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Central Vertical Image & Smartphone Dashboard Mockup */}
          <div className="relative flex justify-center items-center py-12 lg:py-0 w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-border">
            <Image
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop"
              alt="Woman smiling"
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-transparent to-zinc-950/80 pointer-events-none" />

            {/* Phone Frame */}
            <div className="w-[260px] h-[520px] rounded-[48px] bg-card p-3.5 border-[4px] border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col z-10 transition-transform duration-500 hover:scale-[1.02]">
              {/* Screen Speaker Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-800 rounded-b-2xl z-20 flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-zinc-900 absolute right-6" />
                <div className="h-1 w-8 rounded-full bg-zinc-900" />
              </div>

              {/* Screen content */}
              <div className="w-full h-full rounded-[38px] bg-[#0a0c10] border border-border overflow-hidden p-4 pt-8 flex flex-col gap-4 text-left relative">
                <div className="relative z-10 flex flex-col gap-4 h-full">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] text-muted-foreground font-bold uppercase tracking-wider">
                      Analytics Dashboard
                    </span>
                    <div className="h-4 w-4 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                      <Zap className="h-2 w-2" />
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] text-muted-foreground block font-medium mb-1">
                      Total Systems Revenue
                    </span>
                    <span className="text-2xl font-black text-foreground">
                      $148,259.00
                    </span>
                  </div>

                  {/* Custom Vector Mini Thread Chart */}
                  <div className="h-24 bg-card rounded-xl border border-border relative p-2 overflow-hidden flex items-end justify-between gap-1 mt-2">
                    <div className="absolute top-2 left-2 text-[8px] text-muted-foreground font-bold uppercase tracking-wider">
                      System Threads
                    </div>
                    <div className="h-[20%] w-[12%] bg-brand-primary rounded-sm opacity-60" />
                    <div className="h-[50%] w-[12%] bg-brand-primary rounded-sm opacity-70" />
                    <div className="h-[30%] w-[12%] bg-brand-primary rounded-sm opacity-80" />
                    <div className="h-[80%] w-[12%] bg-brand-primary rounded-sm opacity-90" />
                    <div className="h-[65%] w-[12%] bg-brand-primary rounded-sm" />
                    <div className="h-[95%] w-[12%] bg-brand-primary rounded-sm shadow-[0_0_10px_rgba(125,42,232,0.4)]" />
                  </div>

                  {/* Active streams lists */}
                  <div className="flex flex-col gap-2 mt-4">
                    <span className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest">
                      Active API streams
                    </span>
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-card text-[9px] border border-border">
                      <span className="text-foreground/80 font-medium text-xs">
                        Stripe Webhook
                      </span>
                      <span className="text-brand-primary font-bold flex items-center gap-1.5 bg-brand-primary/10 px-2 py-1 rounded-md">
                        <div className="h-1.5 w-1.5 rounded-full bg-brand-primary animate-pulse" />{" "}
                        Online
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-card text-[9px] border border-border">
                      <span className="text-foreground/80 font-medium text-xs">
                        LLM completion
                      </span>
                      <span className="text-brand-primary font-bold flex items-center gap-1.5 bg-brand-primary/10 px-2 py-1 rounded-md">
                        <div className="h-1.5 w-1.5 rounded-full bg-brand-primary animate-pulse" />{" "}
                        Online
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-6">
            {/* Cloud Architecture */}
            <div className="glass-glow rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300 flex flex-col gap-4 border-brand-primary/10 group">
              <div className="h-10 w-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                <Cloud className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground group-hover:text-brand-primary transition-colors">
                Cloud Architecture
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Deploying serverless systems across AWS, GCP, and Azure with
                ironclad CI/CD pipelines.
              </p>
              <Link
                href="/services"
                className="text-[10px] font-bold text-brand-primary hover:underline flex items-center gap-1">
                Read More <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>

            {/* SEO & Performance */}
            <div className="glass-glow rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300 flex flex-col gap-4 border-brand-primary/10 group">
              <div className="h-10 w-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                <Search className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground group-hover:text-brand-primary transition-colors">
                SEO & Performance
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Ensuring lightning-fast page loading speeds and highly optimized
                search engines index coverage.
              </p>
              <Link
                href="/services"
                className="text-[10px] font-bold text-brand-primary hover:underline flex items-center gap-1">
                Read More <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION ("Our Process, Your Solution" with floating screen mockups) */}
      <section className="w-full py-24 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Process content */}
          <div className="flex flex-col text-left">
            <span className="text-[10px] uppercase tracking-[0.2em] text-brand-primary font-extrabold mb-4 block">
              OUR WORKING METHOD
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-10 leading-tight">
              Our Process, <br />
              Your{" "}
              <span className="text-brand-primary drop-shadow-[0_0_10px_rgba(125, 42, 232,0.25)]">
                Solution
              </span>
            </h2>

            <div className="flex flex-col gap-8">
              <div className="flex gap-4 group">
                <div className="h-9 w-9 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-black text-sm shrink-0 border border-brand-primary/20 group-hover:bg-brand-primary group-hover:text-black transition-colors duration-300">
                  01
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-brand-primary transition-colors">
                    Deep Discovery & Blueprint
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    We deep-dive into your operational pipeline to draft system
                    specifications and technical blueprints.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="h-9 w-9 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-black text-sm shrink-0 border border-brand-primary/20 group-hover:bg-brand-primary group-hover:text-black transition-colors duration-300">
                  02
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-brand-primary transition-colors">
                    Modular System Spec
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Structuring databases, user hierarchies, and API endpoints,
                    establishing absolute project clarity before coding.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="h-9 w-9 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-black text-sm shrink-0 border border-brand-primary/20 group-hover:bg-brand-primary group-hover:text-black transition-colors duration-300">
                  03
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-brand-primary transition-colors">
                    Bespoke Engineering
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Our engineering experts develop the software platform, using
                    clean, modular, and fully tested TypeScript codebases.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Overlapping Photographic Cards Composition */}
          <div className="relative h-[500px] lg:h-[600px] w-full flex items-center justify-center">
            {/* Huge Background Ring */}
            <div className="absolute top-[10%] right-[-15%] w-[110%] pb-[110%] rounded-full border-[15px] border-brand-primary/20 pointer-events-none opacity-60 z-0" />
            <div className="absolute top-[15%] right-[-10%] w-[100%] pb-[100%] rounded-full border-[2px] border-brand-primary/40 pointer-events-none opacity-40 z-0 blur-[2px]" />

            <div className="absolute inset-0 bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none z-0" />

            {/* Top Right card: Man Smiling */}
            <div className="absolute right-0 top-10 w-[70%] h-[60%] rounded-3xl overflow-hidden shadow-2xl border border-border rotate-[5deg] hover:rotate-0 transition-transform duration-500 z-10">
              <Image
                src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=800&auto=format&fit=crop"
                alt="Man smiling"
                fill
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-brand-primary/20 mix-blend-overlay" />
            </div>

            {/* Bottom Left card: Dashboard */}
            <div className="absolute left-4 bottom-10 w-[65%] h-[55%] rounded-3xl overflow-hidden shadow-2xl border border-border -rotate-[3deg] hover:rotate-0 transition-transform duration-500 z-20">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop"
                alt="Dashboard"
                fill
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-zinc-950/40 mix-blend-overlay" />

              {/* Glowing overlay element attached to the dashboard card */}
              <div className="absolute top-4 right-4 h-20 w-20 rounded-full glass border border-brand-primary/30 flex items-center justify-center shadow-[0_0_30px_rgba(125,42,232,0.4)] animate-pulse-slow backdrop-blur-md">
                <div className="flex flex-col items-center">
                  <span className="text-brand-primary font-black text-lg leading-none">
                    100%
                  </span>
                  <span className="text-[7px] text-foreground/80 uppercase tracking-widest font-bold mt-1">
                    Score
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT WORK SECTION (Case studies horizontal layout) */}
      <section className="w-full bg-card/40 py-24 border-t border-border relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-primary font-extrabold mb-4 block">
                CASE STUDIES
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
                Discover Our <br />
                Recent Work
              </h2>
            </div>
            <AnimatedButton
              href="/projects"
              variant="inverse"
              size="sm"
              icon={ArrowUpRight}>
              Explore Projects
            </AnimatedButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Left Card - Faded Image */}
            <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-lg opacity-60 hover:opacity-100 transition-opacity duration-500 hidden md:block">
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
                alt="Case study 1"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-primary/40 mix-blend-overlay" />
              <div className="absolute inset-0 bg-zinc-950/40" />
            </div>

            {/* Center Card - Active highlighted card */}
            <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(125,42,232,0.15)] md:scale-110 z-20 group transition-transform duration-500 border border-brand-primary/20">
              {/* Full background image */}
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop"
                alt="Case study 2"
                fill
                className="object-cover"
              />

              {/* Green tint overlay like the mockup */}
              <div className="absolute inset-0 bg-brand-primary/30 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-50" />

              {/* Center green arrow button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-brand-primary flex items-center justify-center text-black shadow-[0_0_20px_rgba(125,42,232,0.5)] cursor-pointer hover:scale-110 transition-transform duration-300">
                <ArrowUpRight className="h-5 w-5" />
              </div>

              {/* Floating White Info Box */}
              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-4 text-center shadow-2xl z-20 hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                <h3 className="text-sm font-black text-black mb-1">
                  Virtual Workspace
                </h3>
                <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider block">
                  Read case study
                </span>
              </div>
            </div>

            {/* Right Card - Faded Image */}
            <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-lg opacity-60 hover:opacity-100 transition-opacity duration-500 hidden md:block">
              <Image
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop"
                alt="Case study 3"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-primary/40 mix-blend-overlay" />
              <div className="absolute inset-0 bg-zinc-950/40" />
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE & METRICS SECTION */}
      <section className="w-full bg-background  py-24 border-y border-border relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Circular Image */}
          <div className="relative flex justify-center lg:justify-start items-center">
            <div className="absolute inset-0 bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-card shadow-[0_0_50px_rgba(125,42,232,0.15)] z-10">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                alt="Expertise"
                fill
                className="object-cover"
              />
            </div>

            {/* Small decorative elements around the image */}
            <div className="absolute -bottom-4 right-12 h-20 w-20 bg-brand-primary/20 rounded-bl-full rounded-tr-full blur-xl z-0" />
            <div className="absolute top-10 -left-6 h-12 w-12 border-4 border-brand-primary/20 rounded-full z-20 animate-pulse-slow" />
          </div>

          {/* Right Column: Text + Rings + Button */}
          <div className="text-left flex flex-col items-start">
            <span className="text-[10px] uppercase tracking-[0.2em] text-brand-primary font-extrabold mb-4 block">
              OUR DOMAIN EXPERTISE
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-10 leading-tight">
              Deep Expertise in Cutting
              <br />
              Edge Software Solutions
            </h2>

            {/* Glowing Circular Rings Progress Indicators */}
            <div className="flex flex-wrap gap-8 text-center mb-10">
              {/* Progress 1 */}
              <div className="flex flex-col items-center gap-3 group">
                <div className="relative h-20 w-20 flex items-center justify-center">
                  <div className="absolute inset-0 bg-brand-primary/5 rounded-full blur-md group-hover:bg-brand-primary/10 transition-colors" />
                  <svg
                    className="absolute inset-0 transform -rotate-90"
                    viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="rgba(255,255,255,0.05)"
                      strokeWidth="6"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#7d2ae8"
                      strokeWidth="6"
                      fill="none"
                      strokeDasharray="251.2"
                      strokeDashoffset="2.51"
                      className="shadow-md drop-shadow-[0_0_8px_rgba(125,42,232,0.4)] transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <span className="text-sm font-black text-foreground relative z-10">
                    99%
                  </span>
                </div>
                <span className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">
                  UI Design
                </span>
              </div>

              {/* Progress 2 */}
              <div className="flex flex-col items-center gap-3 group">
                <div className="relative h-20 w-20 flex items-center justify-center">
                  <div className="absolute inset-0 bg-brand-primary/5 rounded-full blur-md group-hover:bg-brand-primary/10 transition-colors" />
                  <svg
                    className="absolute inset-0 transform -rotate-90"
                    viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="rgba(255,255,255,0.05)"
                      strokeWidth="6"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#7d2ae8"
                      strokeWidth="6"
                      fill="none"
                      strokeDasharray="251.2"
                      strokeDashoffset="12.56"
                      className="shadow-md drop-shadow-[0_0_8px_rgba(125,42,232,0.4)] transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <span className="text-sm font-black text-foreground relative z-10">
                    95%
                  </span>
                </div>
                <span className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">
                  Development
                </span>
              </div>

              {/* Progress 3 */}
              <div className="flex flex-col items-center gap-3 group">
                <div className="relative h-20 w-20 flex items-center justify-center">
                  <div className="absolute inset-0 bg-brand-primary/5 rounded-full blur-md group-hover:bg-brand-primary/10 transition-colors" />
                  <svg
                    className="absolute inset-0 transform -rotate-90"
                    viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="rgba(255,255,255,0.05)"
                      strokeWidth="6"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#7d2ae8"
                      strokeWidth="6"
                      fill="none"
                      strokeDasharray="251.2"
                      strokeDashoffset="27.63"
                      className="shadow-md drop-shadow-[0_0_8px_rgba(125,42,232,0.4)] transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <span className="text-sm font-black text-foreground relative z-10">
                    89%
                  </span>
                </div>
                <span className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">
                  Analytics
                </span>
              </div>
            </div>

            <AnimatedButton
              href="/services"
              variant="outline"
              icon={ArrowUpRight}>
              Explore More
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-8 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-left mb-24">
          {/* Left Column: Header and Circular Photo */}
          <div className="flex flex-col gap-10">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold mb-4 block">
                TESTIMONIALS
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
                When Our Clients Say
                <br />
                Results From Clients
              </h2>
            </div>

            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-brand-primary/20 shadow-[0_0_30px_rgba(125,42,232,0.15)] ml-4">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
                alt="Client"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay" />

              {/* Floating Quote Icon on the photo */}
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-brand-primary flex items-center justify-center shadow-[0_0_20px_rgba(125,42,232,0.5)] border-4 border-background z-20">
                <span className="text-black font-serif text-3xl font-bold pt-2">
                  “
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Testimonial Content */}
          <div className="flex flex-col gap-6 lg:pl-10 relative">
            {/* 5 Stars */}
            <div className="flex items-center gap-1.5 text-brand-primary">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="text-foreground/90 text-lg md:text-xl leading-relaxed font-medium italic relative z-10">
              "Crudpen delivered our central SaaS management board ahead of
              deadline. The system handles 50k+ active threads without a single
              performance dip. Highly recommended team."
            </p>

            <div className="flex items-center gap-4 mt-4">
              <div className="h-12 w-12 rounded-full overflow-hidden border border-brand-primary/30 relative hidden md:block">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
                  alt="Alexander Harris"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-base font-bold text-foreground">
                  Alexander Harris
                </h4>
                <p className="text-[10px] text-brand-primary uppercase tracking-widest font-bold">
                  VP of Product, SaaS Analytics
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Blog / News updates grid */}
        <div>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-4">
            <div className="text-left">
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold mb-4 block">
                BLOG & INSIGHTS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
                News Updates And{" "}
                <span className="text-brand-primary">Expert Advice</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Blog Post 1 */}
            <div className="glass-glow rounded-3xl overflow-hidden border-brand-primary/10 hover:border-brand-primary/30 transition-colors duration-300 group flex flex-col">
              <div className="h-56 w-full relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
                  alt="Blog post 1"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay pointer-events-none" />
                {/* Floating Date Badge */}
                <div className="absolute top-4 left-4 bg-white text-black px-3 py-2 rounded-xl shadow-lg z-10 flex flex-col items-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Oct
                  </span>
                  <span className="text-lg font-black leading-none">12</span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow bg-card">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-brand-primary transition-colors leading-tight">
                  Microservices vs. Monoliths: Architectural Trade-offs
                </h3>
                <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
                  An in-depth analysis of when to adopt distributed systems and
                  when a well-structured monolith is the superior choice.
                </p>
                <div className="flex items-center mt-auto">
                  <AnimatedButton href="#" variant="soft" icon={ArrowRight}>
                    Read Article
                  </AnimatedButton>
                </div>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="glass-glow rounded-3xl overflow-hidden border-brand-primary/10 hover:border-brand-primary/30 transition-colors duration-300 group flex flex-col">
              <div className="h-56 w-full relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
                  alt="Blog post 2"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay pointer-events-none" />
                {/* Floating Date Badge */}
                <div className="absolute top-4 left-4 bg-white text-black px-3 py-2 rounded-xl shadow-lg z-10 flex flex-col items-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Sep
                  </span>
                  <span className="text-lg font-black leading-none">28</span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow bg-card">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-brand-primary transition-colors leading-tight">
                  Scaling Teams for High-Velocity Product Delivery
                </h3>
                <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
                  Frameworks for maintaining code quality and architectural
                  integrity while rapidly expanding your engineering
                  organization.
                </p>
                <div className="flex items-center mt-auto">
                  <AnimatedButton href="#" variant="soft" icon={ArrowRight}>
                    Read Article
                  </AnimatedButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION (LET US BUILD TOGETHER) */}
      <section className="w-full py-24 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="glass-glow rounded-3xl p-12 md:p-16 border-brand-primary/20 relative overflow-hidden text-center flex flex-col items-center justify-center shadow-[0_0_50px_rgba(125, 42, 232,0.04)]">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/5 to-transparent pointer-events-none" />

          {/* Subtle cybernetic line indicators */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-primary/45 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-primary/45 to-transparent" />

          <span className="text-[10px] uppercase tracking-[0.22em] text-brand-primary font-extrabold mb-4 block">
            READY TO COMMENCE?
          </span>

          <h2 className="text-4xl md:text-7xl font-black text-foreground mb-8 tracking-tight uppercase leading-none select-none">
            LET US BUILD <br />
            <span className="text-brand-primary drop-shadow-[0_0_15px_rgba(125, 42, 232,0.35)]">
              TOGETHER
            </span>
          </h2>

          <AnimatedButton
            href="/contact"
            variant="primary"
            size="lg"
            icon={ArrowUpRight}
            glow>
            Start Your Transformation
          </AnimatedButton>
        </div>
      </section>

      <section className="bg-background  max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 relative z-10">
        <div className="text-center space-y-2 sm:space-y-3 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-purple-500 dark">
            Measurable improvement metrics
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md mx-auto">
            Unify system environments and dismantle data isolation silos
            effortlessly.
          </p>
        </div>
      </section>
      <div className="w-full">
        <TeamSection />
      </div>
    </div>
  );
}

// Simple Helper Components for Portfolio Cards to keep standard layout cleanest
function LayersIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2z"
      />
    </svg>
  );
}

function TerminalIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}
