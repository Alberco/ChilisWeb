import Image from "next/image";
import heroImagen from "../../public/chilis3.jpeg";
function Hero() {
  return (
    <section className="py-10">
      <div className="flex justify-center">
        <Image src={heroImagen} alt="logo-hero" />
      </div>
    </section>
  );
}

export default Hero;
