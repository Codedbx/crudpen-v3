'use strict';
'use client';

import React from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { motion } from 'framer-motion';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-poppins',
});

import {
  CheckCircle2,
  Trophy,
  Users,
  Headset,
  Lightbulb,
  Globe,
  Award,
  Search,
  PenTool,
  Code2,
  Rocket,
  Activity,
  Compass,
  Telescope,
  RefreshCw,
  Target,
} from 'lucide-react';

import { BackgroundBeams } from '@/components/ui/background-beams';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { AnimatedTimeline } from '@/components/ui/animated-timeline';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { MovingBorderCard } from '@/components/ui/moving-border';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { FlipCard } from '@/components/ui/flip-card';
import { AnimatedLogoCard } from '@/components/ui/animated-logo-card';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import { StatsSection } from '@/components/ui/stats-section';
import { FocusCards } from '@/components/ui/focus-cards';
import { AnimatedButton } from '@/components/ui/animated-button';
import { MacbookScrollDemo } from '@/components/ui/macbook-scroll-demo';
import { DottedGlowBackground } from '@/components/ui/dotted-glow-background';
import { MaskContainer } from '@/components/ui/svg-mask-effect';

export default function About() {
  const stats = [
    { value: '5+', label: '5+ Years of Experience' },
    { value: '50+', label: '50+ Projects Completed' },
    { value: '25+', label: '25+ Happy Clients' },
    { value: '100%', label: '100% Client Satisfaction' },
  ];

  const team = [
    { name: 'Gita Izonebi Emmanuel', role: 'CEO / Founder — Full Stack Software Engineer', initials: 'GE', color: 'from-[#6C3FEB] to-[#9333EA]', image: '/Emmanuel.webp', socials: { linkedin: '#', twitter: '#', github: '#' } },
    { name: 'Onyenokwe Great Chukwuka', role: 'Lead Frontend Developer', initials: 'OG', color: 'from-[#7C3AED] to-[#6C3FEB]', image: '/Great.jpg', socials: { linkedin: '#', twitter: '#', github: '#' } },
    { name: 'Koreme Samson', role: 'Frontend Developer & Graphic Designer', initials: 'KS', color: 'from-[#8b5cf6] to-[#7C3AED]', image: '/Samson.jpg', socials: { linkedin: '#', twitter: '#', github: '#' } },
    { name: 'Ochai Sunday Josiah', role: 'Frontend Developer & Community Manager', initials: 'OJ', color: 'from-[#9333EA] to-[#6C3FEB]', image: '/Josiah.webp', socials: { linkedin: '#', twitter: '#', github: '#' } },
  ];

  const values = [
    {
      icon: <Users className="h-6 w-6 text-[#6C3FEB]" />,
      title: 'People First',
      desc: 'We believe in fostering a culture of collaboration, growth, and mutual respect.',
      header: (
        <div className="flex h-full min-h-[6rem] w-full items-center justify-center rounded-xl bg-[#6C3FEB]/10 backdrop-blur-sm border border-[#6C3FEB]/10">
          <Users className="h-10 w-10 text-[#6C3FEB] drop-shadow-[0_0_8px_rgba(108,63,235,0.5)]" />
        </div>
      ),
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-[#8b5cf6]" />,
      title: 'Innovation',
      desc: "Constantly pushing boundaries to create cutting-edge solutions for tomorrow's challenges.",
      header: (
        <div className="flex h-full min-h-[6rem] w-full items-center justify-center rounded-xl bg-[#8b5cf6]/10 backdrop-blur-sm border border-[#8b5cf6]/10">
          <Lightbulb className="h-10 w-10 text-[#8b5cf6] drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
        </div>
      ),
    },
    {
      icon: <Globe className="h-6 w-6 text-[#7C3AED]" />,
      title: 'Global Impact',
      desc: 'Making a positive difference in communities worldwide through technology.',
      header: (
        <div className="flex h-full min-h-[6rem] w-full items-center justify-center rounded-xl bg-[#7C3AED]/10 backdrop-blur-sm border border-[#7C3AED]/10">
          <Globe className="h-10 w-10 text-[#7C3AED] drop-shadow-[0_0_8px_rgba(124,58,237,0.5)]" />
        </div>
      ),
    },
    {
      icon: <Award className="h-6 w-6 text-[#9333EA]" />,
      title: 'Excellence',
      desc: 'Committed to delivering exceptional quality in everything we do.',
      header: (
        <div className="flex h-full min-h-[6rem] w-full items-center justify-center rounded-xl bg-[#9333EA]/10 backdrop-blur-sm border border-[#9333EA]/10">
          <Award className="h-10 w-10 text-[#9333EA] drop-shadow-[0_0_8px_rgba(147,51,234,0.5)]" />
        </div>
      ),
    },
  ];

  const timelineData = [
    {
      step: '01',
      title: 'Ideation & Discovery',
      description: 'We craft creative ideas and outline the problem to be solved, diving deep into understanding user needs and market trends to set a solid foundation.',
      tags: ['Video Meeting', 'Feature Requirements', 'Business Goals', 'Market Analysis'],
      estTime: '1-3 Days'
    },
    {
      step: '02',
      title: 'UI/UX Design',
      description: 'Design the user interface and experience with a focus on simplicity, usability, and engagement to ensure a smooth journey for your users.',
      tags: ['Wireframing', 'Prototyping', 'User Flows', 'Design System'],
      estTime: '1-2 Weeks'
    },
    {
      step: '03',
      title: 'Project Development',
      description: 'Build the project using the latest technologies, ensuring it is scalable, highly efficient, and completely production-ready.',
      tags: ['Frontend', 'Backend', 'Database Architecture', 'API Integration'],
      estTime: '3-6 Weeks'
    },
    {
      step: '04',
      title: 'Deployment & Scaling',
      description: 'We ensure the system is ready for public use by setting up production environments, going live, and establishing monitoring to accommodate growing user demands.',
      tags: ['CI/CD Pipelines', 'Cloud Hosting', 'Performance Tuning', 'Analytics Setup'],
      estTime: '1 Week'
    }
  ];

  return (
    <div 
      className={`w-full flex flex-col items-center bg-[#0D0D1A] ${poppins.className}`}
      style={poppins.style}
    >

      {/* ─── 1. HERO — BackgroundBeams & SVG Mask ─── */}
      <section className="relative w-full bg-gradient-to-b from-[#0D0D1A] via-[#150D30] to-[#0D0D1A] pt-[80px] pb-[80px] text-center overflow-hidden min-h-[60vh] flex flex-col justify-center">
        <BackgroundBeams className="z-0" />
        <div className="relative z-10 w-full flex flex-col items-center">
          <div className="h-[50vh] w-full flex items-center justify-center">
            <MaskContainer
              revealText={
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6C3FEB]/5 border border-[#6C3FEB]/10 text-slate-400 text-sm font-semibold mb-8 animate-fade-in">
                    About Crudpen &rarr;
                  </div>
                  <p className="text-slate-300/80 text-[48px] md:text-[80px] leading-[1.1] mb-6 flex flex-col items-center justify-center animate-slide-up">
                    <span className="font-serif italic font-light opacity-90 tracking-normal">Crafting</span>
                    <span className="font-sans font-extrabold tracking-tight uppercase text-[40px] md:text-[64px] mt-2">Digital Excellence</span>
                  </p>
                  <p className="text-[#94A3B8] text-lg md:text-xl max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    We're a team of passionate innovators, designers, and developers dedicated to transforming ideas into impactful digital solutions.
                  </p>
                </div>
              }
              className="h-full w-full"
              revealSize={400}
            >
              <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6C3FEB]/20 border border-[#6C3FEB]/50 text-white text-sm font-semibold mb-8 shadow-[0_0_15px_rgba(108,63,235,0.5)] animate-fade-in">
                  About Crudpen &rarr;
                </div>
                <p className="text-white text-[48px] md:text-[80px] leading-[1.1] mb-6 flex flex-col items-center justify-center animate-slide-up">
                  <span className="font-serif italic font-light tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-[#6C3FEB] via-[#c084fc] to-[#6C3FEB] bg-[length:200%_auto] animate-gradient-x drop-shadow-[0_0_10px_rgba(192,132,252,0.6)]">
                    Crafting
                  </span>
                  <span className="font-sans font-extrabold tracking-tight uppercase text-[40px] md:text-[64px] mt-2 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                    Digital Excellence
                  </span>
                </p>
                <p className="text-white text-lg md:text-xl max-w-2xl leading-relaxed font-medium animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  We're a team of passionate innovators, designers, and developers dedicated to transforming ideas into impactful digital solutions.
                </p>
              </div>
            </MaskContainer>
          </div>
        </div>
      </section>

      {/* ─── 2. ABOUT SPLIT — TracingBeam ─── */}
      <section className="w-full bg-gradient-to-b from-[#FAF8FF] to-[#F0EBFF] py-[100px] relative">
        {/* Grid Pattern Background */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(to right, #d1d5db 1px, transparent 1px), linear-gradient(to bottom, #d1d5db 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
            WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
            maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-[16px] overflow-hidden p-1 shadow-[0_0_60px_rgba(108,63,235,0.3)] bg-gradient-to-br from-[#6C3FEB]/30 to-[#9333EA]/15">
            <div className="w-full h-full relative rounded-[14px] overflow-hidden bg-gray-100 flex items-center justify-center">
              <Image 
                src="/crafty-img1.jpg" 
                alt="Crafting Digital Excellence" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D1A]/60 via-transparent to-transparent pointer-events-none" />
              <motion.div 
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute bottom-4 left-4 right-4 sm:right-auto md:bottom-6 md:left-6 bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(108,63,235,0.15)] rounded-[12px] md:rounded-[16px] p-3 md:p-5 flex items-center gap-3 md:gap-4 border border-white/50"
              >
                <div className="shrink-0 h-10 w-10 md:h-12 md:w-12 rounded-full bg-gradient-to-br from-[#6C3FEB] to-[#9333EA] flex items-center justify-center text-white shadow-[0_4px_15px_rgba(108,63,235,0.4)]">
                  <Award className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-[13px] md:text-sm font-bold text-[#0D0D1A] leading-tight truncate">5 Years Experience</p>
                  <p className="text-[11px] md:text-xs text-[#475569] mt-0.5 md:mt-1 truncate">10+ Projects</p>
                </div>
              </motion.div>
            </div>
          </div>

          <TracingBeam className="max-w-none">
            <div className="flex flex-col gap-6 pl-12 md:pl-24">
              <h2 className="text-[40px] md:text-[56px] leading-[1.1] mb-2 flex flex-col items-start animate-slide-up">
                <span className="font-serif italic font-light text-[#0D0D1A]/80 tracking-normal">Crafting</span>
                <span className="font-sans font-extrabold tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#6C3FEB] to-[#9333EA]">
                  Digital Excellence
                </span>
              </h2>
              <p className="text-[#475569] leading-relaxed max-w-[600px]">
                Crudpen Technologies is a full-service digital solutions company specializing in website development, mobile app development, WordPress solutions, SEO optimization, and website redesign. We are committed to building high-performance, scalable, and user-friendly digital products tailored to our clients&apos; unique needs.
              </p>

              <ul className="space-y-4 mt-2">
                <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} className="flex items-center gap-3 text-[#0D0D1A] font-medium">
                  <CheckCircle2 className="h-6 w-6 text-[#6C3FEB] shrink-0" />
                  <span>High-Performance Website & App Development</span>
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} className="flex items-center gap-3 text-[#0D0D1A] font-medium">
                  <CheckCircle2 className="h-6 w-6 text-[#6C3FEB] shrink-0" />
                  <span>Creative Design & Branding Solutions</span>
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }} className="flex items-center gap-3 text-[#0D0D1A] font-medium">
                  <CheckCircle2 className="h-6 w-6 text-[#6C3FEB] shrink-0" />
                  <span>SEO Optimization & Digital Strategy</span>
                </motion.li>
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <button className="p-[3px] relative w-full sm:w-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6C3FEB] to-[#9333EA] rounded-xl" />
                  <div className="px-8 py-3 bg-[#0D0D1A] rounded-[10px] relative group transition duration-200 text-white hover:bg-transparent text-lg font-medium">
                    Explore Services
                  </div>
                </button>
              </div>
            </div>
          </TracingBeam>
        </div>
      </section>

      {/* ─── 3. SECOND SPLIT SECTION ─── */}
      <section className="w-full bg-gradient-to-b from-[#F0EBFF] to-[#E8E0FF] py-[100px] relative">
        {/* Grid Pattern Background */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(to right, #c4b5fd 1px, transparent 1px), linear-gradient(to bottom, #c4b5fd 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
            WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
            maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
          }}
        />
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          <div className="flex flex-col gap-10">
            <TextGenerateEffect
              words="Providing Digital <br-all/> Solutions & Services <br-all/> for Startups"
              className="text-2xl sm:text-3xl md:text-[40px] text-[#0D0D1A] tracking-tight leading-tight max-w-[600px]"
            />

            <div className="flex flex-col gap-4 max-w-[600px]">
              <motion.div 
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex gap-6 p-4 rounded-2xl hover:bg-white/40 transition-colors"
              >
                <div className="h-14 w-14 shrink-0 bg-gradient-to-br from-[#6C3FEB] to-[#9333EA] rounded-[12px] flex items-center justify-center text-white shadow-[0_4px_20px_rgba(108,63,235,0.4)]">
                  <Trophy className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0D0D1A] mb-2">Quality Solution for Business</h3>
                  <p className="text-[#475569] leading-relaxed">
                    We deliver high-quality software, seamless integrations, and scalable digital products that enhance user experience and maximize impact.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex gap-6 p-4 rounded-2xl hover:bg-white/40 transition-colors"
              >
                <div className="h-14 w-14 shrink-0 bg-gradient-to-br from-[#7C3AED] to-[#6C3FEB] rounded-[12px] flex items-center justify-center text-white shadow-[0_4px_20px_rgba(124,58,237,0.4)]">
                  <Users className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0D0D1A] mb-2">Amazing Expert Teams</h3>
                  <p className="text-[#475569] leading-relaxed">
                    Our team of skilled developers, designers, and digital strategists ensures every project is crafted with precision, innovation, and excellence.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex gap-6 p-4 rounded-2xl hover:bg-white/40 transition-colors"
              >
                <div className="h-14 w-14 shrink-0 bg-gradient-to-br from-[#8b5cf6] to-[#7C3AED] rounded-[12px] flex items-center justify-center text-white shadow-[0_4px_20px_rgba(139,92,246,0.4)]">
                  <Headset className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0D0D1A] mb-2">Urgent Support For Clients</h3>
                  <p className="text-[#475569] leading-relaxed">
                    We provide dedicated support and seamless communication to ensure your project runs smoothly from ideation to delivery.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-[4/5] rounded-[20px] overflow-hidden p-1 shadow-[0_20px_60px_rgba(108,63,235,0.15)] bg-gradient-to-br from-[#6C3FEB]/30 to-[#9333EA]/15 lg:order-last order-first">
            <div className="w-full h-full relative rounded-[18px] overflow-hidden bg-white/60 backdrop-blur-xl border border-white/50 flex items-center justify-center">
              <Image 
                src="/office-teamwork-session.jpg" 
                alt="Startups Digital Solutions" 
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. STATS SECTION ─── */}
      <section className="w-full bg-gradient-to-b from-[#0D0D1A] via-[#150D30] to-[#0D0D1A] py-[60px] relative overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          {/* Main Radial Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(108,63,235,0.3),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.2),transparent_50%)]" />
          
          {/* Animated Grid Pattern */}
          <motion.div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(108,63,235,0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(108,63,235,0.5) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px"
            }}
            animate={{
              backgroundPosition: ["0px 0px", "50px 50px", "0px 0px"]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Floating Orbs */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-[#6C3FEB]/20 to-[#3B82F6]/20 blur-xl"
              style={{
                width: `${60 + i * 20}px`,
                height: `${60 + i * 20}px`,
                left: `${10 + i * 15}%`,
                top: `${20 + i * 12}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5
              }}
            />
          ))}
        </div>

        <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6C3FEB]/10 border border-[#6C3FEB]/20 text-[#6C3FEB] text-sm font-semibold mb-6 backdrop-blur-sm"
            >
              <motion.div 
                className="w-2 h-2 bg-[#6C3FEB] rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              What We've Built
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
            >
              The Numbers <span className="text-transparent bg-gradient-to-r from-[#6C3FEB] to-[#8B5CF6] bg-clip-text">Tell Our Story</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-white/70 text-base max-w-2xl mx-auto leading-relaxed"
            >
              We've been building stuff for a while now. Here's what happened along the way.
            </motion.p>
          </motion.div>

          {/* Stats Cards */}
          <StatsSection stats={stats} />
        </div>
      </section>

      {/* ─── 5. TEAM SECTION — AnimatedTooltip style cards ─── */}
      <section className="w-full bg-white py-[100px] relative overflow-hidden">
        {/* Animated floating particles background */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-[#6C3FEB]/10 animate-pulse"
              style={{
                left: `${5 + (i * 37) % 90}%`,
                top: `${8 + (i * 53) % 85}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + (i % 3)}s`,
              }}
            />
          ))}
          {/* Subtle radial gradient for depth */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(108,63,235,0.03),transparent_70%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center mb-8">
            {/* Badge pill */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#F3E8FF] border border-[#E9D5FF] mb-8">
              <span className="w-2 h-2 rounded-full bg-[#9333EA]" />
              <span className="text-xs md:text-sm font-bold text-[#9333EA] tracking-widest uppercase">Meet the Team</span>
            </div>

            <TextGenerateEffect
              words="Our <gradient>expert team</gradient> is always ready to help you"
              className="text-4xl md:text-5xl lg:text-6xl text-[#0D0D1A] tracking-tight font-extrabold max-w-4xl mx-auto leading-tight"
            />
          </div>

          {/* Subtitle */}
          <p className="text-center text-base md:text-lg mb-16 font-semibold">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#6C3FEB] via-[#9333EA] to-[#c084fc] border-r-2 border-[#6C3FEB] pr-1 animate-pulse">
              The people behind the magic ✨
            </span>
          </p>

          {/* Team avatar row — AnimatedTooltip */}
          <div className="flex flex-row items-center justify-center mb-16 w-full">
            <AnimatedTooltip
              items={team.map((member, i) => ({
                id: i + 1,
                name: member.name,
                designation: member.role,
                initials: member.initials,
                color: member.color,
                image: member.image,
              }))}
            />
          </div>

          {/* Team detail cards using Focus Cards */}
          <FocusCards 
            cards={team.map(member => ({
              title: member.name,
              subtitle: member.role,
              src: member.image,
              socials: member.socials,
            }))}
            className="md:grid-cols-2 lg:grid-cols-4 gap-8"
          />
        </div>
      </section>

      {/* ─── 6. MISSION & VISION — MovingBorder ─── */}
      <section className="relative w-full bg-gradient-to-b from-[#0D0D1A] via-[#150D30] to-[#0D0D1A] py-[100px] overflow-hidden">
        <BackgroundBeams className="z-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <TextGenerateEffect
              words="Our Mission & Vision"
              className="text-3xl md:text-[40px] text-white tracking-tight"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative mt-16 min-h-[300px] md:min-h-[350px]">
            {/* Background blur effects for extra depth */}
            <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-48 md:w-72 h-48 md:h-72 bg-[#6C3FEB]/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-48 md:w-72 h-48 md:h-72 bg-[#9333EA]/10 blur-[80px] rounded-full pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="h-full min-h-[300px] md:min-h-[350px]"
            >
              <FlipCard
                front={
                  <div className="w-full h-full relative group">
                    <AnimatedLogoCard
                      icon={Compass}
                      title="MISSION"
                      subtitle="OUR MISSION"
                      className="rounded-3xl shadow-[0_8px_32px_rgba(108,63,235,0.2)] border border-white/10 w-full h-full"
                      style={{ '--alc-bg': 'rgba(255, 255, 255, 0.05)', '--alc-text': '#ffffff', '--alc-accent': '#6C3FEB', backdropFilter: 'blur(20px)' } as React.CSSProperties}
                    />
                    <div className="absolute top-4 right-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6C3FEB]/20 text-xs text-[#c084fc] font-medium border border-[#6C3FEB]/30 opacity-60 z-20 pointer-events-none transition-opacity duration-300 group-hover:opacity-100">
                      Tap to flip <RefreshCw className="h-3 w-3" />
                    </div>
                  </div>
                }
                back={
                  <div className="w-full h-full min-h-[300px] md:min-h-[350px] p-6 md:p-10 bg-gradient-to-br from-[#6C3FEB] to-[#9333EA] shadow-[0_15px_40px_rgba(108,63,235,0.3)] rounded-3xl flex flex-col items-center justify-center text-center relative overflow-hidden text-white">
                    <div className="absolute -right-10 -bottom-10 w-32 h-32 md:w-48 md:h-48 bg-white/10 blur-2xl rounded-full" />
                    <div className="absolute -left-10 -top-10 w-32 h-32 md:w-48 md:h-48 bg-white/10 blur-2xl rounded-full" />
                    <h2 className="text-xl md:text-[28px] font-bold mb-4 md:mb-6">Our Mission</h2>
                    <p className="text-white/95 leading-relaxed text-[14px] md:text-[16px] lg:text-[17px] font-medium max-w-full md:max-w-[90%] mx-auto">
                      &ldquo;At Crudpen Technologies Ltd, our mission is to empower businesses and individuals with cutting-edge technology solutions that drive innovation, efficiency, and growth. We are committed to delivering high-quality software, seamless integrations, and scalable digital products that enhance user experience and maximize impact.&rdquo;
                    </p>
                  </div>
                }
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="h-full min-h-[300px] md:min-h-[350px]"
            >
              <FlipCard
                front={
                  <div className="w-full h-full relative group">
                    <AnimatedLogoCard
                      icon={Telescope}
                      title="VISION"
                      subtitle="OUR VISION"
                      className="rounded-3xl shadow-[0_8px_32px_rgba(147,51,234,0.2)] border border-white/10 w-full h-full"
                      style={{ '--alc-bg': 'rgba(255, 255, 255, 0.05)', '--alc-text': '#ffffff', '--alc-accent': '#9333EA', backdropFilter: 'blur(20px)' } as React.CSSProperties}
                    />
                    <div className="absolute top-4 right-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#9333EA]/20 text-xs text-[#d8b4fe] font-medium border border-[#9333EA]/30 opacity-60 z-20 pointer-events-none transition-opacity duration-300 group-hover:opacity-100">
                      Tap to flip <RefreshCw className="h-3 w-3" />
                    </div>
                  </div>
                }
                back={
                  <div className="w-full h-full min-h-[300px] md:min-h-[350px] p-6 md:p-10 bg-gradient-to-br from-[#8b5cf6] to-[#6C3FEB] shadow-[0_15px_40px_rgba(147,51,234,0.3)] rounded-3xl flex flex-col items-center justify-center text-center relative overflow-hidden text-white">
                    <div className="absolute -right-10 -top-10 w-32 h-32 md:w-48 md:h-48 bg-white/10 blur-2xl rounded-full" />
                    <div className="absolute -left-10 -bottom-10 w-32 h-32 md:w-48 md:h-48 bg-white/10 blur-2xl rounded-full" />
                    <h2 className="text-xl md:text-[28px] font-bold mb-4 md:mb-6">Our Vision</h2>
                    <p className="text-white/95 leading-relaxed text-[14px] md:text-[16px] lg:text-[17px] font-medium max-w-full md:max-w-[90%] mx-auto">
                      &ldquo;Our vision is to become a leading force in the tech industry, pioneering transformative solutions that shape the future of digital ecosystems. We aspire to be a trusted partner in technology, fostering innovation, accessibility, and sustainable growth for businesses worldwide.&rdquo;
                    </p>
                  </div>
                }
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 7. VALUES — BentoGrid ─── */}
      <section className="w-full bg-gradient-to-b from-[#F0EBFF] to-[#E8E0FF] py-[100px]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <TextGenerateEffect
              words="Our Core Values"
              className="text-3xl md:text-[40px] text-[#0D0D1A] tracking-tight"
            />
          </div>
          <BentoGrid className="md:grid-cols-2 lg:grid-cols-4 md:auto-rows-[20rem]">
            {values.map((v, i) => (
              <BentoGridItem
                key={i}
                title={v.title}
                description={v.desc}
                header={v.header}
                icon={
                  <div className="h-10 w-10 rounded-full bg-white/70 backdrop-blur-sm border border-[#6C3FEB]/15 flex items-center justify-center shadow-[0_2px_10px_rgba(108,63,235,0.15)]">
                    {v.icon}
                  </div>
                }
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* ─── 8. HOW WE DELIVER — Animated Timeline ─── */}
      <AnimatedTimeline
        title={
          <>
            Our Development Process<br />
            <span className="font-light italic text-[#94A3B8]">From Ideation to Scaling</span>
          </>
        }
        description="Every project moves through a structured process that ensures clarity, smooth collaboration, and a final product that truly works."
        data={timelineData}
      />

      {/* ─── MACBOOK SCROLL DEMO ─── */}
      <MacbookScrollDemo />

      {/* ─── 9. CTA SECTION ─── */}
      <section className="w-full bg-[#0D0D1A] py-[120px] relative overflow-hidden flex items-center justify-center">
        {/* Ambient background glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#6C3FEB] opacity-20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#9333EA] opacity-20 blur-[120px] rounded-full" />
        
        {/* Dotted Glow Background */}
        <div className="absolute inset-0">
          <DottedGlowBackground
            className="pointer-events-none [mask-image:radial-gradient(circle_at_center,white_10%,transparent_90%)] opacity-30 dark:opacity-50"
            opacity={1}
            gap={12}
            radius={1.5}
            color="rgba(148, 163, 184, 0.4)"
            darkColor="rgba(148, 163, 184, 0.4)"
            glowColor="rgba(147, 51, 234, 0.8)"
            darkGlowColor="rgba(147, 51, 234, 0.8)"
            backgroundOpacity={0}
            speedMin={0.3}
            speedMax={1.6}
            speedScale={1}
          />
        </div>
        
        <div className="max-w-7xl w-full mx-auto px-6 md:px-8 relative z-10">
          <MovingBorderCard
            borderRadius="1.5rem"
            containerClassName="w-full"
            borderClassName="bg-[radial-gradient(#9333EA_40%,transparent_60%)]"
            className="p-1 bg-[#150D30]/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(108,63,235,0.2)]"
            duration={4000}
          >
            <div className="bg-[#0D0D1A]/90 backdrop-blur-2xl rounded-[1.4rem] p-10 md:p-16 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-16 overflow-hidden relative">
              
              {/* Internal glowing orb */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(108,63,235,0.1),transparent_60%)] pointer-events-none" />

              <div className="flex-1 relative z-10 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#150D30]/80 border border-[#6C3FEB]/30 text-[#a855f7] text-xs md:text-sm font-bold tracking-wide mb-8 shadow-lg">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a855f7] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9333EA]"></span>
                  </span>
                  Available for new projects
                </div>
                
                <h2 className="text-[28px] sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white mb-6 tracking-tighter leading-[1.05] whitespace-nowrap">
                  Ready to start your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#c084fc] block">
                    next big project?
                  </span>
                </h2>
                
                <p className="text-[#94A3B8] text-lg max-w-[450px] mb-10 leading-relaxed mx-auto lg:mx-0">
                  Join our satisfied clients and let&apos;s build a stunning, high-performance digital experience tailored to your vision.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                  <button className="p-[3px] relative w-full sm:w-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#6C3FEB] to-[#9333EA] rounded-xl" />
                    <div className="px-8 py-3 bg-[#0D0D1A] rounded-[10px] relative group transition duration-200 text-white hover:bg-transparent text-lg font-medium flex items-center justify-center gap-2">
                      Let's Talk
                      <Rocket className="w-5 h-5" />
                    </div>
                  </button>
                </div>
              </div>

              {/* Decorative Right Side */}
              <div className="flex-1 w-full relative z-10 flex justify-center lg:justify-end mt-10 lg:mt-0">
                <div className="relative w-full max-w-[400px] aspect-square rounded-full flex items-center justify-center">
                  {/* Concentric spinning dashed rings */}
                  <div className="absolute inset-0 rounded-full border border-[#6C3FEB]/20 border-dashed animate-[spin_20s_linear_infinite]" />
                  <div className="absolute inset-8 rounded-full border border-[#9333EA]/30 animate-[spin_15s_linear_infinite_reverse]" />
                  <div className="absolute inset-16 rounded-full border border-white/10 border-dashed animate-[spin_10s_linear_infinite]" />
                  
                  {/* Glowing center core */}
                  <div className="w-32 h-32 bg-gradient-to-br from-[#6C3FEB] to-[#9333EA] rounded-full blur-[30px] opacity-70 animate-pulse" />
                  
                  {/* Orbiting abstract elements */}
                  <div 
                    className="absolute top-1/2 left-1/2 -ml-8 -mt-8 bg-[#150D30]/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-xl animate-orbit flex items-center justify-center" 
                    style={{'--orbit-start': '0deg', '--orbit-radius': '140px', '--orbit-duration': '15s'} as React.CSSProperties}
                  >
                    <Code2 className="h-8 w-8 text-white" />
                  </div>
                  <div 
                    className="absolute top-1/2 left-1/2 -ml-8 -mt-8 bg-[#150D30]/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-xl animate-orbit flex items-center justify-center" 
                    style={{'--orbit-start': '120deg', '--orbit-radius': '160px', '--orbit-duration': '20s'} as React.CSSProperties}
                  >
                    <Activity className="h-8 w-8 text-[#9333EA]" />
                  </div>
                  <div 
                    className="absolute top-1/2 left-1/2 -ml-8 -mt-8 bg-[#150D30]/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-xl animate-orbit flex items-center justify-center" 
                    style={{'--orbit-start': '240deg', '--orbit-radius': '130px', '--orbit-duration': '12s'} as React.CSSProperties}
                  >
                    <Target className="h-8 w-8 text-[#6C3FEB]" />
                  </div>
                </div>
              </div>

            </div>
          </MovingBorderCard>
        </div>
      </section>

    </div>
  );
}
