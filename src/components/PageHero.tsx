import ScrollReveal from "./ScrollReveal";

interface PageHeroProps {
  title: string;
  highlight?: string;
  subtitle: string;
}

const PageHero = ({ title, highlight, subtitle }: PageHeroProps) => (
  <section className="section-padding pt-32 pb-16 text-center">
    <div className="container-narrow">
      <ScrollReveal>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
          {title}{" "}
          {highlight && <span className="serif-italic text-gradient">{highlight}</span>}
        </h1>
      </ScrollReveal>
      <ScrollReveal delay={150}>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      </ScrollReveal>
    </div>
  </section>
);

export default PageHero;
