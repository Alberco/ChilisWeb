"use client";
import { useMenuContext } from "@/context/MenuContext";
import { useState } from "react";
import ModalMenu from "./ModalMenu";
import { Menu } from "@/models";
import Image from "next/image";

interface Props {
  menuI: Menu;
}

export default function Menu({ menuI }: Props) {
  const { title, price, image } = menuI;

  const { menu, updateMenuAll } = useMenuContext();
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => {
    setIsOpen(true), updateMenuAll(menuI);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center rounded-md ">
        <figure className="">
          <Image
            src={image}
            alt="aewd"
            width={300}
            height={300}
            className="rounded-xl"
          />
        </figure>
        <p className="font-bold my-3">{title}</p>
        <p className="font-mediun mb-4">S/{price}</p>
        <ModalMenu open={isOpen} close={closeModal} />
        <button
          onClick={openModal}
          className="border-2 text-black border-red-600/30 hover:bg-red-600 hover:text-white px-2 py-1 w-1/2 mx-auto transition-all duration-300"
        >
          Agregar
        </button>
      </div>
    </>
  );
}
