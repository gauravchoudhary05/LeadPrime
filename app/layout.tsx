import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
      <head>
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2518747108588405');
              fbq('track', 'PageView');
            `,
          }}
        />
        {/* End Meta Pixel Code */}
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Meta Pixel noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2518747108588405&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CalendlyWidgets />
      </body>
    </html>
  );
}

