import ContactFAQ from "@/components/ContactFAQ";
import ContactForm from "@/components/ContactForm";
import ContactHero from "@/components/ContactHero";
import ContactInformation from "@/components/ContactInformation";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactInformation />
      <ContactForm />
      <ContactFAQ />
      <ContactCTA />
      <Footer />
    </main>
  );
}