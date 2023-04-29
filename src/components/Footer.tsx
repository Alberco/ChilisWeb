import React from "react";

function Footer() {
  return (
    <footer className="">
      <div className="border-y-2 border-gray-700/20">
        <ul className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto gap-12 py-4">
          <li className="font-bold  text-xs md:text-sm">COMIDA MEXICANA</li>
          <li className="font-bold  text-xs md:text-sm">PROMOCIONES</li>
          <li className="font-bold  text-xs md:text-sm">FAVORITOS</li>
          <li className="font-bold  text-xs md:text-sm">COMIDA MEXICANA</li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto gap-12 py-4">
          <li className="font-bold text-xs md:text-sm">
            Teléfono Lima: 01610-0010
          </li>
          <li className="font-bold text-xs md:text-sm">
            Teléfono Provincia: 610-010
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
