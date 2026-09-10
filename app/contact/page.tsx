import ContactFAQ from "@/components/ContactFAQ";
import ContactForm from "@/components/ContactForm";
import ContactHero from "@/components/ContactHero";
import ContactInformation from "@/components/ContactInformation";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactInformation />
      <ContactForm />
      <ContactFAQ />
    </main>
  );
}