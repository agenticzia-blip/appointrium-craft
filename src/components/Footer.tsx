import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border section-padding py-12">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        <div>
          <h3 className="font-display font-bold text-lg mb-3">Appointrium Academy</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Master AI automation, build real client systems, and get paid. Your complete academy for the AI economy.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-sm mb-3 uppercase tracking-wider text-muted-foreground">Pages</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Home", path: "/" },
              { label: "Courses", path: "/courses" },
              { label: "Results", path: "/results" },
              { label: "Pricing", path: "/pricing" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <Link key={l.path} to={l.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-sm mb-3 uppercase tracking-wider text-muted-foreground">Contact</h4>
          <p className="text-sm text-muted-foreground">appointfunnels@gmail.com</p>
          <p className="text-sm text-muted-foreground mt-1">+92 320 5067483</p>
        </div>
      </div>
      <div className="border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Appointrium Academy. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
