import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import FloatingButtons from "./_components/FloatingButtons";
import CookieBanner from "./_components/CookieBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Anumaan Technologies — Premium IT Solutions & Digital Transformation",
    template: "%s | Anumaan Technologies",
  },
  description:
    "Anumaan Technologies is a leading IT company in India specializing in website development, web apps, mobile apps, government software, ERP/CRM, and AI automation solutions.",
  keywords: [
    "IT company India",
    "web development",
    "mobile app development",
    "government software",
    "ERP CRM solutions",
    "AI automation",
    "software development India",
    "Anumaan Technologies",
  ],
  authors: [{ name: "Anumaan Technologies" }],
  creator: "Anumaan Technologies",
  metadataBase: new URL("https://anumaantech.com"),
  openGraph: {
    type: "website",
    siteName: "Anumaan Technologies",
    title: "Anumaan Technologies — Premium IT Solutions",
    description:
      "We build cutting-edge digital solutions — websites, apps, government portals, and AI-powered systems tailored for your business.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anumaan Technologies — Premium IT Solutions",
    description:
      "We build cutting-edge digital solutions — websites, apps, government portals, and AI-powered systems.",
    creator: "@anumaantech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
        <CookieBanner />
      </body>
    </html>
  );
}
