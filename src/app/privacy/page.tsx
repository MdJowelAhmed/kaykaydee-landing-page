import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Zealth OS and how we handle your data.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-3xl px-4 py-28">
        <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="mt-4 text-gray-600">
          This policy describes how Zealth OS collects, uses, and protects your
          information. Replace this placeholder with your privacy policy before
          production.
        </p>
        <p className="mt-6">
          <Link href="/" className="text-purple-600 underline underline-offset-4">
            Back to home
          </Link>
        </p>
      </main>
      <Footer />
    </>
  );
}
