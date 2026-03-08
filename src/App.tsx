import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "@/i18n/config";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TopicPage from "./pages/TopicPage";
import GamePage from "./pages/GamePage";
import QuizLibrary from "./pages/QuizLibrary";
import ContactPage from "./pages/ContactPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/en" replace />} />
          <Route path="/:lang" element={<Index />} />
          <Route path="/:lang/topics/:topicId" element={<TopicPage />} />
          <Route path="/:lang/games/:gameId" element={<GamePage />} />
          <Route path="/:lang/quizzes" element={<QuizLibrary />} />
          <Route path="/:lang/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;