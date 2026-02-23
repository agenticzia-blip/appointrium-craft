import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const courseLinks = [
  { label: "n8n Full Course", path: "/n8n-course" },
  { label: "AI Agents", path: "/ai-agents-course" },
  { label: "Voice Agents", path: "/voice-agents" },
  { label: "WhatsApp Automation", path: "/whatsapp-automation" },
  { label: "Live Classes", path: "/live-classes" },
  { label: "Solution-Based Agents", path: "/solution-agents" },
];

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Courses", path: "/courses", dropdown: true },
  { label: "Results", path: "/results" },
  { label: "Pricing", path: "/pricing" },
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCoursesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setCoursesOpen(false);
    setOpen(false);
    setMobileCoursesOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 border-b border-border">
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 h-16">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Appointrium Academy" className="h-20 w-auto object-contain" />
          {/* <span className="font-display font-bold text-lg tracking-tight text-foreground">Appointrium<span className="text-muted-foreground font-normal ml-1">Academy</span></span> */}
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) =>
            l.dropdown ? (
              <div key={l.path} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setCoursesOpen(!coursesOpen)}
                  className={`text-sm font-medium transition-colors hover:text-foreground flex items-center gap-1 ${
                    location.pathname.includes("course") ||
                    location.pathname.includes("voice-agents") ||
                    location.pathname.includes("whatsapp-automation") ||
                    location.pathname.includes("live-classes") ||
                    location.pathname.includes("solution-agents")
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                  {coursesOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>

                {coursesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 rounded-lg border border-border bg-background shadow-lg z-[100] py-2 animate-fade-in">
                    {courseLinks.map((c) => (
                      <Link
                        key={c.path}
                        to={c.path}
                        className={`block px-4 py-2.5 text-sm transition-colors hover:bg-muted ${
                          location.pathname === c.path
                            ? "text-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={l.path}
                to={l.path}
                className={`text-sm font-medium transition-colors hover:text-foreground ${
                  location.pathname === l.path ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            )
          )}
          <Button asChild variant="hero" size="sm">
            <Link to="/pricing">Enroll Now</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((l) =>
              l.dropdown ? (
                <div key={l.path}>
                  <button
                    onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                    className={`text-base font-medium transition-colors flex items-center gap-1 ${
                      location.pathname.includes("course")
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {l.label}
                    {mobileCoursesOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {mobileCoursesOpen && (
                    <div className="flex flex-col pl-4 mt-2 gap-2">
                      {courseLinks.map((c) => (
                        <Link
                          key={c.path}
                          to={c.path}
                          onClick={() => setOpen(false)}
                          className={`text-sm transition-colors ${
                            location.pathname === c.path
                              ? "text-foreground"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={l.path}
                  to={l.path}
                  onClick={() => setOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    location.pathname === l.path ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              )
            )}
            <Button asChild variant="hero" size="sm" className="mt-2 w-fit">
              <Link to="/pricing" onClick={() => setOpen(false)}>Enroll Now</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
