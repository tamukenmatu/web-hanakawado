"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  ExternalLink,
  Instagram,
  Globe,
  Twitter,
} from "lucide-react";

interface Store {
  number: number;
  name: string;
  url?: string;
  linkType?: "web" | "instagram" | "twitter";
  category: "food" | "goods" | "service";
}

export default function MapSection() {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "food" | "goods" | "service"
  >("all");

  const stores: Store[] = [
    {
      number: 1,
      name: "まるごとVeganダイニング浅草",
      url: "https://marugotovegan.com/",
      linkType: "web",
      category: "food",
    },
    {
      number: 2,
      name: "Asakusa 器カフェ シノワズリ",
      url: "https://shinowazuri.info/",
      linkType: "web",
      category: "food",
    },
    {
      number: 3,
      name: "SUKE6 DINER",
      url: "https://suke6diner.com/",
      linkType: "web",
      category: "food",
    },
    {
      number: 4,
      name: "cacom",
      url: "https://cacom.owst.jp/",
      linkType: "web",
      category: "food",
    },
    {
      number: 5,
      name: "レオニダス 浅草店 カフェリオン",
      url: "https://www.leonidas-alex.jp/shops/3390.html",
      linkType: "web",
      category: "food",
    },
    {
      number: 7,
      name: "昆布の川ひと",
      url: "https://www.kombu-kawahito.net/",
      linkType: "web",
      category: "food",
    },
    {
      number: 8,
      name: "ステラ薬局",
      url: "https://www.aspire-pharmacy.com/shop/",
      linkType: "web",
      category: "service",
    },
    {
      number: 9,
      name: "タナゴコロ.",
      url: "https://www.instagram.com/tanagocoro.onigirazu/",
      linkType: "instagram",
      category: "food",
    },
    {
      number: 10,
      name: "風雷庵",
      url: "https://x.com/Fuuraian_Soba",
      linkType: "twitter",
      category: "food",
    },
    {
      number: 11,
      name: "ぼたん",
      url: "https://www.instagram.com/botan_1948/",
      linkType: "instagram",
      category: "goods",
    },
    {
      number: 12,
      name: "cotori-jewelry",
      url: "https://cotori-jewelry.com/",
      linkType: "web",
      category: "goods",
    },
    {
      number: 13,
      name: "カフェ マンマナターレ",
      url: "http://mammanatale.com/",
      linkType: "web",
      category: "food",
    },
    {
      number: 14,
      name: "雷一茶本店",
      url: "https://kaminari-issa.com/",
      linkType: "web",
      category: "food",
    },
    {
      number: 15,
      name: "とんかつ はせ川",
      category: "food",
    },
    {
      number: 17,
      name: "市原商店 浅草ミルクレープ",
      url: "https://www.instagram.com/asakusa_sweets/",
      linkType: "instagram",
      category: "food",
    },
    {
      number: 18,
      name: "浅草飴加工アメシン花川戸店",
      url: "http://www.ame-shin.com/",
      linkType: "web",
      category: "goods",
    },
    {
      number: 19,
      name: "ノイチハ",
      url: "https://noichiha.jp/",
      linkType: "web",
      category: "goods",
    },
    {
      number: 20,
      name: "だいにんぐ 彩",
      url: "https://dining-sai.com/",
      linkType: "web",
      category: "food",
    },
    {
      number: 21,
      name: "手織り体験 おりなみ",
      url: "https://www.instagram.com/orinami_asakusa/",
      linkType: "web",
      category: "service",
    },
    {
      number: 22,
      name: "観光人力車福ろう屋",
      url: "https://fukurouya.co.jp/",
      linkType: "web",
      category: "service",
    },
    {
      number: 23,
      name: "着物レンタル 綾花",
      url: "https://www.instagram.com/rental_kimono_ayaka_asakusa/",
      linkType: "instagram",
      category: "service",
    },
    {
      number: 25,
      name: "う布ふ Plus",
      url: "https://www.instagram.com/asakusa.ufufuplus/",
      linkType: "web",
      category: "goods",
    },
  ];

  const filteredStores = stores.filter((store) => {
    if (activeCategory === "all") return true;
    return store.category === activeCategory;
  });

  const getLinkIcon = (type?: "web" | "instagram" | "twitter") => {
    switch (type) {
      case "instagram":
        return <Instagram size={16} className="text-pink-600" />;
      case "twitter":
        return <Twitter size={16} className="text-blue-400" />;
      default:
        return <Globe size={16} className="text-gray-500" />;
    }
  };

  return (
    <section id="map" className="py-24 sm:py-32 bg-white relative">
      <div id="access" className="scroll-mt-24" />
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs tracking-widest uppercase bg-primary/10 text-primary font-semibold mb-3">
            <MapPin size={14} />
            <span>Shop Map</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 tracking-wider">
            加盟店一覧 & マップ
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
          <p className="text-gray-500 mt-4 text-sm sm:text-base">
            花川戸助六商店街の個性豊かな店舗をご紹介します
          </p>
        </motion.div>

        {/* Map Image Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 mb-14 bg-gray-50"
        >
          <div className="relative aspect-[16/9] w-full max-h-[500px]">
            <Image
              src="/assets/map.png"
              alt="花川戸助六商店街 加盟店マップ"
              fill
              className="object-contain"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {[
            { id: "all", label: "すべての店舗" },
            { id: "food", label: "飲食・カフェ" },
            { id: "goods", label: "雑貨・工芸・履物" },
            { id: "service", label: "体験・サービス" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 z-10 ${
                activeCategory === tab.id
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-900 bg-gray-100/80 hover:bg-gray-200/80"
              }`}
            >
              {activeCategory === tab.id && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-primary rounded-full -z-10 shadow-md shadow-primary/30"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Store Grid with Framer Motion Layout Animation */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredStores.map((store) => {
              const hasLink = !!store.url;
              const cardInner = (
                <div
                  className={`p-4 rounded-xl border transition-all duration-300 flex items-center justify-between gap-3 h-full ${
                    hasLink
                      ? "bg-white hover:border-primary/40 hover:shadow-lg hover:-translate-y-0.5 border-gray-200/90 cursor-pointer group"
                      : "bg-gray-50/80 border-gray-200 text-gray-400"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-transform group-hover:scale-110 ${
                        store.number === 25
                          ? "bg-blue-100 text-blue-800"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      {store.number}
                    </span>
                    <span
                      className={`text-sm font-medium truncate ${
                        hasLink
                          ? "text-gray-800 group-hover:text-primary transition-colors"
                          : "text-gray-600"
                      }`}
                    >
                      {store.name}
                    </span>
                  </div>

                  {hasLink && (
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="p-1.5 rounded-full bg-gray-50 group-hover:bg-primary/10 transition-colors">
                        {getLinkIcon(store.linkType)}
                      </span>
                      <ExternalLink
                        size={14}
                        className="text-gray-400 group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0"
                      />
                    </div>
                  )}
                </div>
              );

              return (
                <motion.div
                  layout
                  key={store.number}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  {hasLink ? (
                    <a
                      href={store.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full focus:outline-none"
                    >
                      {cardInner}
                    </a>
                  ) : (
                    cardInner
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
