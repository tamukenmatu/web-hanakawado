import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "花川戸助六商店街 | 履物の街、浅草の粋を歩く",
  description:
    "東京都台東区浅草、花川戸助六商店街の公式サイトです。江戸時代から続く履物の伝統と、現代の職人技、川沿いのカフェやグルメが息づく専門商店街の魅力をご紹介します。",
  keywords: [
    "花川戸助六商店街",
    "花川戸",
    "浅草",
    "履物",
    "浅草 商店街",
    "助六夢通り",
    "浅草 観光",
    "靴",
    "下駄",
    "皮革",
  ],
  authors: [{ name: "花川戸助六商店街振興組合" }],
  creator: "花川戸助六商店街",
  publisher: "花川戸助六商店街",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://web-hanakawado.makken0109.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "花川戸助六商店街 | 履物の街、浅草の粋を歩く",
    description:
      "東京都台東区浅草、花川戸助六商店街の公式サイト。江戸の伝統と現代の感性が交差する粋な街並みをご案内。",
    url: "https://web-hanakawado.makken0109.com/",
    siteName: "花川戸助六商店街",
    images: [
      {
        url: "/assets/hero.png",
        width: 1200,
        height: 630,
        alt: "花川戸助六商店街の街並み",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "花川戸助六商店街 | 履物の街、浅草の粋を歩く",
    description:
      "東京都台東区浅草、花川戸助六商店街の公式Webサイト。江戸から続く伝統と新しい食・体験の街。",
    images: ["/assets/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ShoppingCenter",
      "@id": "https://web-hanakawado.makken0109.com/#organization",
      name: "花川戸助六商店街",
      alternateName: "Hanakawado Sukeroku Shotengai",
      url: "https://web-hanakawado.makken0109.com/",
      logo: "https://web-hanakawado.makken0109.com/assets/hero.png",
      image: "https://web-hanakawado.makken0109.com/assets/hero.png",
      description:
        "東京都台東区浅草にある、江戸時代から続く履物・皮革関連の伝統ある商店街。",
      address: {
        "@type": "PostalAddress",
        streetAddress: "花川戸",
        addressLocality: "台東区",
        addressRegion: "東京都",
        postalCode: "111-0033",
        addressCountry: "JP",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 35.7135,
        longitude: 139.7997,
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://web-hanakawado.makken0109.com/#website",
      url: "https://web-hanakawado.makken0109.com/",
      name: "花川戸助六商店街",
      publisher: {
        "@id": "https://web-hanakawado.makken0109.com/#organization",
      },
      inLanguage: "ja-JP",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${notoSerifJP.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-bgLight text-[#2c2c2c] min-h-screen flex flex-col selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
