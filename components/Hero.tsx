"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const handleScrollDown = () => {
    const historySection = document.querySelector("#history");
    if (historySection) {
      historySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/hero.png')" }}
    >
      {/* Dark Overlay with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

      {/* Hero Content */}
      <div className="relative z-10 px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm tracking-widest uppercase bg-white/10 backdrop-blur-md border border-white/20 text-secondary">
            Asakusa Tokyo
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-widest leading-tight text-white drop-shadow-lg">
            花川戸助六商店街
          </h1>

          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent mx-auto my-4" />

          <p className="text-sm sm:text-base md:text-lg tracking-[0.3em] font-light text-gray-200 uppercase">
            HANAKAWADO SUKEROKU
          </p>

          <p className="text-sm sm:text-base text-gray-300 font-light mt-4 max-w-lg mx-auto">
            履物の街、浅草の粋を歩く。江戸の伝統と現代の感性が息づく商店街。
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={handleScrollDown}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 flex flex-col items-center group cursor-pointer text-gray-300 hover:text-white transition-colors"
          aria-label="下へスクロール"
        >
          <span className="text-xs uppercase tracking-widest mb-2 font-mono">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ChevronDown size={20} className="text-secondary" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
