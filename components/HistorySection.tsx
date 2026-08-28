"use client";

import React from "react";
import { motion } from "framer-motion";
import { History, Sparkles } from "lucide-react";

export default function HistorySection() {
  return (
    <section id="history" className="py-24 sm:py-32 bg-[#fdfcfb] relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl -z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full filter blur-3xl -z-0 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.35 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs tracking-widest uppercase bg-primary/10 text-primary font-semibold mb-4"
          >
            <History size={14} />
            <span>History</span>
          </motion.div>

          {/* タイトル：視界に入るたびに広範囲から光粒子がスローに集結し、文字がバウンド着地 */}
          <div className="relative inline-block py-4 px-6">
            {/* スローに集まる和モダン・キラメキパーティクル */}
            <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
              {[
                { x: -140, y: -60, delay: 0.1, size: "w-2.5 h-2.5", color: "bg-amber-400" },
                { x: 130, y: -70, delay: 0.25, size: "w-2 h-2", color: "bg-primary" },
                { x: -160, y: 40, delay: 0.2, size: "w-2 h-2", color: "bg-secondary" },
                { x: 150, y: 50, delay: 0.35, size: "w-2.5 h-2.5", color: "bg-amber-500" },
                { x: -70, y: -90, delay: 0.15, size: "w-1.5 h-1.5", color: "bg-amber-300" },
                { x: 80, y: -85, delay: 0.3, size: "w-2 h-2", color: "bg-primary/70" },
                { x: -80, y: 80, delay: 0.4, size: "w-1.5 h-1.5", color: "bg-secondary/80" },
                { x: 60, y: 75, delay: 0.2, size: "w-2 h-2", color: "bg-amber-400" },
                { x: 0, y: -110, delay: 0.05, size: "w-3 h-3", color: "bg-amber-400" },
                { x: 0, y: 90, delay: 0.45, size: "w-2 h-2", color: "bg-primary" },
              ].map((p, idx) => (
                <motion.span
                  key={idx}
                  initial={{
                    opacity: 0,
                    scale: 0.2,
                    x: p.x * 2.2,
                    y: p.y * 2.2,
                    filter: "blur(8px)"
                  }}
                  whileInView={{
                    opacity: [0, 1, 0.9, 0],
                    scale: [0.2, 1.8, 1.2, 0],
                    x: [p.x * 2.2, p.x * 0.9, p.x * 0.2, 0],
                    y: [p.y * 2.2, p.y * 0.9, p.y * 0.2, 0],
                    filter: ["blur(6px)", "blur(0px)", "blur(1px)", "blur(0px)"]
                  }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{
                    duration: 1.8,
                    delay: p.delay,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`absolute rounded-full ${p.size} ${p.color} shadow-lg shadow-amber-400/30`}
                />
              ))}
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.22em] flex items-center justify-center flex-wrap gap-1.5">
              {"花川戸の歴史".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{
                    opacity: 0,
                    scale: 2.2,
                    filter: "blur(16px)",
                    y: i % 2 === 0 ? -50 : 50,
                    rotate: (i - 2) * 12
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                    y: 0,
                    rotate: 0
                  }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 12,
                    mass: 0.9,
                    delay: 0.25 + i * 0.12,
                  }}
                  className="inline-block relative bg-gradient-to-br from-gray-950 via-gray-800 to-primary bg-clip-text text-transparent drop-shadow-md hover:scale-110 transition-transform duration-300 cursor-default"
                >
                  {char}
                </motion.span>
              ))}
            </h2>
          </div>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 1.0, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-5"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100/80 space-y-6 relative"
        >
          <div className="absolute top-6 right-6 text-secondary/20 hidden sm:block">
            <Sparkles size={48} />
          </div>

          <p className="text-lg sm:text-xl font-medium text-primary leading-relaxed font-serif">
            江戸時代、将軍吉宗が隅田川沿いに桜を植えた「墨堤の桜」で親しまれ、
            その桜並木から「花川戸」の地名が生まれたと言われています。
          </p>

          <div className="border-t border-dashed border-gray-200 pt-6">
            <p className="text-gray-600 leading-loose text-base sm:text-lg font-light">
              浅草寺の東側に位置する江戸時代からの歴史あるエリアです。隅田川沿いの「花川戸」は、歌舞伎『助六由縁江戸桜』の舞台として知られ、江戸の風情を伝える老舗や、かつて履物問屋街として栄えた地。近年は「助六夢通り」として景観整備が行われ、新旧が心地よく交差する街として進化を続けています。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
