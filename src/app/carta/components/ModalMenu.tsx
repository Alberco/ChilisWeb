"use client";
import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Menu } from "@/models";
import { useMenuContext } from "@/context/MenuContext";
import Extra from "./Extra";
import { bebidas, salsas } from "@/tools/bd";
import { useCarritoContext } from "@/context/CarritoCompraContext";

interface Props {
  open: boolean;
  close: () => void;
}

function ModalMenu({ open, close }: Props) {
  const {
    menu,
    updateTotalA,
    updateTotalD,
    updateCountAumentar,
    updateCountDecrementar,
  } = useMenuContext();

  const { addCompra } = useCarritoContext();

  const agregarCarrito = () => {
    addCompra(menu), close();
  };

  const aumentarTotalC = () => {
    updateTotalA(menu.price);
    updateCountAumentar();
  };

  const decrementarTotalC = () => {
    updateTotalD(menu.price);
    updateCountDecrementar();
  };

  return (
    <Transition
      show={open}
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Dialog onClose={close} className="fixed inset-0 overflow-y-auto">
        <Dialog.Overlay className="fixed inset-0 backdrop-blur-md bg-gray-500/30" />
        <div className="relative min-h-screen flex items-center justify-center text-white space-x-2">
          <article className="bg-white w-full my-10 md:my-0  lg:w-1/2 rounded-xl py-10 md:py-20 mx-10 lg:mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2">
            <section className="text-black px-10 flex flex-col justify-between ">
              <div>
                <p className="text-xl font-bold w-full md:w-8/12 py-2">
                  {menu.title}
                </p>
                <p>Precio individual : S/.{menu.price}</p>
                <p>
                  Precio total:
                  <span> S/.{menu.total_price}</span>
                </p>
              </div>
              <div className="">
                <div className="flex gap-4 my-4 items-center">
                  <button
                    onClick={aumentarTotalC}
                    className="border-2 px-4 py-1 text-2xl hover:bg-gray-200 transition-all duration-500"
                  >
                    +
                  </button>
                  <p>{menu.count}</p>
                  <button
                    onClick={decrementarTotalC}
                    className="border-2 px-4 py-1 text-2xl hover:bg-gray-200 transition-all duration-500"
                  >
                    -
                  </button>
                </div>
              </div>
            </section>
            <section className="text-black px-10 md:pr-10 md:pl-0  overflow-y-scroll md:overflow-y-auto">
              <p className="text-xl font-bold pb-4">Bebidas </p>
              {bebidas.map((item) => (
                <Extra bebida={item} key={item.id + "dsd12"} drink={true} />
              ))}
              <p className="text-xl font-bold pb-4">Salsas </p>
              {salsas.map((item) => (
                <Extra bebida={item} key={item.id + "dsd123"} sauce={true} />
              ))}
            </section>
            <section className="flex gap-4 mt-10 px-8 md:px-6 text-black justify-center col-span-1  md:col-span-2">
              <button
                onClick={close}
                className="border-2 border-black/60 text-md font-bold px-2 md:px-4 py-1 md:py-2 hover:bg-red-600 hover:text-white transition-all duration-500"
              >
                cerrar
              </button>
              <button
                onClick={agregarCarrito}
                className="border-2 border-black/60 text-md px-2 md:px-4 py-1 md:py-2 font-bold  hover:bg-red-600 hover:text-white transition-all duration-500"
              >
                Agregar al Carrito
              </button>
            </section>
          </article>
        </div>
      </Dialog>
    </Transition>
  );
}

export default ModalMenu;
