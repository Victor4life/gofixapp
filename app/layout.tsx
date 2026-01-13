import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
// 1. Import your new Navbar component
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fantasy = Cinzel({ subsets: ["latin"], variable: "--font-fantasy" });
export const metadata: Metadata = {
  title: "Go-Fix - Find Trusted Artisans for Your Home Needs",
  description:
    "Connect with reliable professionals for quality home repairs and improvements. Stress-free service at your fingertips.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fantasy.variable}`}>
      <body>
        {/* 2. Place the Navbar here so it shows on every page */}
        <Navbar />

        {children}
      </body>
    </html>
  );
}
