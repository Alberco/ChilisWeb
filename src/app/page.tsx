import Favoritos from "@/components/Favoritos";
import Hero from "@/components/Hero";
import Promociones from "@/components/Promociones";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Hero />
      <Promociones />
      <Favoritos />
    </div>
  );
}
