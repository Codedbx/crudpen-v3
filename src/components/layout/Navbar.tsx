'use strict';
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { DottedGlowBackground } from '@/components/ui/dotted-glow-background';
import { AnimatedButton } from '@/components/ui/animated-button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    if (stored === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    if (typeof window !== 'undefined') localStorage.setItem('theme', newDark ? 'dark' : 'light');
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="relative w-full pt-4 sm:pt-5">
        {/* Dotted glow spans full viewport width (left + right of the pill) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <DottedGlowBackground
            className="pointer-events-none z-0"
            gap={14}
            radius={1.25}
            color="rgba(0,0,0,0.08)"
            darkColor="rgba(255,255,255,0.1)"
            glowColor="rgba(125, 42, 232, 0.4)"
            darkGlowColor="rgba(125, 42, 232, 0.85)"
            opacity={isScrolled ? 0.5 : 0.4}
            speedMin={0.25}
            speedMax={0.75}
          />
        </div>

        <div className="relative z-10 px-4 sm:px-6">
          <div
            className={cn(
              'pointer-events-auto mx-auto max-w-4xl rounded-full transition-all duration-500 ease-out',
              isScrolled ? 'glass-nav overflow-hidden' : 'border border-transparent shadow-none'
            )}
          >
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 px-3 py-2.5 sm:px-5 sm:py-3 md:gap-6">
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

          {/* Desktop Nav — centered */}
          <nav className="hidden md:flex items-center justify-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'text-xs lg:text-sm font-medium transition-colors duration-300 px-3 py-1.5 rounded-full',
                    isActive
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA + theme */}
          <div className="hidden md:flex items-center justify-end gap-2 shrink-0">
            <button
              onClick={toggleTheme}
              aria-label="Toggle light/dark mode"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-foreground/8 hover:bg-foreground/12 transition-colors"
            >
              {isDark ? (
                <Sun className="h-4 w-4 text-foreground" />
              ) : (
                <Moon className="h-4 w-4 text-foreground" />
              )}
            </button>
            <AnimatedButton href="/contact" variant="solid" size="sm" shine={false}>
              Request a Quote
            </AnimatedButton>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden col-start-3 flex items-center justify-center p-2 text-muted-foreground hover:text-foreground focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          </div>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          'pointer-events-auto md:hidden fixed inset-x-4 top-18 rounded-2xl border border-border bg-background/95 backdrop-blur-xl shadow-2xl z-40 transition-all duration-300 ease-out px-5 py-6',
          isOpen
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-2 invisible pointer-events-none'
        )}
      >
        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-base font-medium py-3 px-3 rounded-xl transition-colors',
                  isActive
                    ? 'text-foreground bg-foreground/5'
                    : 'text-muted-foreground hover:text-foreground hover:bg-foreground/5'
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border">
          <button
            onClick={toggleTheme}
            aria-label="Toggle light/dark mode"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-foreground/8 hover:bg-foreground/12 transition-colors"
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-foreground" />
            ) : (
              <Moon className="h-5 w-5 text-foreground" />
            )}
          </button>
          <AnimatedButton
            href="/contact"
            variant="solid"
            size="md"
            fullWidth
            shine={false}
            className="flex-1"
            onClick={() => setIsOpen(false)}
          >
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
