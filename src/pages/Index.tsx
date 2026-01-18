import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProphecyTopics from "@/components/ProphecyTopics";
import GamesSection from "@/components/GamesSection";
import QuizSection from "@/components/QuizSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <ProphecyTopics />
        <GamesSection />
        <QuizSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
