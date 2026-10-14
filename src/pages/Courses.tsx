import PageHero from "@/components/PageHero";
import PricingSection from "@/components/PricingSection";

const Courses = () => (
  <div>
    <PageHero title="Starter, Professional" highlight="& Elite" subtitle="The complete client-acquisition program. Compare every lesson, tool, support option, and client guarantee below." />
    <PricingSection courses />
  </div>
);

export default Courses;
