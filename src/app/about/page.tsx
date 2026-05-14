import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Zealth OS – our story, vision, and goal to revolutionize Allied Health practice management in Australia with cutting-edge AI-powered tools.",
  alternates: {
    canonical: "https://zealthread.com.au/about",
  },
  openGraph: {
    title: "About Us | Zealth OS",
    description:
      "Learn about Zealth OS – our story, vision, and goal to revolutionize Allied Health practice management in Australia.",
    url: "https://zealthread.com.au/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
