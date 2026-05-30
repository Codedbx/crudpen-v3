"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { image } from "framer-motion/client";

// --- BENTO GRID WRAPPER ---
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto auto-rows-[26rem] md:auto-rows-[24rem] ${className || ""}`}>
      {children}
    </div>
  );
};

// --- TEAM CARD ---
export const TeamCard = ({
  className,
  name,
  role,
  children,
}: {
  className?: string;
  name: string;
  role: string;
  children?: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className={`rounded-3xl relative overflow-hidden group border border-purple-100/70 dark:border-purple-900/30 shadow-md dark:shadow-2xl flex flex-col justify-end ${className || ""}`}>
      <div className="absolute inset-0 z-0 bg-purple-50 dark:bg-neutral-900 w-full h-full">
        {children}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent z-10 opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

      <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500 dark:group-hover:border-purple-400 rounded-3xl z-30 transition-colors duration-300 pointer-events-none" />

      <div className="relative z-20 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 space-y-1 text-left">
        <h3 className="text-xl font-bold text-white tracking-tight">{name}</h3>
        <p className="text-sm font-medium text-purple-200/80 group-hover:text-purple-400 dark:group-hover:text-purple-300 transition-colors duration-300">
          {role}
        </p>
      </div>
    </motion.div>
  );
};

// --- MAIN TEAM SECTION ASSEMBLY ---
export default function TeamSection() {
  const teamMembers = [
    {
      name: "Sarah Jenkins",
      role: "Chief Executive Officer",
      image: "/teams/john.jpg",
      gridClass: "md:col-span-2",
    },
    {
      name: "Alex Rivera",
      role: "Lead Tech Architect",
      image: "/teams/john.jpg",
      gridClass: "md:col-span-1",
    },
    {
      name: "Elena Rostova",
      role: "Head of Product Design",
     image: "/teams/john.jpg",
      gridClass: "md:col-span-1",
    },
    {
      name: "Marcus Chen",
      role: "Senior AI Engineer",
      image: "/teams/john.jpg",
      gridClass: "md:col-span-2",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background dark:bg-neutral-950 transition-colors duration-300 w-full">
      <div className="max-w-7xl mx-auto mb-12 text-center md:text-left">
        <p className="text-sm font-semibold tracking-wider uppercase text-purple-600 dark:text-purple-400 mb-2">
          Our Leadership
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Meet the minds shaping tomorrow
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-slate-600 dark:text-neutral-400">
          A dynamic team of innovators and creators working together to build
          seamless experiences.
        </p>
      </div>

      <BentoGrid>
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            role={member.role}
            className={member.gridClass}>
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
              priority={index < 2}
              // Changed "object-cover" to "object-contain" to stop the zoom/crop
              className="object-contain p-4 filter grayscale contrast-115 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            />
          </TeamCard>
        ))}
      </BentoGrid>
    </section>
  );
}
