import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/923205067483"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-primary-foreground flex items-center justify-center transition-transform duration-300 hover:scale-110 glow"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-7 h-7 text-foreground" />
  </a>
);

export default WhatsAppButton;
