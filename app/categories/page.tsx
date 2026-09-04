import BrowseCategories from "@/components/BrowseCategories";
import CategoriesHero from "@/components/CategoriesHero";
import Footer from "@/components/Footer";

export default function CategoriesPage() {
  return (
    <>
<CategoriesHero />
<BrowseCategories />
      {/* Categories content comes here */}
      <Footer />
    </>
  );
}