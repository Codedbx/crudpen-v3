"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

/* ─── Social Icons (inline SVGs to avoid extra dependencies) ─── */
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

/* ─── Spotlight Card ─── */
const SpotlightCard = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: CardType;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      },
      []
    );

    const isHovered = hovered === index;
    const isBlurred = hovered !== null && hovered !== index;

    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.6,
          delay: index * 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Outer glow wrapper — animated border */}
        <div
          className={cn(
            "relative rounded-[22px] p-[2px] transition-all duration-500",
            isHovered
              ? "bg-gradient-to-r from-[#6C3FEB] via-[#9333EA] to-[#c084fc] shadow-[0_0_30px_rgba(108,63,235,0.35)]"
              : "bg-transparent"
          )}
        >
          {/* Pulsing glow ring */}
          {isHovered && (
            <div className="absolute -inset-[3px] rounded-[24px] bg-gradient-to-r from-[#6C3FEB] via-[#9333EA] to-[#c084fc] opacity-40 blur-md animate-pulse pointer-events-none" />
          )}

          <div
            ref={cardRef}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onMouseMove={handleMouseMove}
            className={cn(
              "group relative rounded-[20px] w-full cursor-pointer overflow-hidden",
              "bg-white",
              "transition-all duration-500 ease-out",
              isHovered && "-translate-y-1",
              isBlurred && "blur-sm scale-[0.97] opacity-40"
            )}
          >
            {/* Mouse-tracking spotlight glow */}
            <div
              className="pointer-events-none absolute inset-0 z-10 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(108,63,235,0.10), transparent 60%)`,
              }}
            />

            {/* Image */}
            <div className="relative w-full h-[260px] md:h-[300px] overflow-hidden">
              <Image
                src={card.src}
                alt={card.title}
                fill
                className={cn(
                  "object-cover transition-all duration-700 ease-out",
                  isHovered ? "scale-110 brightness-105" : "scale-100"
                )}
              />
              {/* Bottom gradient */}
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-500",
                  isHovered ? "opacity-100" : "opacity-30"
                )}
              />
            </div>

            {/* Card body */}
            <div className="relative px-6 py-5 bg-white">
              {/* Animated purple line */}
              <div
                className={cn(
                  "absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-[#6C3FEB] to-[#9333EA] rounded-full transition-all duration-500 origin-left",
                  isHovered
                    ? "scale-x-100 opacity-100"
                    : "scale-x-0 opacity-0"
                )}
              />

              <h3
                className={cn(
                  "text-lg font-bold text-[#0D0D1A] mb-1 leading-tight transition-colors duration-300",
                  isHovered && "text-[#6C3FEB]"
                )}
              >
                {card.title}
              </h3>
              {card.subtitle && (
                <p className="text-sm font-medium text-gray-500 transition-colors duration-300 group-hover:text-[#6C3FEB]/70 mb-3">
                  {card.subtitle}
                </p>
              )}

              {/* Social icons — slide up on hover */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="flex gap-3 mt-1"
                  >
                    {(card.socials?.linkedin || true) && (
                      <a
                        href={card.socials?.linkedin || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-[#6C3FEB] hover:text-white transition-all duration-300"
                      >
                        <LinkedInIcon />
                      </a>
                    )}
                    {(card.socials?.twitter || true) && (
                      <a
                        href={card.socials?.twitter || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-[#6C3FEB] hover:text-white transition-all duration-300"
                      >
                        <TwitterIcon />
                      </a>
                    )}
                    {(card.socials?.github || true) && (
                      <a
                        href={card.socials?.github || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-[#6C3FEB] hover:text-white transition-all duration-300"
                      >
                        <GithubIcon />
                      </a>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
);

SpotlightCard.displayName = "SpotlightCard";

type CardType = {
  title: string;
  subtitle?: string;
  src: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
};

export function FocusCards({
  cards,
  className,
}: {
  cards: CardType[];
  className?: string;
}) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-8 w-full",
        className
      )}
    >
      {cards.map((card, index) => (
        <SpotlightCard
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
