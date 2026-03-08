import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProphecyTopics from "@/components/ProphecyTopics";
import VideoSection from "@/components/VideoSection";
import GamesSection from "@/components/GamesSection";
import QuizSection from "@/components/QuizSection";
import ParentsSection from "@/components/ParentsSection";
import Footer from "@/components/Footer";
import { useLanguagePrefix } from "@/hooks/useLanguagePrefix";

const Index = () => {
  useLanguagePrefix();

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <ProphecyTopics />
        <VideoSection />
        <GamesSection />
        <QuizSection />
        <ParentsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;