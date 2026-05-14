import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import StatsWhySharedSection from "@/components/home/StatsWhySharedSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import PricingSection from "@/components/home/PricingSection";
import AppSection from "@/components/home/AppSection";
import FAQSection from "@/components/home/FAQSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export const metadata: Metadata = {
  title: "Zealth OS – All in One Allied Health Platform",
  description:
    "Streamline clinical documentation, scheduling, patient engagement, and payments. AI-powered tools save you hours every day. Trusted by 80+ Allied Health Clinics in Australia.",
  alternates: {
    canonical: "https://zealthread.com.au",
  },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <StatsWhySharedSection />
        <FeaturesSection />
        <PricingSection />
        <AppSection />
        <FAQSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
