import { Inter } from "next/font/google";
import { Search, MapPin, ArrowRight, Hammer } from "lucide-react";
import FeaturedArtisans from "@/components/FeaturedArtisans";
import TrustSafety from "@/components/TrustSafety";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import TypewriterText from "@/components/TypeWriterText";
import PopularCategories from "@/components/PopularCategories";
import HowItWorks from "@/components/HowItWorks";
import PostJobCTA from "@/components/PostJobs";
import Image from "next/image";
import Hero from "@/components/Hero";
import FinalCTA from "@/components/FinalCta";

const inter = Inter({ subsets: ["latin"] });

export default function LandingPage() {


  return (
    <>
      <LoadingScreen />
      <div className="animate-in fade-in duration-1000">
        <Hero />
                  <HowItWorks />
        <PopularCategories />
<FeaturedArtisans />
<Testimonials />
<FinalCTA />
      </div>
    </>
  );
}
