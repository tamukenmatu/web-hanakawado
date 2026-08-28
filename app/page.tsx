import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InfiniteMarquee from "@/components/Marquee";
import HistorySection from "@/components/HistorySection";
import CategorySection from "@/components/CategorySection";
import EventSection from "@/components/EventSection";
import MapSection from "@/components/MapSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SakuraFallingSideDecor from "@/components/SakuraFallingSideDecor";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative">
      <Header />
      <Hero />
      {/* ヒーロー画像より下部の両サイドに舞い落ちる桜アニメーション */}
      <div className="relative w-full">
        <SakuraFallingSideDecor />
        <InfiniteMarquee />
        <HistorySection />
        <CategorySection />
        <EventSection />
        <MapSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
