import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
// 1. Import the Script component
import Script from "next/script";

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
        <Navbar />
        {children}

        {/* Smartsupp Live Chat Integration */}
        <Script id="smartsupp-chat" strategy="afterInteractive">
          {`
            var _smartsupp = _smartsupp || {};
            _smartsupp.key = '${process.env.NEXT_PUBLIC_SMARTSUPP_KEY}';
            window.smartsupp||(function(d) {
              var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
              s=d.getElementsByTagName('script')[0];c=d.createElement('script');
              c.type='text/javascript';c.charset='utf-8';c.async=true;
              c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
            })(document);
          `}
        </Script>
      </body>
    </html>
  );
}
