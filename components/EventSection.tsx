"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Sparkles } from "lucide-react";

interface EventItem {
  id: string;
  title: string;
  image: string;
  tag: string;
  description: string;
}

export default function EventSection() {
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
            四季折々の風情と活気を感じる、花川戸のイベント
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
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute top-3 right-3 bg-primary/90 text-white text-xs font-semibold px-2.5 py-1 rounded-md backdrop-blur-sm">
                  {event.tag}
                </span>
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
    </section>
  );
}
