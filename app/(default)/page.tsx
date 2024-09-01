export const metadata = {
  title: "Home - Fozato",
  description: "AI-Powered YouTube SEO Automation for Creators & Businesses",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import Banner from "@/components/banner";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <BusinessCategories /> */}
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta />
      {/* <Banner /> */}
    </>
  );
}
