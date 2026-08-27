import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HistorySection from "@/components/HistorySection";
import CategorySection from "@/components/CategorySection";
import EventSection from "@/components/EventSection";
import MapSection from "@/components/MapSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <HistorySection />
      <CategorySection />
      <EventSection />
      <MapSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
