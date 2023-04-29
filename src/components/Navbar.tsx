"use client";
import Link from "next/link";
import MenuSecundario from "./MenuSecundario";
import { useState } from "react";
import { useCarritoContext } from "@/context/CarritoCompraContext";
import { Cart, Register, User } from "@/icons/User";
import Image from "next/image";
import logo from "../../public/chilislogo.png";
function Navbar() {
  const { updateTotalCompra } = useCarritoContext();
  const [asideNew, setAsideNew] = useState(true);

  const cerrarAside = () => {
    setAsideNew(!asideNew);
    updateTotalCompra();
  };
  return (
    <>
      <nav className="bg-white relative ">
        <span className="border-t-4 border-red-500 top-0 inset-x-0 absolute"></span>
        <div className="flex justify-between items-center text-blue-950 py-4 max-w-7xl mx-auto px-4 md:px-10 ">
          <ul className="flex">
            <li>
              <Link href={"/"}>
                <Image src={logo} alt="logo chilis" width={60} />
              </Link>
            </li>
          </ul>
          <ul className="flex gap-4">
            <li>
              <User />
            </li>
            <li>
              <Register />
            </li>
            <li>
              <button onClick={cerrarAside}>
                <Cart />
              </button>
            </li>
          </ul>
        </div>
        <div className="border-y-2 border-gray-700/20">
          <ul className="flex items-center justify-center flex-col md:flex-row max-w-6xl mx-auto px-10 md:px-0 gap-4 md:gap-10  lg:gap-12 py-4">
            <li className="font-bold text-xs md:text-sm ">
              <Link href={"/carta"}>COMIDA MEXICANA</Link>
            </li>
            <li className="font-bold text-xs md:text-sm ">PROMOCIONES</li>
            <li className="font-bold text-xs md:text-sm ">FAVORITOS</li>
            <li className="font-bold text-xs md:text-sm ">COMIDA MEXICANA</li>
          </ul>
        </div>
      </nav>
      <MenuSecundario abrirAside={asideNew} cerrarAside={cerrarAside} />
    </>
  );
}

export default Navbar;
