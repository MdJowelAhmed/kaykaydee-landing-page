import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
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
        className="fixed inset-x-0 top-20 bottom-0 z-0 flex min-h-0 flex-col overflow-hidden px-3 py-3 md:px-5 md:py-4"
      >
        <h1 className="sr-only">Contact Zealth OS</h1>
        <ContactForm />
      </main>
    </>
  );
}
