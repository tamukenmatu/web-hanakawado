"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { UtensilsCrossed, Compass, ShoppingBag } from "lucide-react";

interface Category {
  id: string;
  tag: string;
  title: string;
  icon: React.ReactNode;
  image: string;
  description: string[];
}

export default function CategorySection() {
  const categories: Category[] = [
    {
      id: "eat",
      tag: "食べる",
      title: "江戸の粋と、現代の感性が交差する味",
      icon: <UtensilsCrossed className="w-5 h-5 text-primary" />,
      image: "/assets/syoku.png",
      description: [
        "浅草の喧騒から少し離れたこの街には、食通を唸らせる奥深い味わいが息づいています。",
        "歌舞伎の演目から名付けられた「助六寿司」に代表される江戸の食文化を守り続ける老舗の暖簾。その一方で、隅田川を望むリバーサイドには、自家製パンの香りが漂うモダンなダイナーや、こだわりのコーヒーを供すカフェが溶け込んでいます。",
        "歴史ある名店の確かな技と、新しい感性が生み出す一皿。新旧が心地よく響き合う、花川戸ならではの豊かな食卓をぜひお楽しみください。",
      ],
    },
    {
      id: "walk",
      tag: "遊ぶ",
      title: "歌舞伎のヒーローが愛した、隅田のほとりを歩く",
      icon: <Compass className="w-5 h-5 text-primary" />,
      image: "/assets/asobu.png",
      description: [
        "隅田川の柔らかな風を感じながら、歌舞伎十八番の主人公「花川戸助六」の足跡を辿る散策へ。",
        "スカイツリーを真正面に望む「助六夢通り」は、江戸の伝説と現代のランドマークが重なり合う、この街一番のフォトスポットです。川沿いのテラスでゆったりとした時間に身を任せたり、路地裏に隠れた歴史の断片を探したり。",
        "ただ通り過ぎるだけではもったいない、歩くほどに物語が見えてくる。そんな「粋な大人の遊び場」が、ここ花川戸には広がっています。",
      ],
    },
    {
      id: "zakka",
      tag: "雑貨",
      title: "日本一の履物の聖地で、一生モノに出会う",
      icon: <ShoppingBag className="w-5 h-5 text-primary" />,
      image: "/assets/zakka.png",
      description: [
        "古くから「履物の街」として全国にその名を知られた花川戸は、今も職人の魂が宿る問屋街です。",
        "一歩足を踏み入れれば、伝統的な下駄や草履から、熟練の職人が仕立てるオーダーメイドの革靴、洗練されたデザインの鞄まで、確かな品質の品々が軒を連ねています。",
        "問屋街ならではの豊富な知識を持つ店主との会話を楽しみながら、自分の足に馴染み、時を共にするほどに愛着が湧く逸品を探す。大量生産にはない、手仕事のぬくもりと「本物」を選ぶ贅沢を体感してください。",
      ],
    },
  ];

  return (
    <section id="categories" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-24">
        {categories.map((cat, index) => {
          const isEven = index % 2 === 1;
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${
                isEven ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-10 lg:gap-14 items-center`}
            >
              {/* Image with subtle hover zoom effect */}
              <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl shadow-lg border border-gray-100 group relative">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={cat.image}
                    alt={cat.tag}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20">
                  {cat.icon}
                  <span>ハナカワドスケロクデ</span>
                </div>
              </div>

              {/* Text content */}
              <div className="w-full lg:w-1/2 space-y-5">
                <div className="inline-block border-b-2 border-primary pb-1 text-primary font-bold text-lg tracking-widest font-serif">
                  {cat.tag}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 leading-snug">
                  {cat.title}
                </h3>
                <div className="space-y-3.5 text-gray-600 leading-relaxed font-light text-base sm:text-lg">
                  {cat.description.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
