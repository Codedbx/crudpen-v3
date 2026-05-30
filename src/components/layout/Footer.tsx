'use strict';
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Github, Twitter, Linkedin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/30 border-t border-border pt-20 pb-10 w-full mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Crudpen Logo"
                width={130}
                height={31}
                className="h-8 w-auto transition-transform duration-300 hover:scale-[1.02]"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mt-2">
              Engineering premium digital products and robust custom software solutions. Turn your vision into scalable reality.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="#"
                className="h-8 w-8 rounded-full bg-foreground/5 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="h-8 w-8 rounded-full bg-foreground/5 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="h-8 w-8 rounded-full bg-foreground/5 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-5">
              Pages
            </h3>
            <ul className="space-y-3.5">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-5">
              Contact
            </h3>
            <ul className="space-y-3.5">
              <li className="text-sm text-muted-foreground">
                <span className="block text-muted-foreground/80 text-xs">Email</span>
                hello@crudpen.com
              </li>
              <li className="text-sm text-muted-foreground">
                <span className="block text-muted-foreground/80 text-xs">Headquarters</span>
                London, United Kingdom
              </li>
            </ul>
          </div>

          {/* Newsletter / Call To Action */}
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-5">
              Stay Updated
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Subscribe to our newsletter to receive the latest updates in technology and engineering.
            </p>
            <form className="relative flex items-center" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-foreground/5 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary/30 transition-colors duration-300 text-foreground placeholder-muted-foreground pr-12"
              />
              <button
                type="submit"
                className="absolute right-1.5 p-2 bg-brand-primary text-black rounded-lg hover:bg-brand-primary-hover transition-colors duration-300"
                aria-label="Subscribe"
              >
                <ArrowRight className="h-3.5 w-3.5 shrink-0" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Crudpen. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Huge outline background branding text */}
        <div className="w-full text-center mt-12 select-none overflow-hidden h-[80px] sm:h-[120px] md:h-[160px] flex items-center justify-center pointer-events-none">
          <span className="text-[12vw] font-black tracking-[0.2em] text-stroke-3d uppercase opacity-35 leading-none">
            TECHNEO
          </span>
        </div>
      </div>
    </footer>
  );
}
