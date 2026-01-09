import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import TopBar from "../components/layout/TopBar";

/* =====================
   Fonts (Professional)
===================== */

// Body text – readable & clean
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Headings – strong & premium
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

/* =====================
   SEO Metadata
===================== */
export const metadata: Metadata = {
  title: {
    default: "ASN Builders | Real Estate & Construction",
    template: "%s | ASN Builders",
  },
  description:
    "ASN Builders is a trusted real estate and construction company in Bangladesh, delivering quality residential and commercial projects.",
  keywords: [
    "ASN Builders",
    "Real Estate Bangladesh",
    "Construction Company Bangladesh",
    "Property Developer",
    "Residential Projects",
  ],
  authors: [{ name: "ASN Builders" }],
  metadataBase: new URL("https://asnbuilders.com"), // later change to real domain
  openGraph: {
    title: "ASN Builders | Real Estate & Construction",
    description: "Premium real estate and construction projects in Bangladesh.",
    url: "https://asnbuilders.com",
    siteName: "ASN Builders",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-[#F5F6F7] font-sans text-[#1F2937] antialiased">
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
