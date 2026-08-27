"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function InfiniteMarquee() {
  const items = [
    "HANAKAWADO SUKEROKU",
    "履物の街・浅草",
    "助六夢通り",
    "江戸の伝統 × 現代の感性",
    "TOKYO ASAKUSA",
    "花川戸助六商店街",
  ];

  return (
    <div className="relative w-full py-4 bg-primary text-white overflow-hidden select-none border-y border-white/10 shadow-inner">
      {/* 左右のフェードマスク */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25,
        }}
        className="flex items-center gap-8 whitespace-nowrap will-change-transform font-serif tracking-[0.25em] text-xs sm:text-sm font-semibold"
      >
        {[...items, ...items, ...items, ...items].map((text, i) => (
          <div key={i} className="flex items-center gap-6">
            <span className="opacity-95 drop-shadow-sm">{text}</span>
            <Sparkles size={12} className="text-secondary opacity-80" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
