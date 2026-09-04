import BrowseCategories from "@/components/BrowseCategories";
import CategoriesCTA from "@/components/CategoriesCTA";
import CategoriesHero from "@/components/CategoriesHero";
import Footer from "@/components/Footer";

export default function CategoriesPage() {
  return (
    <>
<CategoriesHero />
<BrowseCategories />
      {/* Categories content comes here */}
      <CategoriesCTA />
      <Footer />
    </>
  );
}