import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import ParticlesBackground from "./ParticlesBackground";

const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const isLanding = pathname === "/landing";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative min-h-screen scroll-smooth">
      <div className="top-light" />
      <ParticlesBackground />
      <Navbar minimal={isLanding} />
      <main className="relative z-10">{children}</main>
      {!isLanding && <Footer />}
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
