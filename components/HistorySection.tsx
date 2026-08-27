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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs tracking-widest uppercase bg-primary/10 text-primary font-semibold mb-3">
            <History size={14} />
            <span>History</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 tracking-wider">
            花川戸の歴史
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
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
