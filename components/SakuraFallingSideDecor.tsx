"use client";

import React, { useMemo } from "react";

interface PetalConfig {
  id: number;
  src: string;
  side: "left" | "right";
  leftPercent: number; // 0〜14% (左) または 86〜100% (右)
  size: number;        // px (大小様々: 14px〜34px)
  duration: number;    // 落下秒数 (6.5s〜14s)
  delay: number;       // 開始ディレイ (0s〜8s)
  swayDuration: number;// 横揺れ周期 (2.5s〜5s)
  rotateZDuration: number; // 回転周期 (3s〜7s)
  rotateDirection: number; // 1 or -1
  opacity: number;     // 0.65〜0.95
}

export default function SakuraFallingSideDecor() {
  const validSakuraIndices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 18, 20, 21, 22, 23, 25, 26, 27, 29];

  // 左右の余白エリアに配置する桜の花びら群
  const petals = useMemo<PetalConfig[]>(() => {
    const list: PetalConfig[] = [];
    const totalCount = 28;

    for (let i = 0; i < totalCount; i++) {
      const isLeft = i % 2 === 0;
      const imgNum = validSakuraIndices[i % validSakuraIndices.length];
      
      // 文字エリアにかぶらないよう、左右の端に配置
      const leftPos = isLeft 
        ? Math.floor(1 + Math.random() * 12)   // 1%〜13% (左サイド)
        : Math.floor(86 + Math.random() * 12); // 86%〜98% (右サイド)

      list.push({
        id: i,
        src: `/sakura/sakura${imgNum}.png`,
        side: isLeft ? "left" : "right",
        leftPercent: leftPos,
        size: Math.floor(16 + Math.random() * 18), // 16px〜34px の大小バリエーション
        duration: 7 + Math.random() * 6.5,         // 7s〜13.5s (有機的でゆったりな落下)
        delay: (i * 0.4) % 7.5,
        swayDuration: 2.8 + Math.random() * 2.4,   // 2.8s〜5.2s の横風ゆらぎ
        rotateZDuration: 3.5 + Math.random() * 3.5, // 3Dひらひら回転
        rotateDirection: Math.random() > 0.5 ? 1 : -1,
        opacity: 0.65 + Math.random() * 0.3,
      });
    }
    return list;
  }, []);

  return (
    <div 
      className="absolute inset-0 pointer-events-none overflow-hidden z-20"
      style={{ minHeight: "100%" }}
      aria-hidden="true"
    >
      <style jsx global>{`
        @keyframes sakuraFall {
          0% {
            transform: translateY(-80px);
            opacity: 0;
          }
          8% {
            opacity: var(--petal-opacity);
          }
          92% {
            opacity: var(--petal-opacity);
          }
          100% {
            transform: translateY(calc(100vh + 120px));
            opacity: 0;
          }
        }

        @keyframes sakuraSway {
          0%, 100% {
            transform: translateX(0px) rotateX(0deg) rotateY(0deg);
          }
          25% {
            transform: translateX(20px) rotateX(40deg) rotateY(30deg);
          }
          50% {
            transform: translateX(-16px) rotateX(75deg) rotateY(-45deg);
          }
          75% {
            transform: translateX(24px) rotateX(30deg) rotateY(65deg);
          }
        }

        @keyframes sakuraRotate {
          0% {
            transform: rotateZ(0deg);
          }
          100% {
            transform: rotateZ(calc(360deg * var(--rotate-dir)));
          }
        }

        .sakura-fall-track {
          position: absolute;
          top: 0;
          will-change: transform, opacity;
          animation: sakuraFall var(--fall-duration) cubic-bezier(0.37, 0, 0.63, 1) infinite;
          animation-delay: var(--fall-delay);
        }

        .sakura-sway-box {
          will-change: transform;
          animation: sakuraSway var(--sway-duration) ease-in-out infinite alternate;
        }

        .sakura-rotate-leaf {
          will-change: transform;
          animation: sakuraRotate var(--rotate-duration) linear infinite;
        }
      `}</style>

      {/* 画面左右に固定された領域で落下 */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {petals.map((petal) => (
          <div
            key={petal.id}
            className="sakura-fall-track hidden sm:block"
            style={{
              left: `${petal.leftPercent}%`,
              "--fall-duration": `${petal.duration}s`,
              "--fall-delay": `-${petal.delay}s`,
              "--petal-opacity": petal.opacity,
            } as React.CSSProperties}
          >
            {/* 3Dフリップ・空気抵抗の横揺れ */}
            <div
              className="sakura-sway-box"
              style={{
                "--sway-duration": `${petal.swayDuration}s`,
              } as React.CSSProperties}
            >
              {/* 自転回転 */}
              <div
                className="sakura-rotate-leaf"
                style={{
                  "--rotate-duration": `${petal.rotateZDuration}s`,
                  "--rotate-dir": petal.rotateDirection,
                } as React.CSSProperties}
              >
                <img
                  src={petal.src}
                  alt=""
                  width={petal.size}
                  height={petal.size}
                  className="select-none filter drop-shadow-[0_2px_4px_rgba(236,72,153,0.12)]"
                  style={{
                    width: `${petal.size}px`,
                    height: `${petal.size}px`,
                    objectFit: "contain",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
