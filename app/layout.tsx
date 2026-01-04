// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Roboto, Work_Sans } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* Fonts */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aranye Resort & Restaurant",
  description: "A forest retreat shaped by silence in Bankura, West Bengal.",
  metadataBase: new URL("https://aranyeresort.vercel.app"), // change to your real domain
  openGraph: {
    title: "Aranye Resort & Restaurant",
    description: "A calm forest retreat with comfortable rooms, local food, and nature experiences.",
    url: "https://aranyeresort.vercel.app",
    siteName: "Aranye Resort & Restaurant",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto.variable} ${workSans.variable}`}
    >
      <body>
        <Navbar />

        {/* Main landmark for accessibility */}
        <main>{children}</main>

        <Footer />

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-135KSH9TYL"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-135KSH9TYL', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </body>
    </html>
  );
}
