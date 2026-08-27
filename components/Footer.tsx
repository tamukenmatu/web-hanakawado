"use client";

import React from "react";
import { ChevronUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#181818] text-gray-400 py-16 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold text-white tracking-widest mb-2">
              花川戸助六商店街
            </h3>
            <p className="text-xs text-gray-500 tracking-wider">
              東京都台東区浅草 花川戸
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            <a href="#history" className="hover:text-secondary transition-colors">
              歴史
            </a>
            <a href="#categories" className="hover:text-secondary transition-colors">
              魅力
            </a>
            <a href="#event" className="hover:text-secondary transition-colors">
              イベント
            </a>
            <a href="#map" className="hover:text-secondary transition-colors">
              加盟店
            </a>
            <a href="#contact" className="hover:text-secondary transition-colors">
              お問い合わせ
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="ページトップへ戻る"
          >
            <ChevronUp size={20} />
          </button>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Hanakawado Sukeroku Shotengai. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#contact" className="hover:underline">
              お問い合わせ
            </a>
            <a href="#" className="hover:underline">
              プライバシーポリシー
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
