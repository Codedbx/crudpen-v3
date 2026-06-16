"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { AnimatedButton } from "@/components/ui/animated-button";
import { ArrowRight } from "lucide-react";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Ready",
    },
    {
      text: "to",
    },
    {
      text: "start",
    },
    {
      text: "your",
    },
    {
      text: "next",
    },
    {
      text: "big",
    },
    {
      text: "project?",
      className: "text-brand-primary drop-shadow-[0_0_10px_rgba(125,42,232,0.25)]",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center py-24 w-full bg-background relative z-10">
      <p className="text-muted-foreground text-xs sm:text-base uppercase tracking-widest font-bold mb-4">
        Let's work together
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-8">
        <AnimatedButton
          href="/contact"
          variant="primary"
          icon={ArrowRight}
        >
          Get in touch
        </AnimatedButton>
      </div>
    </div>
  );
}
