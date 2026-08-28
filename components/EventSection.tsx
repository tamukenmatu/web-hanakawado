"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Sparkles, X, ZoomIn, MapPin, Clock, Tag, ArrowUpRight } from "lucide-react";

export interface EventItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  time?: string;
  location: string;
  image: string;
  tag: string;
  description: string;
  highlights: string[];
}

export const INITIAL_EVENTS: EventItem[] = [
  {
    id: "hotaru",
    title: "隅田川ホタルまつり",
    subtitle: "川風に揺れる幻想的な光のシンフォニー",
    date: "2026年 6月20日(土) - 6月21日(日)",
    time: "18:00 〜 21:00",
    location: "隅田公園テラス 〜 助六夢通り特設会場",
    image: "/assets/01hotaru.png",
    tag: "初夏イベント",
    description: "江戸情緒あふれる隅田川沿いの夜風とともに、数千匹のホタルが放つ神秘的な光を愛でる初夏の風物詩。花川戸商店街の特別夜店や限定和菓子、提灯ライトアップが街を彩ります。",
    highlights: ["隅田川テラスのホタル鑑賞ドーム", "助六夢通りの手作り竹灯籠ロード", "商店街限定の夕涼み甘味＆地ビール販売"],
  },
  {
    id: "nouryou",
    title: "花川戸 納涼盆踊り大会",
    subtitle: "老舗の粋と熱気が響き渡る下町の夏",
    date: "2026年 8月8日(土) - 8月9日(日)",
    time: "17:30 〜 21:30",
    location: "花川戸助六夢通り中央広場",
    image: "/assets/02nouryou.png",
    tag: "夏の風物詩",
    description: "浅草寺の東側に位置する花川戸の熱気あふれる夏祭り。伝統の助六太鼓の生演奏に合わせて老若男女が輪になって踊る、江戸っ子の活気と温もりを肌で感じられる二日間です。",
    highlights: ["伝統・助六太鼓の生演奏パフォーマンス", "浴衣でご来場の方へ商店街特製うちわ進呈", "履物問屋による特別サマークリアランス市"],
  },
  {
    id: "hakimono-ichi",
    title: "江戸履物・皮革クラフト市",
    subtitle: "職人の技と現代クリエイターの融合",
    date: "2026年 10月17日(土) - 10月18日(日)",
    time: "10:00 〜 17:00",
    location: "花川戸助六商店街 全域",
    image: "/usershare/3749292_s.jpg",
    tag: "秋の職人市",
    description: "日本有数の靴・履物・皮革問屋街として発展してきた花川戸ならではの特別フェスティバル。熟練職人の実演、オーダーメイド下駄の鼻緒すげ体験、新進気鋭レザー作家の青空マーケットを開催。",
    highlights: ["下駄・草履の「鼻緒すげ」実演＆オーダー会", "東京レザークラフト作家による限定POP-UP", "革のお手入れ・リペア相談ブース"],
  },
  {
    id: "lovelive",
    title: "浅草花川戸 特別コラボレーション",
    subtitle: "歴史ある下町とポップカルチャーの出逢い",
    date: "2026年 11月1日(日) - 11月30日(月)",
    time: "店舗営業時間に準ずる",
    location: "花川戸助六商店街 加盟店舗各所",
    image: "/assets/03lovelive.png",
    tag: "特別企画",
    description: "浅草・花川戸の歴史ある街並みを巡りながら楽しむスタンプラリーや限定ノベルティ配布、商店街オリジナルコラボメニューの提供など、街歩きを満喫できるタイアップ企画。",
    highlights: ["商店街回遊型デジタルスタンプラリー", "加盟飲食店による限定コラボフード・甘味", "オリジナル絵馬・記念グッズの先行販売"],
  },
];

export default function EventSection() {
  const [events, setEvents] = useState<EventItem[]>(INITIAL_EVENTS);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  // ローカルストレージ（管理画面からの更新を模擬）から最新データを反映
  useEffect(() => {
    try {
      const saved = localStorage.getItem("hanakawado_events_data");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setEvents(parsed);
        }
      }
    } catch (e) {
      console.warn(e);
    }
  }, []);

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
            <span>Events & News</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 tracking-wider">
            イベント・歳時記
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
          <p className="text-gray-500 mt-4 text-sm sm:text-base">
            江戸の風情と現代の活気が織りなす、花川戸助六商店街の四季折々の催し
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedEvent(event)}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100/90 flex flex-col sm:flex-row group cursor-pointer"
            >
              {/* アイキャッチ画像（見切れ防止：contain対応＋余白背景） */}
              <div className="relative sm:w-2/5 min-h-[200px] sm:min-h-[220px] aspect-[4/3] sm:aspect-auto overflow-hidden bg-stone-900 shrink-0 flex items-center justify-center">
                {/* 背景ブラー（画像比率が異なる場合の美しい余白埋め） */}
                <Image
                  src={event.image}
                  alt=""
                  fill
                  aria-hidden="true"
                  className="object-cover blur-md opacity-30 scale-110"
                />
                {/* メイン画像（全体が見えるよう contain） */}
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-contain p-1.5 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <span className="absolute top-3 left-3 bg-primary/90 text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full backdrop-blur-sm shadow-sm z-10">
                  {event.tag}
                </span>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-10">
                  <div className="bg-black/70 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1 backdrop-blur-sm shadow-md">
                    <ZoomIn size={12} />
                    <span>詳細を見る</span>
                  </div>
                </div>
              </div>

              {/* 記事情報 */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-primary font-semibold mb-1.5">
                    <Calendar size={13} className="text-secondary" />
                    <span>{event.date}</span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 group-hover:text-primary transition-colors leading-snug">
                    {event.title}
                  </h3>
                  <p className="text-xs text-secondary font-medium mt-1">
                    {event.subtitle}
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm mt-3 leading-relaxed line-clamp-3 font-light">
                    {event.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1 truncate">
                    <MapPin size={13} className="text-primary/70 shrink-0" />
                    <span className="truncate">{event.location}</span>
                  </div>
                  <span className="inline-flex items-center gap-0.5 text-primary font-semibold text-xs shrink-0 group-hover:translate-x-1 transition-transform">
                    詳細 <ArrowUpRight size={13} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* イベント詳細モーダル */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedEvent(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 26, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 relative flex flex-col"
            >
              {/* 閉じるボタン */}
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-3 right-3 z-30 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-sm transition-all shadow-lg"
                aria-label="閉じる"
              >
                <X size={20} />
              </button>

              {/* モーダル画像エリア（見切れなし・全表示） */}
              <div className="relative w-full h-[260px] sm:h-[360px] bg-stone-950 shrink-0 overflow-hidden flex items-center justify-center">
                {/* 背景ブラー */}
                <Image
                  src={selectedEvent.image}
                  alt=""
                  fill
                  aria-hidden="true"
                  className="object-cover blur-lg opacity-35 scale-110"
                />
                {/* メイン画像（完全表示・アスペクト比維持） */}
                <Image
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  fill
                  className="object-contain p-2 z-10 drop-shadow-lg"
                />
              </div>

              {/* モーダルタイトルヘッダー */}
              <div className="bg-primary text-white p-6 border-b border-primary-dark">
                <span className="inline-block bg-secondary text-gray-900 text-xs font-bold px-3 py-0.5 rounded-full mb-2">
                  {selectedEvent.tag}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight drop-shadow-sm">
                  {selectedEvent.title}
                </h3>
                {selectedEvent.subtitle && (
                  <p className="text-secondary-light text-xs sm:text-sm font-medium mt-1">
                    {selectedEvent.subtitle}
                  </p>
                )}
              </div>

              {/* モーダル本文 */}
              <div className="p-6 sm:p-8 space-y-6 flex-1">
                {/* 開催情報カード */}
                <div className="bg-[#faf8f5] rounded-xl p-4 sm:p-5 border border-gray-200/70 space-y-2.5 text-sm">
                  <div className="flex items-center gap-2.5 text-gray-800">
                    <Calendar size={16} className="text-primary shrink-0" />
                    <span className="font-semibold">{selectedEvent.date}</span>
                  </div>
                  {selectedEvent.time && (
                    <div className="flex items-center gap-2.5 text-gray-700">
                      <Clock size={16} className="text-primary shrink-0" />
                      <span>{selectedEvent.time}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2.5 text-gray-700">
                    <MapPin size={16} className="text-primary shrink-0" />
                    <span>{selectedEvent.location}</span>
                  </div>
                </div>

                {/* 本文説明 */}
                <div>
                  <h4 className="font-serif text-base font-bold text-gray-900 mb-2.5 flex items-center gap-2">
                    <Sparkles size={16} className="text-secondary" />
                    <span>イベント概要</span>
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-light">
                    {selectedEvent.description}
                  </p>
                </div>

                {/* 見どころハイライト */}
                {selectedEvent.highlights && selectedEvent.highlights.length > 0 && (
                  <div>
                    <h4 className="font-serif text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Tag size={16} className="text-primary" />
                      <span>主な見どころ・企画</span>
                    </h4>
                    <ul className="space-y-2">
                      {selectedEvent.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-100">
                          <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                            {i + 1}
                          </span>
                          <span className="leading-snug">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* モーダルフッター */}
              <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-100 flex justify-end">
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="px-6 py-2.5 bg-gray-800 hover:bg-gray-900 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  閉じる
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
