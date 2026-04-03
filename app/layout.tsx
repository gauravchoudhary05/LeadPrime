import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CalendlyWidgets from "@/components/ui/CalendlyWidgets";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "LeadPrime — AI-Powered Growth & Creative Agency",
  description:
    "LeadPrime is a full-service AI-powered agency specializing in 3D web design, AI calling, lead generation funnels, Meta Ads, video editing, and graphic design. Supercharge your growth today.",
  keywords: [
    "AI agency",
    "lead generation",
    "3D websites",
    "AI calling",
    "Meta Ads",
    "video editing",
    "graphic design",
    "growth agency",
  ],
  openGraph: {
    title: "LeadPrime — AI-Powered Growth & Creative Agency",
    description:
      "Supercharge your business growth with AI-powered marketing, creative services, and cutting-edge web design.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CalendlyWidgets />
      </body>
    </html>
  );
}

