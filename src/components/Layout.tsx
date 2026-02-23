import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import ParticlesBackground from "./ParticlesBackground";

const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative min-h-screen">
      <div className="top-light" />
      <ParticlesBackground />
      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
