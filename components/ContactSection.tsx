"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In static export or form handling (e.g. Formspree/Cloudflare Workers/Email routing)
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#faf8f5] relative">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs tracking-widest uppercase bg-primary/10 text-primary font-semibold mb-3">
            <Mail size={14} />
            <span>Contact</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 tracking-wider">
            お問い合わせ
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4 mb-4" />
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            ご意見・ご質問などこちらのフォームよりご連絡ください。
            <br />
            通常7日以内にご返信させていただいております。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 sm:p-12 shadow-md border border-gray-100"
        >
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-serif">
                送信が完了しました
              </h3>
              <p className="text-gray-600 text-sm">
                お問い合わせありがとうございます。内容を確認の上、担当者よりご連絡いたします。
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", message: "" });
                }}
                className="mt-4 px-6 py-2.5 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                フォームに戻る
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  お名前 <span className="text-primary font-bold">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="田中 太郎"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm bg-gray-50/50 focus:bg-white"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  メールアドレス <span className="text-primary font-bold">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="info@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm bg-gray-50/50 focus:bg-white"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  メッセージ <span className="text-primary font-bold">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="お問い合わせ内容をご入力ください"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm bg-gray-50/50 focus:bg-white resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="relative w-full py-4 px-6 rounded-xl bg-primary hover:bg-primary/90 text-white font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2 group overflow-hidden active:scale-[0.99]"
                >
                  {/* シマー（光が走るアニメーション） */}
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                  <span className="tracking-wider text-sm font-semibold">
                    メッセージを送信する
                  </span>
                  <Send
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-0.5"
                  />
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
