import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ChatBot from "./ChatBot";
import ParticlesBackground from "./ParticlesBackground";
import SEO from "./SEO";

const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const isLanding = pathname === "/landing";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative min-h-screen scroll-smooth">
      <SEO />
      <div className="top-light" />
      <ParticlesBackground />
      <Navbar minimal={isLanding} />
      <main className="relative z-10">{children}</main>
      {!isLanding && <Footer />}
      <ChatBot />
    </div>
  );
};

export default Layout;
