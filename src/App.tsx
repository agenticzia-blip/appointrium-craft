import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import WhyAI from "./pages/WhyAI";
import Courses from "./pages/Courses";
import N8NCourse from "./pages/N8NCourse";
import AIAgentsCourse from "./pages/AIAgentsCourse";
import VoiceAgents from "./pages/VoiceAgents";
import WhatsAppAutomation from "./pages/WhatsAppAutomation";
import LiveClasses from "./pages/LiveClasses";
import SolutionAgents from "./pages/SolutionAgents";
import GetFirstClient from "./pages/GetFirstClient";
import AppointFunnels from "./pages/AppointFunnels";
import Tools from "./pages/Tools";
import Results from "./pages/Results";
import Pricing from "./pages/Pricing";
import WhatIsAIAutomation from "./pages/WhatIsAIAutomation";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/why-ai" element={<WhyAI />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/n8n-course" element={<N8NCourse />} />
            <Route path="/ai-agents-course" element={<AIAgentsCourse />} />
            <Route path="/voice-agents" element={<VoiceAgents />} />
            <Route path="/whatsapp-automation" element={<WhatsAppAutomation />} />
            <Route path="/live-classes" element={<LiveClasses />} />
            <Route path="/solution-agents" element={<SolutionAgents />} />
            <Route path="/get-first-client" element={<GetFirstClient />} />
            <Route path="/appoint-funnels" element={<AppointFunnels />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/results" element={<Results />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/what-is-ai-automation" element={<WhatIsAIAutomation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
