'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Play, Sparkles, TrendingUp } from 'lucide-react';
export function HeroMediaShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-5xl px-4 md:px-0 mb-16 relative group"
    >
      {/* Ambient glow behind frame */}
      <div
        aria-hidden
        className="absolute -inset-6 md:-inset-8 rounded-[2.5rem] bg-brand-primary/25 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -left-8 top-1/4 h-32 w-32 rounded-full bg-brand-primary/20 blur-2xl animate-pulse-slow pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -right-6 bottom-1/4 h-40 w-40 rounded-full bg-brand-primary/15 blur-3xl pointer-events-none"
      />

      {/* Gradient border frame */}
      <div className="relative rounded-[1.75rem] p-[1px] bg-gradient-to-br from-brand-primary/70 via-brand-primary/25 to-brand-primary/5 shadow-[0_20px_60px_rgba(125,42,232,0.18)]">
        <div className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[2/1] rounded-[calc(1.75rem-1px)] overflow-hidden bg-card">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2400&auto=format&fit=crop"
            alt="Crudpen team collaborating on digital products"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px"
            className="object-cover object-center scale-100 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />

          {/* Cinematic overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/30 via-brand-primary/5 to-transparent mix-blend-overlay" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 dark:ring-white/15" />

          {/* Top shine */}
          <div
            aria-hidden
            className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"
          />

          {/* Floating stat — top left */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute top-4 left-4 md:top-5 md:left-5 z-20"
          >
            <div className="glass-nav flex items-center gap-2.5 rounded-full px-3 py-2 md:px-4 md:py-2.5 border border-white/10 shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[10px] md:text-xs font-semibold text-foreground whitespace-nowrap">
                50+ active builds
              </span>
            </div>
          </motion.div>

          {/* Floating stat — bottom right */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            className="absolute bottom-4 right-4 md:bottom-5 md:right-5 z-20"
          >
            <div className="glass-nav flex items-center gap-2 rounded-2xl px-3 py-2.5 md:px-4 border border-white/10 shadow-lg">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary/20 text-brand-primary">
                <TrendingUp className="h-4 w-4" />
              </div>
              <div className="text-left">
                <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-bold">
                  Delivery rate
                </p>
                <p className="text-sm font-black text-foreground leading-none">98.5%</p>
              </div>
            </div>
          </motion.div>

          {/* Floating badge — top right */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="absolute top-4 right-4 md:top-5 md:right-5 z-20 hidden sm:flex"
          >
            <div className="flex items-center gap-1.5 rounded-full bg-brand-primary px-3 py-1.5 text-[10px] font-bold text-black shadow-[0_0_20px_rgba(125,42,232,0.4)]">
              <Sparkles className="h-3 w-3" />
              Premium builds
            </div>
          </motion.div>

          {/* Play control */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <motion.div
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
            >
              <Link
                href="/projects"
                aria-label="Explore our work"
                className="relative flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-brand-primary text-black shadow-[0_0_40px_rgba(125,42,232,0.55)] group/play"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full border-2 border-brand-primary/50 animate-ping opacity-40"
                />
                <span
                  aria-hidden
                  className="absolute -inset-2 rounded-full bg-brand-primary/25 blur-xl group-hover/play:bg-brand-primary/40 transition-colors"
                />
                <Play className="relative h-7 w-7 md:h-8 md:w-8 fill-current translate-x-0.5" />
              </Link>
            </motion.div>
          </div>

          {/* Bottom caption strip */}
          <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between gap-4 px-4 py-3 md:px-6 md:py-4 bg-gradient-to-t from-background/95 to-background/40 backdrop-blur-[2px]">
            <p className="text-[10px] md:text-xs font-medium text-muted-foreground text-left max-w-[70%]">
              Strategy, design & engineering — shipped as one seamless product experience.
            </p>
            <span className="hidden md:inline text-[10px] font-bold uppercase tracking-widest text-brand-primary shrink-0">
              Watch reel
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
