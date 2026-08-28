"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { INITIAL_EVENTS, EventItem } from "@/components/EventSection";
import { Plus, Trash2, Edit3, ArrowLeft, Save, Sparkles, Calendar, MapPin, Tag } from "lucide-react";

export default function AdminMockPage() {
  const [events, setEvents] = useState<EventItem[]>(INITIAL_EVENTS);
  const [editingEvent, setEditingEvent] = useState<EventItem | null>(null);
  const [savedNotice, setSavedNotice] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("hanakawado_events_data");
      if (saved) {
        setEvents(JSON.parse(saved));
      }
    } catch (e) {
      console.warn(e);
    }
  }, []);

  const handleSaveToStorage = (updated: EventItem[]) => {
    setEvents(updated);
    localStorage.setItem("hanakawado_events_data", JSON.stringify(updated));
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2500);
  };

  const handleDelete = (id: string) => {
    if (confirm("このイベント記事を削除しますか？")) {
      const updated = events.filter((e) => e.id !== id);
      handleSaveToStorage(updated);
      if (editingEvent?.id === id) setEditingEvent(null);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingEvent) return;

    let updated: EventItem[];
    const exists = events.some((item) => item.id === editingEvent.id);
    if (exists) {
      updated = events.map((item) => (item.id === editingEvent.id ? editingEvent : item));
    } else {
      updated = [editingEvent, ...events];
    }

    handleSaveToStorage(updated);
    setEditingEvent(null);
  };

  const handleAddNew = () => {
    const newId = "event-" + Date.now();
    setEditingEvent({
      id: newId,
      title: "",
      subtitle: "",
      date: "2026年 ○月○日(土)",
      time: "10:00 〜 17:00",
      location: "花川戸助六商店街 特設会場",
      image: "/assets/01hotaru.png",
      tag: "季節の催し",
      description: "",
      highlights: ["見どころ・企画のポイント1", "見どころ・企画のポイント2"],
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6 sm:p-10 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* ヘッダーナビ */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-6">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-sky-400 rounded-lg transition-colors"
            >
              <ArrowLeft size={14} />
              <span>本番サイトへ戻る</span>
            </Link>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold font-serif text-white flex items-center gap-2">
                <Sparkles size={20} className="text-amber-400" />
                <span>花川戸助六商店街 CMS 管理パネル (モック)</span>
              </h1>
              <p className="text-xs text-slate-400 mt-1">
                イベント記事の追加・編集・即時プレビューが行える管理画面モック
              </p>
            </div>
          </div>

          <button
            onClick={handleAddNew}
            className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-lg text-xs sm:text-sm shadow-lg shadow-sky-500/20 transition-all"
          >
            <Plus size={16} />
            <span>新規イベントを追加</span>
          </button>
        </div>

        {savedNotice && (
          <div className="p-3 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 rounded-lg text-sm flex items-center gap-2 animate-bounce">
            <span>✨ 変更がローカル保存され、本番サイトのイベント欄に即時反映されました！</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 左側：登録済みイベント一覧 */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-2">
              <Calendar size={15} className="text-sky-400" />
              <span>登録中イベント一覧 ({events.length}件)</span>
            </h2>

            <div className="space-y-3">
              {events.map((item) => (
                <div
                  key={item.id}
                  className={`p-3.5 rounded-xl border transition-all ${
                    editingEvent?.id === item.id
                      ? "bg-slate-800 border-sky-500 shadow-md"
                      : "bg-slate-800/60 border-slate-750 hover:border-slate-600"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {/* サムネイル画像（見切れ防止・全体表示） */}
                    <div className="relative w-16 h-14 rounded-lg overflow-hidden bg-slate-950 shrink-0 border border-slate-700 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt=""
                        className="w-full h-full object-contain p-0.5"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-sky-500/20 text-sky-300">
                        {item.tag}
                      </span>
                      <h3 className="font-bold text-sm text-white mt-1 leading-snug truncate">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5 truncate">{item.date}</p>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => setEditingEvent(item)}
                        className="p-1.5 bg-slate-700 hover:bg-slate-600 rounded text-slate-200 text-xs"
                        title="編集"
                      >
                        <Edit3 size={14} />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-1.5 bg-rose-500/20 hover:bg-rose-500/30 text-rose-400 rounded text-xs"
                        title="削除"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 右側：記事の編集・作成フォーム */}
          <div className="lg:col-span-7">
            {editingEvent ? (
              <form
                onSubmit={handleFormSubmit}
                className="bg-slate-800 border border-slate-700 rounded-2xl p-6 sm:p-8 space-y-5"
              >
                <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                  <h3 className="font-bold text-base text-white flex items-center gap-2">
                    <Edit3 size={16} className="text-sky-400" />
                    <span>イベント記事の編集</span>
                  </h3>
                  <button
                    type="button"
                    onClick={() => setEditingEvent(null)}
                    className="text-xs text-slate-400 hover:text-slate-200"
                  >
                    キャンセル
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs text-slate-300 font-medium">イベント名（タイトル）</label>
                    <input
                      type="text"
                      required
                      value={editingEvent.title}
                      onChange={(e) => setEditingEvent({ ...editingEvent, title: e.target.value })}
                      placeholder="例: 隅田川ホタルまつり"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-slate-300 font-medium">サブタイトル（キャッチ）</label>
                    <input
                      type="text"
                      value={editingEvent.subtitle}
                      onChange={(e) => setEditingEvent({ ...editingEvent, subtitle: e.target.value })}
                      placeholder="例: 川風に揺れる幻想的な光のシンフォニー"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs text-slate-300 font-medium">開催日程</label>
                    <input
                      type="text"
                      value={editingEvent.date}
                      onChange={(e) => setEditingEvent({ ...editingEvent, date: e.target.value })}
                      placeholder="例: 2026年 6月20日(土)"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-slate-300 font-medium">開催時間</label>
                    <input
                      type="text"
                      value={editingEvent.time || ""}
                      onChange={(e) => setEditingEvent({ ...editingEvent, time: e.target.value })}
                      placeholder="例: 18:00 〜 21:00"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-slate-300 font-medium">カテゴリータグ</label>
                    <input
                      type="text"
                      value={editingEvent.tag}
                      onChange={(e) => setEditingEvent({ ...editingEvent, tag: e.target.value })}
                      placeholder="例: 初夏イベント"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-slate-300 font-medium">開催場所</label>
                  <input
                    type="text"
                    value={editingEvent.location}
                    onChange={(e) => setEditingEvent({ ...editingEvent, location: e.target.value })}
                    placeholder="例: 隅田公園テラス 〜 助六夢通り特設会場"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-slate-300 font-medium">アイキャッチ画像選択 & プレビュー（見切れなし）</label>
                  <select
                    value={editingEvent.image}
                    onChange={(e) => setEditingEvent({ ...editingEvent, image: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-sky-500"
                  >
                    <option value="/assets/01hotaru.png">ホタルまつり画像 (/assets/01hotaru.png)</option>
                    <option value="/assets/02nouryou.png">納涼まつり画像 (/assets/02nouryou.png)</option>
                    <option value="/assets/03lovelive.png">コラボ画像 (/assets/03lovelive.png)</option>
                    <option value="/usershare/3749292_s.jpg">伝統履物 (/usershare/3749292_s.jpg)</option>
                    <option value="/usershare/802424_s.jpg">隅田川テラス (/usershare/802424_s.jpg)</option>
                    <option value="/usershare/23962364_s.jpg">浅草情景 (/usershare/23962364_s.jpg)</option>
                  </select>

                  {/* フォーム内プレビュー（全体が欠けずに表示される） */}
                  <div className="relative w-full h-40 bg-slate-950 rounded-lg border border-slate-700 overflow-hidden flex items-center justify-center p-2">
                    <img
                      src={editingEvent.image}
                      alt="プレビュー"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-slate-300 font-medium">イベント説明文</label>
                  <textarea
                    rows={4}
                    value={editingEvent.description}
                    onChange={(e) => setEditingEvent({ ...editingEvent, description: e.target.value })}
                    placeholder="イベントの趣旨や詳細内容を入力..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-sky-500 leading-relaxed"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-3 border-t border-slate-700">
                  <button
                    type="button"
                    onClick={() => setEditingEvent(null)}
                    className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-xs font-semibold text-slate-200"
                  >
                    キャンセル
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-5 py-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-lg text-xs shadow-md shadow-sky-500/20"
                  >
                    <Save size={14} />
                    <span>変更を保存して反映</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="h-full min-h-[300px] border border-dashed border-slate-700 rounded-2xl flex flex-col items-center justify-center p-8 text-center bg-slate-800/30">
                <Calendar size={32} className="text-slate-600 mb-3" />
                <p className="text-sm text-slate-400 font-medium">
                  左の一覧からイベントを選択するか、新規追加ボタンを押してください
                </p>
                <button
                  onClick={handleAddNew}
                  className="mt-4 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-sky-400 border border-sky-500/30 rounded-lg text-xs font-semibold transition-colors"
                >
                  + 新規イベントを作成
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
