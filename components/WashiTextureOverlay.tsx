"use client";

import React from "react";

/**
 * 本物の手漉き和紙のような微細な繊維・凹凸質感を
 * 画像ファイルを使わずに SVG feTurbulence 計算だけで超軽量に再現するオーバーレイ
 */
export default function WashiTextureOverlay() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden" 
      aria-hidden="true"
    >
      <svg className="hidden">
        <filter id="washiNoiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="matrix"
            values="
              0 0 0 0 0.1
              0 0 0 0 0.1
              0 0 0 0 0.1
              0 0 0 0.04 0"
          />
        </filter>
      </svg>
      {/* 画面全体に極薄で乗せる和紙の繊維テクスチャレイヤー */}
      <div 
        className="w-full h-full opacity-60 mix-blend-multiply"
        style={{
          filter: "url(#washiNoiseFilter)",
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0.02) 100%)",
        }}
      />
    </div>
  );
}
