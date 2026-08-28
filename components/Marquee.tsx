"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Camera } from "lucide-react";

export default function InfiniteMarquee() {
  const textItems = [
    "HANAKAWADO SUKEROKU",
    "履物の街・浅草",
    "助六夢通り",
    "江戸の伝統 × 現代の感性",
    "TOKYO ASAKUSA",
    "花川戸助六商店街",
  ];

  const photos = [
    { src: "/usershare/802424_s.jpg", title: "隅田川テラスの風情" },
    { src: "/usershare/3502601_s.jpg", title: "花川戸の街並み散策" },
    { src: "/usershare/3749292_s.jpg", title: "江戸の伝統工芸・履物" },
    { src: "/usershare/23962364_s.jpg", title: "浅草・助六の情景" },
    { src: "/usershare/28514345_s.jpg", title: "職人技が光る逸品" },
    { src: "/usershare/29064179_s.jpg", title: "四季の賑わいと温もり" },
  ];

  // 途切れることなく一方向に進み続けるインデックスカウンター
  const [slideCount, setSlideCount] = useState(0);

  // 短いストップ時間（2.2秒）でテンポよく次へ進み、戻らずどんどん一方向にループ
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideCount((prev) => prev + 1);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  // 画面幅に応じたカード幅とgapを動的に管理（スマホ：240px + gap 16px = 256px、PC：300px + gap 24px = 324px）
  const [cardStep, setCardStep] = useState(324);

  useEffect(() => {
    const updateCardStep = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 640) {
          // スマホ: w-[240px] + gap-4 (16px) = 256px
          setCardStep(256);
        } else {
          // タブレット/PC: w-[300px] + gap-6 (24px) = 324px
          setCardStep(324);
        }
      }
    };
    updateCardStep();
    window.addEventListener("resize", updateCardStep);
    return () => window.removeEventListener("resize", updateCardStep);
  }, []);

  const currentIndex = slideCount % photos.length;

  return (
    <section className="relative w-full py-8 sm:py-12 bg-primary text-white overflow-hidden select-none border-y border-white/10 shadow-2xl">
      {/* 背景の和モダン装飾グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      {/* 左右のソフトフェードマスク */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-primary to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-primary to-transparent z-20 pointer-events-none" />

      {/* 上部：キーワードテロップ（ゆっくり連続スライド） */}
      <div className="relative mb-6 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
          className="flex items-center gap-8 whitespace-nowrap will-change-transform font-serif tracking-[0.28em] text-xs sm:text-sm font-semibold"
        >
          {[...textItems, ...textItems, ...textItems, ...textItems].map((text, i) => (
            <div key={i} className="flex items-center gap-6">
              <span className="opacity-90 drop-shadow-sm">{text}</span>
              <Sparkles size={12} className="text-secondary opacity-80" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* 中部：スライドギャラリー（途切れることなく一方向に進み続ける無限カルーセル） */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Camera size={14} className="text-secondary" />
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-white/80">
            Hanakawado Moments
          </span>
        </div>

        {/* スライダー本体 */}
        <div className="relative w-full h-[220px] sm:h-[280px] md:h-[320px] overflow-hidden flex items-center justify-center">
          <motion.div
            className="flex items-center gap-4 sm:gap-6 will-change-transform"
            animate={{
              x: `calc(50% - ${(slideCount + 0.5) * cardStep}px)`,
            }}
            transition={{
              duration: 0.85,
              ease: [0.32, 0.72, 0, 1], // なめらかなイーズイン・アウト
            }}
          >
            {/* 常に先頭へ進み続けるため潤沢にリピート配置 */}
            {Array.from({ length: 40 }).map((_, loopIdx) => {
              const photo = photos[loopIdx % photos.length];
              const isCenter = loopIdx === slideCount;

              return (
                <motion.div
                  key={loopIdx}
                  animate={{
                    scale: isCenter ? 1.06 : 0.88,
                    opacity: isCenter ? 1 : 0.4,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative shrink-0 w-[240px] sm:w-[300px] h-[170px] sm:h-[220px] md:h-[250px] rounded-2xl overflow-hidden shadow-2xl border border-white/20 group cursor-pointer"
                >
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 240px, 300px"
                  />
                  {/* 写真のオーバーレイグラデーション＆タイトル */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 transition-opacity duration-300">
                    <p className="text-white text-xs sm:text-sm font-serif font-bold tracking-wider drop-shadow-md">
                      {photo.title}
                    </p>
                    <span className="text-secondary text-[10px] font-mono tracking-widest mt-0.5">
                      #花川戸助六
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ドットインジケーター */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                // 現在の周回を維持したまま対象インデックスへジャンプ
                const currentCycle = Math.floor(slideCount / photos.length);
                setSlideCount(currentCycle * photos.length + i);
              }}
              aria-label={`スライド ${i + 1} を表示`}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === i
                  ? "w-7 h-1.5 bg-secondary shadow-md shadow-secondary/50"
                  : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
