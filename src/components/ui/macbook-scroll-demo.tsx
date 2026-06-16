import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { Code2 } from "lucide-react";

export function MacbookScrollDemo() {
  return (
    <div className="w-full overflow-hidden bg-transparent pb-20">
      <MacbookScroll
        title={
          <div className="text-[#0D0D1A] dark:text-white text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-center max-w-5xl mx-auto">
            <span className="font-serif italic font-light opacity-90 block mb-2 md:mb-0">Building highly scalable products.</span>
            <span className="font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#6C3FEB] via-[#9333EA] to-[#c084fc] block">
              The Crudpen Way.
            </span>
          </div>
        }
        badge={
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#6C3FEB] to-[#9333EA] flex items-center justify-center text-white shadow-[0_4px_15px_rgba(108,63,235,0.4)]">
            <Code2 className="h-6 w-6" />
          </div>
        }
        src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200`}
        showGradient={false}
      />
    </div>
  );
}
