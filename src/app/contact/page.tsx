'use strict';
'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react';
import { AnimatedButton } from '@/components/ui/animated-button';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full flex flex-col items-center min-h-screen relative overflow-hidden">
      {/* Background Luminous Streaks */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Hero Header */}
      <section className="relative w-full max-w-7xl mx-auto px-6 md:px-8 pt-20 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-xs text-brand-primary font-medium mb-6">
          <Sparkles className="h-3 w-3" />
          <span>Ready to build your next system?</span>
        </div>
        
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
          Start a <span className="text-brand-primary drop-shadow-[0_0_15px_rgba(125, 42, 232,0.25)]">Project</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
          Tell us about your technical requirements. We will review it and get back to you with an estimate within 24 hours.
        </p>
      </section>

      {/* Main Grid Contact */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-8 pb-32 grid grid-cols-1 md:grid-cols-5 gap-12 mt-8 z-10">
        {/* Info Column */}
        <div className="md:col-span-2 flex flex-col gap-8 justify-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              Connect with <span className="text-brand-primary">Crudpen</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed font-light">
              Have questions about our technology choices, development processes, or custom pricing estimates? Our engineers are here to support your team.
            </p>
          </div>

          <div className="space-y-6 mt-4">
            <div className="flex items-center gap-4 group">
              <div className="h-12 w-12 rounded-xl bg-brand-primary/5 border border-brand-primary/10 flex items-center justify-center text-brand-primary shadow-[0_0_15px_rgba(125, 42, 232,0.05)] group-hover:border-brand-primary/30 group-hover:shadow-[0_0_20px_rgba(125, 42, 232,0.15)] transition-all duration-300">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-muted-foreground text-xs font-semibold uppercase tracking-wider">Email Us</span>
                <span className="text-foreground/90 text-sm font-medium hover:text-brand-primary transition-colors cursor-pointer">hello@crudpen.com</span>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="h-12 w-12 rounded-xl bg-brand-primary/5 border border-brand-primary/10 flex items-center justify-center text-brand-primary shadow-[0_0_15px_rgba(125, 42, 232,0.05)] group-hover:border-brand-primary/30 group-hover:shadow-[0_0_20px_rgba(125, 42, 232,0.15)] transition-all duration-300">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-muted-foreground text-xs font-semibold uppercase tracking-wider">Headquarters</span>
                <span className="text-foreground/90 text-sm font-medium">London, United Kingdom</span>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="h-12 w-12 rounded-xl bg-brand-primary/5 border border-brand-primary/10 flex items-center justify-center text-brand-primary shadow-[0_0_15px_rgba(125, 42, 232,0.05)] group-hover:border-brand-primary/30 group-hover:shadow-[0_0_20px_rgba(125, 42, 232,0.15)] transition-all duration-300">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-muted-foreground text-xs font-semibold uppercase tracking-wider">Call Us</span>
                <span className="text-foreground/90 text-sm font-medium hover:text-brand-primary transition-colors cursor-pointer">+44 (0) 20 7946 0958</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="md:col-span-3 glass-glow rounded-3xl p-8 md:p-10 border border-brand-primary/15 relative overflow-hidden">
          <div className="diagonal-streak opacity-40 top-0 left-0" />
          
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-fade-in">
              <div className="h-20 w-20 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-6 border border-brand-primary/20 shadow-[0_0_30px_rgba(125, 42, 232,0.15)]">
                <Send className="h-8 w-8 animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Message Dispatched</h3>
              <p className="text-muted-foreground text-sm max-w-sm font-light leading-relaxed">
                Thank you for reaching out! A Crudpen engineering consultant will analyze your details and contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full bg-card border border-border rounded-xl px-4 py-3.5 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/20 transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full bg-card border border-border rounded-xl px-4 py-3.5 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/20 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="project" className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  Project Type
                </label>
                <div className="relative">
                  <select
                    id="project"
                    className="w-full bg-card border border-border rounded-xl px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/20 transition-all duration-300 cursor-pointer appearance-none"
                  >
                    <option className="bg-card">Custom Web Development</option>
                    <option className="bg-card">Mobile Application</option>
                    <option className="bg-card">Cloud Migration & DevOps</option>
                    <option className="bg-card">Artificial Intelligence Integration</option>
                    <option className="bg-card">Design Systems / Consultation</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-muted-foreground">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  Project Outline
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Outline your requirements, budget, or timeline ideas"
                  className="w-full bg-card border border-border rounded-xl px-4 py-3.5 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/20 transition-all duration-300 resize-none"
                />
              </div>

              <AnimatedButton
                type="submit"
                variant="primary"
                size="lg"
                radius="xl"
                fullWidth
                icon={Send}
                glow
              >
                Send Request
              </AnimatedButton>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

