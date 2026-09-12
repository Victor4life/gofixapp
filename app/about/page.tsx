import AboutCTA from "@/components/AboutCTA";
import AboutDifference from "@/components/AboutDifference";
import AboutHero from "@/components/AboutHero";
import AboutMission from "@/components/AboutMission";
import AboutStory from "@/components/AboutStory";
import AboutValues from "@/components/AboutValues";
import Footer from "@/components/Footer";
import HowItWorksCTA from "@/components/HowItWorksCTA";
import ReadyToGetStarted from "@/components/ReadyToGetStarted";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutMission />
      <AboutDifference />
      <ReadyToGetStarted />
      {/* Next sections will go here */}

      <Footer />
    </main>
  );
}