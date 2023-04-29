import React from "react";
import promo1 from "../../public/promo1.png";
import promo2 from "../../public/promo2.png";
import promo3 from "../../public/promo3.png";
import promo4 from "../../public/promo4.png";
import Image from "next/image";

function Promociones() {
  return (
    <section className="py-10 px-8 md:px-10 lg:px-10">
      <h2 className="text-3xl font-bold  border-l-4 border-black px-3">
        Promociones
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 place-content-center gap-4 place-items-center py-4">
        <article>
          <Image src={promo1} alt="promo1" />
          <p className="text-md font-bold py-2">A CHILIAR</p>
        </article>
        <article>
          <Image src={promo2} alt="promo1" />
          <p className="text-md font-bold py-2">HASTA 50% DSCTO</p>
        </article>
        <article>
          <Image src={promo3} alt="promo1" />
          <p className="text-md font-bold py-2">ART OF THE BURGER</p>
        </article>
        <article>
          <Image src={promo4} alt="promo1" />
          <p className="text-md font-bold py-2">PROMOCIONES SANDWICHES</p>
        </article>
      </div>
    </section>
  );
}

export default Promociones;
