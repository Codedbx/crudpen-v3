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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div
        className={cn(
          "relative w-full transition-all duration-500 ease-out pointer-events-auto border-b border-transparent",
          isScrolled
            ? "glass-nav shadow-sm border-border"
            : "bg-transparent shadow-none",
        )}>
        {/* Dotted background aligned exactly with the navbar */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <DottedGlowBackground
            className="pointer-events-none"
            gap={14}
            radius={1.25}
            color="rgba(0,0,0,0.08)"
            glowColor="rgba(125, 42, 232, 0.4)"
            opacity={isScrolled ? 0.5 : 0.4}
            speedMin={0.25}
            speedMax={0.75}
          />
        </div>

        {/* Full-width container with responsive content padding alignment */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 py-3 md:py-4 md:gap-6">
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

            {/* Desktop Nav — centered with dynamic entrance animation on window load */}
            <nav className="hidden md:flex items-center justify-center gap-1 lg:gap-2 animate-in fade-in slide-in-from-top-4 duration-700 ease-out">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "text-xs lg:text-sm font-medium transition-all duration-300 ease-in-out px-4 py-2 rounded-full transform hover:scale-105 active:scale-95",
                      isActive
                        ? "bg-foreground text-background shadow-md scale-105"
                        : "text-muted-foreground hover:text-foreground hover:bg-foreground/5",
                    )}>
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center justify-end gap-2 shrink-0 animate-in fade-in slide-in-from-top-4 duration-700 ease-out">
              <AnimatedButton
                href="/contact"
                variant="solid"
                size="sm"
                shine={false}>
                Request a Quote
              </AnimatedButton>
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
            onClick={() => setIsOpen(false)}>
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
