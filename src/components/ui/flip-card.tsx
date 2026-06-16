"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FlipCard = ({
  front,
  back,
  className,
}: {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={cn("group relative w-full h-full cursor-pointer", className)}
      style={{ perspective: "1000px" }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 w-full h-full z-10"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          {front}
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {back}
        </div>
      </motion.div>
    </div>
  );
};
