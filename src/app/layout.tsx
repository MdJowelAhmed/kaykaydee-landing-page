import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

/** Body / UI: Poppins. Headings: Basis Grotesque Arabic Pro (self-hosted in `public/fonts/`, see `globals.css`). */
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Zealth OS – All in One Allied Health Platform",
    template: "%s | Zealth OS",
  },
  description:
    "Streamline clinical documentation, scheduling, patient engagement, and payments. AI-powered tools save you hours every day. Built specifically for Australian Allied Health professionals.",
  keywords: [
    "allied health platform",
    "clinical documentation",
    "patient scheduling",
    "healthcare software",
    "Australian healthcare",
    "NDIS",
    "Medicare",
    "telehealth",
    "practice management",
  ],
  authors: [{ name: "Zealth OS" }],
  creator: "Zealth OS",
  publisher: "Zealth OS",
  metadataBase: new URL("https://zealthread.com.au"),
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://zealthread.com.au",
    title: "Zealth OS – All in One Allied Health Platform",
    description:
      "Streamline clinical documentation, scheduling, patient engagement, and payments. AI-powered tools save you hours every day.",
    siteName: "Zealth OS",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zealth OS – All in One Allied Health Platform",
    description:
      "Streamline clinical documentation, scheduling, patient engagement, and payments. AI-powered tools save you hours every day.",
    creator: "@zealthread",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://zealthread.com.au",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col mt-20">
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
