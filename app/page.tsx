import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MainContent from "@/components/MainContent";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-16 md:pt-20">
        <HeroSection />
        <MainContent />
        <Footer />
      </div>
      <FloatingButton />
    </div>
  );
}
