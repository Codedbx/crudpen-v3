"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { 
  Trophy, 
  Layers, 
  HeartHandshake, 
  Star 
} from "lucide-react";

const CountUpAnimation = ({ 
  value, 
  duration = 2000,
  delay = 0 
}: { 
  value: string; 
  duration?: number;
  delay?: number;
}) => {
  const [displayValue, setDisplayValue] = useState(value);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/\d/g, '');
  
  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true);
      
      const timer = setTimeout(() => {
        const startTime = Date.now();
        const endTime = startTime + duration;
        
        const updateCount = () => {
          const now = Date.now();
          const progress = Math.min((now - startTime) / duration, 1);
          
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const currentCount = Math.floor(easeOut * numericValue);
          
          setDisplayValue(`${currentCount}${suffix}`);
          
          if (progress < 1) {
            requestAnimationFrame(updateCount);
          } else {
            setDisplayValue(value);
          }
        };
        
        updateCount();
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, isVisible, numericValue, duration, delay, value, suffix]);
  
  return (
    <span ref={ref}>
      {displayValue}
    </span>
  );
};

export const StatsSection = ({
  stats,
}: {
  stats: { value: string; label: string }[];
}) => {
  const statsWithIcons = [
    {
      ...stats[0],
      icon: Trophy,
      gradient: "from-[#6C3FEB]/20 via-[#9333EA]/10 to-transparent",
      iconGradient: "from-[#6C3FEB] to-[#9333EA]"
    },
    {
      ...stats[1], 
      icon: Layers,
      gradient: "from-[#8B5CF6]/20 via-[#C084FC]/10 to-transparent",
      iconGradient: "from-[#8B5CF6] to-[#C084FC]"
    },
    {
      ...stats[2],
      icon: HeartHandshake,
      gradient: "from-[#3B82F6]/20 via-[#6366F1]/10 to-transparent",
      iconGradient: "from-[#3B82F6] to-[#6366F1]"
    },
    {
      ...stats[3],
      icon: Star,
      gradient: "from-[#D946EF]/20 via-[#9333EA]/10 to-transparent",
      iconGradient: "from-[#D946EF] to-[#9333EA]"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {statsWithIcons.map((stat, index) => {
        const IconComponent = stat.icon;
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.2,
              type: "spring",
              stiffness: 80,
              damping: 20
            }}
            whileHover={{ 
              y: -8,
              scale: 1.02,
              rotateY: 2,
              transition: { 
                type: "spring", 
                stiffness: 300,
                damping: 30
              }
            }}
            className="group relative perspective-1000"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Glassmorphism Card */}
            <div className="relative p-6 rounded-[28px] backdrop-blur-[40px] bg-white/[0.05] border border-white/[0.1] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.2)] overflow-hidden transition-all duration-700 group-hover:border-white/[0.2] group-hover:bg-white/[0.08] group-hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_20px_40px_rgba(0,0,0,0.3)]">
              
              {/* Animated Background Blob */}
              <motion.div 
                className={`absolute -top-16 -right-16 w-32 h-32 rounded-full bg-gradient-to-br ${stat.gradient} blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700`}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Floating Particles */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/40 rounded-full"
                    style={{
                      left: `${15 + (i * 12)}%`,
                      top: `${25 + (i * 10)}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0]
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
              
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                animate={{
                  x: ["-200%", "200%"]
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 4
                }}
              />
              
              {/* Glass Inner Border */}
              <div className="absolute inset-[1px] rounded-[31px] bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />
              
              {/* Content Container */}
              <div className="relative flex items-center gap-5">
                {/* Icon Container with 3D Effect */}
                <motion.div
                  whileHover={{ 
                    rotateY: 10, 
                    rotateX: 5,
                    scale: 1.1,
                    z: 20
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200,
                    damping: 20
                  }}
                  className="relative flex-shrink-0 group/icon"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Icon Background Glow */}
                  <motion.div 
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.iconGradient} blur-md opacity-20 group-hover/icon:opacity-40 transition-opacity duration-500`}
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Icon Container */}
                  <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${stat.iconGradient} flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/20`}>
                    <motion.div
                      animate={{
                        rotateY: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <IconComponent className="w-7 h-7 text-white drop-shadow-sm" />
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  {/* Number with Staggered Animation */}
                  <motion.div
                    initial={{ scale: 0, rotateY: -90 }}
                    whileInView={{ scale: 1, rotateY: 0 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 150,
                      damping: 15,
                      delay: index * 0.2 + 0.4
                    }}
                    className="mb-2"
                  >
                    <h3 className="text-4xl md:text-5xl font-black text-white leading-none tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
                      <CountUpAnimation 
                        value={stat.value} 
                        duration={2200}
                        delay={index * 200 + 600}
                      />
                    </h3>
                  </motion.div>
                  
                  {/* Label with Slide Animation */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: index * 0.2 + 0.7,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 120
                    }}
                  >
                    <h4 className="text-sm font-bold text-white/90 uppercase tracking-[0.15em] mb-1 leading-tight mt-1">
                      {stat.label.replace(/^\d+[\+%]?\s*/, '')}
                    </h4>
                  </motion.div>
                </div>
              </div>
              
              {/* Bottom Reflection */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
            </div>
            
            {/* Card Shadow/Glow */}
            <motion.div 
              className={`absolute inset-0 rounded-[32px] bg-gradient-to-br ${stat.iconGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl -z-10`}
              animate={{
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};
