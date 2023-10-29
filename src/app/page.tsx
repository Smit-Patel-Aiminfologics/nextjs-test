import ProductFeatures1 from "@/components/Home/ProductFeatures1";
import ProductFeatures2 from "@/components/Home/ProductFeatures2";
import ProductHero from "@/components/Home/ProductHero";

export default function Home() {
  return (
    <main className="pb-64 md:pb-72 lg:pb-80 xl:pb-96">
      <section id="home-product-hero" className="bg-bg1">
        <ProductHero />
      </section>
      <section
        id="home-product-features-1"
        className="bg-lightGray mb-52 lg:mb-64"
      >
        <ProductFeatures1 />
      </section>
      <section id="home-product-features-2" className="bg-lightGray">
        <ProductFeatures2 />
      </section>
    </main>
  );
}
