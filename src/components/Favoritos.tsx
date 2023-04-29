import { Favorite } from "@/icons/User";
import favo1 from "../../public/favo1.png";
import favo2 from "../../public/favo2.png";
import favo3 from "../../public/favo3.png";
import favo4 from "../../public/favo4.png";
import favo5 from "../../public/favo5.png";
import Image from "next/image";

function Favoritos() {
  return (
    <section className="py-8 pb-20 px-8 md:px-10 lg:px-10">
      <h2 className="text-3xl font-bold border-l-4 border-black px-3">
        Favoritos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 place-content-center place-items-center py-4 gap-8 px-10">
        <article className="relative">
          <Image src={favo1} alt="promo1" className="rounded-md" />
          <span className="absolute top-3 right-3">
            <Favorite />
          </span>
        </article>
        <article className="relative">
          <Image src={favo2} alt="promo1" className="rounded-md" />
          <span className="absolute top-3 right-3">
            <Favorite />
          </span>
        </article>
        <article className="relative">
          <Image src={favo3} alt="promo1" className="rounded-md" />
          <span className="absolute top-3 right-3">
            <Favorite />
          </span>
        </article>
        <article className="relative">
          <Image src={favo4} alt="promo1" className="rounded-md" />
          <span className="absolute top-3 right-3">
            <Favorite />
          </span>
        </article>
        <article className="relative">
          <Image src={favo5} alt="promo1" className="rounded-md" />
          <span className="absolute top-3 right-3">
            <Favorite />
          </span>
        </article>
      </div>
    </section>
  );
}

export default Favoritos;
