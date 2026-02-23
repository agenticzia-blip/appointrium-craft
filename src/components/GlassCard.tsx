import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard = ({ children, className = "", hover = true }: GlassCardProps) => (
  <div
    className={`glass rounded-lg p-6 ${hover ? "transition-all duration-300 hover:glow hover:scale-[1.02]" : ""} ${className}`}
  >
    {children}
  </div>
);

export default GlassCard;
