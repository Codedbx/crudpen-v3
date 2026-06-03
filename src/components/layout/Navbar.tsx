"use strict";
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { AnimatedButton } from "@/components/ui/animated-button";
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [translateY, setTranslateY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const heroHeight = window.innerHeight - 100;
      setIsScrolled(currentScroll > heroHeight);

      if (currentScroll <= heroHeight) {
        const remainingDistance = heroHeight - currentScroll;
        setTranslateY(remainingDistance);
      } else {
        setTranslateY(0);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleQuoteScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const targetHref = "/contact";
    if (
      targetHref.startsWith("#") ||
      (pathname === "/" && targetHref.startsWith("/#"))
    ) {
      e.preventDefault();
      const id = targetHref.replace(/^\/#/, "").replace(/^#/, "");
      const element = document.getElementById(id);
      if (element) {
        setIsOpen(false);
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else if (pathname === targetHref) {
      e.preventDefault();
      setIsOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
  ];

  const waterBalls = [
    { size: 40, initialX: "12%", initialY: "8%", duration: 14, delay: 0 },
    { size: 70, initialX: "85%", initialY: "12%", duration: 18, delay: 1.5 },
    { size: 55, initialX: "35%", initialY: "25%", duration: 16, delay: 0.5 },
    { size: 30, initialX: "65%", initialY: "30%", duration: 12, delay: 2 },
    { size: 80, initialX: "20%", initialY: "50%", duration: 22, delay: 3 },
    { size: 45, initialX: "75%", initialY: "55%", duration: 15, delay: 1 },
    { size: 60, initialX: "45%", initialY: "70%", duration: 19, delay: 2.5 },
    { size: 35, initialX: "90%", initialY: "78%", duration: 13, delay: 0.2 },
    { size: 50, initialX: "15%", initialY: "85%", duration: 17, delay: 4 },
    { size: 65, initialX: "60%", initialY: "90%", duration: 20, delay: 1.8 },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none w-full pt-4">
      {/* Dotted Glow Background layer */}
      <DottedGlowBackground
        className="w-full h-full pointer-events-none z-0"
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

      {/* Dynamic Water Balls Layer with exit animation handling */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }} // Fades out smoothly over 0.5s
          >
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
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Blur Overlay - Linked to scroll state to clean up layout text backdrop down the page */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            className="absolute inset-0 backdrop-blur-[4px] z-[1]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
          />
        )}
      </AnimatePresence>

      {/* Main glass nav bar block */}
      <div className="relative z-10 transition-all duration-500 ease-out pointer-events-auto rounded-3xl w-full mx-auto">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-[auto_1fr_auto] md:flex items-center gap-3 py-3 md:py-4">
            <div className="w-full flex justify-between items-center">
              {/* Logo */}
              <Link href="/" className="flex items-center shrink-0 group">
                <Image
                  src="/logo.svg"
                  alt="Crudpen Logo"
                  width={130}
                  height={32}
                  className="h-8 w-auto sm:h-9 transition-transform duration-300 group-hover:scale-[1.02]"
                  priority
                />
              </Link>

              {/* Desktop Nav */}
              <nav
                className={cn(
                  "hidden md:flex items-center justify-center gap-1 lg:gap-2 animate-in fade-in slide-in-from-top-4 duration-700 ease-out mx-auto",
                  "bg-white/10 border border-white/10 p-1.5  px-6 py-2",
                )}
                style={{ borderRadius: ".5rem" }}>
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={cn(
                        "text-xs lg:text-sm font-medium transition-all duration-300 ease-in-out px-4 py-2 rounded-full transform hover:scale-105 active:scale-95 hover:text-white",
                        isActive &&
                          "text-purple-950 scale-105 font-bold hover:text-purple-950",
                      )}>
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              {/* Desktop CTA */}
              <div
                className="hidden md:flex items-center justify-end gap-2 shrink-0"
                style={{
                  transform: `translateY(${translateY}px)`,
                  transition:
                    translateY === 0 ? "transform 0.5s ease-out" : "none",
                }}>
                <AnimatedButton
                  href="/contact"
                  variant="solid"
                  size={isScrolled ? "sm" : "md"}
                  className={cn(
                    "pointer-events-auto shadow-2xl transition-all duration-300",
                    !isScrolled &&
                      "bg-purple-600 hover:bg-purple-700 shadow-purple-500/20 px-6 py-3 text-base font-semibold",
                  )}
                  onClick={handleQuoteScroll}
                  shine={!isScrolled}>
                  Request a Quote
                </AnimatedButton>
              </div>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden col-start-3 flex items-center justify-center p-2 text-muted-foreground hover:text-foreground focus:outline-none"
              aria-label="Toggle menu">
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "pointer-events-auto md:hidden fixed inset-x-4 top-20 rounded-2xl border border-border bg-background/95 backdrop-blur-xl shadow-2xl z-40 transition-all duration-300 ease-out px-5 py-6",
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-2 invisible pointer-events-none",
        )}>
        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-base font-medium py-3 px-3 rounded-xl transition-all duration-200 active:scale-[0.99]",
                  isActive
                    ? "text-background bg-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/5",
                )}>
                {link.name}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border">
          <AnimatedButton
            href="/contact"
            variant="solid"
            size="md"
            fullWidth
            shine={false}
            className="flex-1"
            onClick={(e) => {
              setIsOpen(false);
              handleQuoteScroll(e);
            }}>
            Request a Quote
          </AnimatedButton>
        </div>
      </div>

      {/* Mobile backdrop */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close menu"
          className="pointer-events-auto md:hidden fixed inset-0 top-0 z-30 bg-background/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}
