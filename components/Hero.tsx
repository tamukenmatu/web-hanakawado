"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

export default function Hero() {
  const handleScrollDown = () => {
    const historySection = document.querySelector("#history");
    if (historySection) {
      historySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 蛍・和の揺らぎパーティクル
  const particles = [
    { x: "15%", y: "25%", size: 4, duration: 6, delay: 0 },
    { x: "80%", y: "20%", size: 6, duration: 7, delay: 1 },
    { x: "25%", y: "70%", size: 5, duration: 5.5, delay: 0.5 },
    { x: "70%", y: "65%", size: 4, duration: 8, delay: 2 },
    { x: "50%", y: "40%", size: 6, duration: 6.5, delay: 1.5 },
    { x: "88%", y: "80%", size: 3, duration: 7.5, delay: 0.8 },
  ];

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[640px] flex items-center justify-center text-center text-white overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/hero.png')" }}
    >
      {/* グラス＆ダークオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/75" />

      {/* 浮遊する蛍の光 / アンビエントパーティクル */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.2, scale: 0.8 }}
          animate={{
            y: [-15, 15, -15],
            x: [-10, 10, -10],
            opacity: [0.3, 0.85, 0.3],
            scale: [1, 1.4, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: p.duration,
            delay: p.delay,
            ease: "easeInOut",
          }}
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
          }}
          className="absolute rounded-full bg-secondary/80 shadow-[0_0_15px_rgba(212,175,55,0.9)] pointer-events-none z-10"
        />
      ))}

      {/* Hero Content */}
      <div className="relative z-10 px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-5"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm tracking-widest uppercase bg-white/10 backdrop-blur-md border border-white/20 text-secondary shadow-lg"
          >
            <Sparkles size={14} className="text-secondary" />
            <span>Asakusa Tokyo</span>
          </motion.div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-widest leading-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
            花川戸助六商店街
          </h1>

          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent mx-auto my-4" />

          <p className="text-xs sm:text-sm md:text-base tracking-[0.35em] font-light text-gray-200 uppercase">
            HANAKAWADO SUKEROKU
          </p>

          <p className="text-sm sm:text-base text-gray-200/90 font-light mt-4 max-w-lg mx-auto leading-relaxed drop-shadow">
            履物の街、浅草の粋を歩く。<br className="block sm:hidden" />江戸の伝統と現代の感性が息づく商店街。
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator (以前のデザイン：縦ラインアニメーション付き) */}
      <motion.button
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center group cursor-pointer text-gray-300 hover:text-white transition-colors"
        aria-label="下へスクロール"
      >
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] mb-2 font-mono opacity-80 group-hover:opacity-100 transition-opacity">
          Scroll
        </span>
        <div className="w-[1px] h-8 sm:h-10 bg-white/30 relative overflow-hidden rounded-full">
          <motion.div
            className="w-full h-full bg-secondary"
            animate={{ y: ["-100%", "100%"] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.button>
    </section>
  );
}
