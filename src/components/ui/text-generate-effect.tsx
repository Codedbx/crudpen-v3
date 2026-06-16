"use client";
import React, { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    let inGradient = false;
    let inPurple = false;

    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          if (word === "<br/>") {
            return <br key={`br-${idx}`} className="block md:hidden" />;
          }
          if (word === "<br-desktop/>") {
            return <br key={`br-${idx}`} className="hidden md:block" />;
          }
          if (word === "<br-all/>") {
            return <br key={`br-${idx}`} />;
          }

          let displayWord = word;

          // Handle gradient tags
          if (displayWord.startsWith("<gradient>")) {
            displayWord = displayWord.replace("<gradient>", "");
            inGradient = true;
          }
          if (displayWord.endsWith("</gradient>")) {
            displayWord = displayWord.replace("</gradient>", "");
            inGradient = false;
          }

          // Handle purple tags
          if (displayWord.startsWith("<purple>")) {
            displayWord = displayWord.replace("<purple>", "");
            inPurple = true;
          }
          const currentIsPurple = inPurple;
          const currentIsGradient = inGradient && !inPurple;

          if (displayWord.endsWith("</purple>")) {
            displayWord = displayWord.replace("</purple>", "");
            inPurple = false;
          }

          return (
            <React.Fragment key={word + idx}>
              <motion.span
                className={cn(
                  "opacity-0 inline-block",
                  currentIsGradient && "text-transparent bg-clip-text bg-gradient-to-r from-[#6C3FEB] via-[#9333EA] to-[#c084fc]",
                  currentIsPurple && "text-[#a855f7]"
                )}
                style={{
                  filter: filter ? "blur(10px)" : "none",
                }}
              >
                {displayWord}
              </motion.span>
              {" "}
            </React.Fragment>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={className}>
      <div>
        <div>
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
