import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Have questions or need assistance? Our team is here to help. Reach out to Zealth OS for support, demos, or any inquiries about our Allied Health platform.",
  alternates: {
    canonical: "https://zealthread.com.au/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main
        id="main-content"
        tabIndex={-1}
        className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-24"
      >
        <h1 className="sr-only">Contact Zealth OS</h1>
        <div className="w-full max-w-3xl">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
