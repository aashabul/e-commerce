import HeroSlider from "@/components/layout/HeroSlider";
import CategoriesSlider from "@/components/product/CategoriesSlider";
import DiscountBanner from "@/components/product/DiscountBanner";
import NewProducts from "@/components/product/NewProducts";

export default function HomePage() {
  return (
    <main className="bg-[#EAEAEA] min-h-screen">
      <HeroSlider />
      <CategoriesSlider />
      <NewProducts />
      {/* <DiscountBanner/> */}
    </main>
  );
}
