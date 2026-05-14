import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using Zealth OS.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-3xl px-4 py-28">
        <h1 className="text-3xl font-bold text-gray-900">Terms &amp; Conditions</h1>
        <p className="mt-4 text-gray-600">
          These terms govern your use of Zealth OS. Replace this placeholder with
          your legal terms before production.
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
