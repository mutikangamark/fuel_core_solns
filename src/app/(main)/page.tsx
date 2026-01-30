import HeroSection from "@/components/sections/HeroSection";
import { ProcessBentoGrid } from "@/components/sections/ProcessBentoGrid";
import ProblemSection from "@/components/sections/ProblemSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ResultsMetricsSection from "@/components/sections/ResultsMetricsSection";
import AwardsSection from "@/components/sections/AwardsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProcessBentoGrid />
      <HowItWorksSection />
       <AwardsSection />
       <ResultsMetricsSection />
      <TestimonialSection />
    </>
  );
}
