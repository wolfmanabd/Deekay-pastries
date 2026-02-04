import Hero from "@/Components/Hero";
import SnacksSection from "@/Components/SnackSection";
import WhyChooseUs from "@/Components/WhychooseUs";
import HowItWorks from "@/Components/HowItWorks";
import Testimonials from "@/Components/Testimonials";
import CTA from "@/Components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <SnacksSection />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </>
  );
}
