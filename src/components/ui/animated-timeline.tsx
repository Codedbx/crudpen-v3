"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export interface TimelineEntry {
  step: string;
  title: string;
  description: string;
  tags?: string[];
  estTime?: string;
}

export const AnimatedTimeline = ({
  title,
  description,
  data,
  imageSrc,
}: {
  title: React.ReactNode;
  description: string;
  data: TimelineEntry[];
  imageSrc?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-[#0D0D1A]"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20 py-20 px-6 md:px-8">
        
        {/* Sticky Sidebar */}
        <div className="lg:sticky lg:top-32 lg:h-[calc(100vh-10rem)] lg:w-[40%] flex flex-col gap-6 self-start">
          <h2 className="text-[40px] md:text-[56px] font-bold text-white tracking-tight leading-[1.1]">
            {title}
          </h2>
          <p className="text-[#94A3B8] text-base md:text-lg leading-relaxed max-w-sm mt-2">
            {description}
          </p>
          {imageSrc ? (
            <div className="mt-10 rounded-[16px] overflow-hidden aspect-[4/3] md:aspect-video lg:aspect-[4/3] relative hidden md:block border border-white/5 shadow-[0_0_40px_rgba(108,63,235,0.1)]">
              <Image src={imageSrc} alt="Team Process" fill className="object-cover" />
            </div>
          ) : (
            <div className="mt-10 rounded-[16px] overflow-hidden aspect-[4/3] md:aspect-video lg:aspect-[4/3] relative hidden md:flex items-center justify-center bg-[#13131F] border border-white/5 shadow-[0_0_40px_rgba(108,63,235,0.1)]">
              <span className="text-[#475569] font-medium">Image Placeholder</span>
            </div>
          )}
        </div>

        {/* Timeline Line & Content */}
        <div ref={ref} className="relative lg:w-[60%] pb-20 mt-10 lg:mt-0">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-12 md:pt-24 lg:pt-32 first:pt-0"
            >
              {/* Dot wrapper */}
              <div className="sticky flex z-40 items-center top-40 self-start mt-10 md:mt-12">
                <div className="h-8 w-8 md:h-10 md:w-10 absolute -left-4 md:-left-5 rounded-full bg-[#0D0D1A] flex items-center justify-center">
                  <div className="h-3 w-3 md:h-4 md:w-4 rounded-full bg-[#0D0D1A] border-2 border-[#6C3FEB]" />
                </div>
              </div>

              {/* Card wrapper */}
              <div className="relative pl-8 md:pl-16 w-full">
                <div className="bg-[#13131F] rounded-[20px] p-6 md:p-10 border border-white/5 shadow-xl group hover:border-[#6C3FEB]/40 transition-colors duration-500 relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-[#6C3FEB]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   
                   <div className="relative z-10">
                     <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-6 md:mb-8 gap-4">
                       <h3 className="text-5xl md:text-[80px] font-black text-white/90 tracking-tighter leading-none">
                         {item.step}
                       </h3>
                       {item.estTime && (
                         <div className="text-xs md:text-sm font-medium text-[#94A3B8]">
                           Est Time: <span className="text-white">{item.estTime}</span>
                         </div>
                       )}
                     </div>
                     <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                       {item.title}
                     </h4>
                     <p className="text-[#94A3B8] leading-relaxed mb-8 md:text-lg">
                       {item.description}
                     </p>
                     
                     {item.tags && item.tags.length > 0 && (
                       <div className="flex flex-wrap gap-2 md:gap-3">
                         {item.tags.map((tag, i) => (
                           <span
                             key={i}
                             className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10 text-[11px] md:text-xs font-medium text-[#94A3B8] group-hover:border-[#6C3FEB]/30 group-hover:text-white transition-colors duration-300 whitespace-nowrap"
                           >
                             {tag}
                           </span>
                         ))}
                       </div>
                     )}
                   </div>
                </div>
              </div>
            </div>
          ))}

          {/* Animated Line */}
          <div
            style={{ height: height + "px" }}
            className="absolute left-0 top-0 overflow-hidden w-[2px] bg-white/10 [mask-image:linear-gradient(to_bottom,transparent_0%,black_5%,black_95%,transparent_100%)]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#6C3FEB] via-[#3B82F6] to-transparent rounded-full"
            />
          </div>
        </div>

      </div>
    </div>
  );
};
