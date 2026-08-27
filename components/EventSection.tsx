"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Sparkles, X, ZoomIn } from "lucide-react";

interface EventItem {
  id: string;
  title: string;
  image: string;
  tag: string;
  description: string;
}

export default function EventSection() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  // ESCキーでモーダルを閉じる
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedEvent(null);
      }
    };
    if (selectedEvent) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedEvent]);

  const events: EventItem[] = [
    {
      id: "hotaru",
      title: "ホタルまつり",
      image: "/assets/01hotaru.png",
      tag: "初夏イベント",
      description: "隅田川の風情とともに、幻想的なホタルの光を楽しむ初夏の風物詩。",
    },
    {
      id: "nouryou",
      title: "納涼まつり",
      image: "/assets/02nouryou.png",
      tag: "夏の風物詩",
      description: "夕涼みとともに商店街の活気を味わう、夏の恒例賑わいイベント。",
    },
    {
      id: "lovelive",
      title: "ラブライブコラボイベント",
      image: "/assets/03lovelive.png",
      tag: "特別企画",
      description: "浅草・花川戸の街並みと人気作品がコラボレーションした特別イベント。",
    },
  ];

  return (
    <section id="event" className="py-24 sm:py-32 bg-[#faf8f5] relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs tracking-widest uppercase bg-primary/10 text-primary font-semibold mb-3">
            <Calendar size={14} />
            <span>Events</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 tracking-wider">
            イベント情報
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
          <p className="text-gray-500 mt-4 text-sm sm:text-base">
            四季折々の風情と活気を感じる、花川戸のイベント（画像をクリックして拡大）
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group"
            >
              <div
                onClick={() => setSelectedEvent(event)}
                className="relative aspect-[1/1.414] w-full overflow-hidden bg-gray-100 cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={`${event.title}の画像を拡大表示`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setSelectedEvent(event);
                  }
                }}
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute top-3 right-3 bg-primary/90 text-white text-xs font-semibold px-2.5 py-1 rounded-md backdrop-blur-sm z-10">
                  {event.tag}
                </span>

                {/* ホバー時の拡大アイコン案内 */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="bg-black/60 text-white px-3 py-1.5 rounded-full text-xs flex items-center gap-1.5 backdrop-blur-sm shadow-md">
                    <ZoomIn size={14} />
                    <span>クリックして拡大</span>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2.5 leading-relaxed">
                    {event.description}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center text-xs text-secondary font-medium gap-1">
                  <Sparkles size={14} />
                  <span>花川戸助六商店街</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* インラインモーダル（ポップアップブロッカーの影響を受けないDOM内オーバーレイ） */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedEvent(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/60 backdrop-blur-xl backdrop-saturate-150 cursor-zoom-out"
          >
            {/* グラスモーフィズム装飾（ほのかな光のグラデーション反射レイヤー） */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/40 pointer-events-none" />

            {/* 閉じるボタン（グラスモーフィズムスタイル） */}
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/90 hover:text-white bg-white/15 hover:bg-white/25 border border-white/20 p-2.5 rounded-full backdrop-blur-md transition-all z-20 shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50 group"
              aria-label="閉じる"
            >
              <X size={24} className="transition-transform group-hover:scale-110" />
            </button>

            {/* モーダル画像コンテンツ（余分な枠なしで画像そのものがポップアップ） */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 10 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              className="relative inline-flex items-center justify-center max-w-[90vw] max-h-[90vh] cursor-default"
            >
              {/* ポスター画像そのもの */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
