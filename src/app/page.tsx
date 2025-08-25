import HeroSlider from "@/components/layout/HeroSlider";
import CategoriesSlider from "@/components/product/CategoriesSlider";
import NewProducts from "@/components/product/NewProducts";

export default function HomePage() {
  return (
    <main>
      <HeroSlider />
      <CategoriesSlider />
      <NewProducts />
    </main>
  );
}
