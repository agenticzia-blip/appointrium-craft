import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild variant="hero" size="lg" className="rounded-full px-8 gap-2">
          <a href="tel:+923303120032">
            <Phone className="w-5 h-5" /> Call Now
          </a>
        </Button>
        <Button asChild variant="hero-outline" size="lg" className="rounded-full px-8 gap-2">
          <a href="https://wa.me/923303120032" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
