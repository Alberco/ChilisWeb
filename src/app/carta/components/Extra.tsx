"use client";
import { useMenuContext } from "@/context/MenuContext";
import { Drink, Sauce } from "@/models";
import React, { useState } from "react";

interface Props {
  bebida: Drink | Sauce;
  drink?: boolean;
  sauce?: boolean;
}

function Extra({ bebida, drink, sauce }: Props) {
  const initialBebida = {
    id: bebida.id,
    title: bebida.title,
    count: bebida.count,
    price: bebida.price,
  };

  const [newBebida, setNewBebida] = useState<Drink | Sauce>(initialBebida);
  const { updatPriceTotalA, updatPriceTotalD, updateDrinks, updateSauces } =
    useMenuContext();

  const [count, setCount] = useState(0);

  const updateCountBebidaI = () => {
    count >= 5
      ? null
      : (setNewBebida((old) => ({ ...old, count: old.count + 1 })),
        setCount((old) => old + 1),
        updatPriceTotalA(bebida.price),
        drink
          ? updateDrinks(newBebida, false)
          : updateSauces(newBebida, false));
  };

  const updateCountBebidaD = () => {
    count < 0 || count == 0
      ? drink
        ? updateDrinks(newBebida, true)
        : updateSauces(newBebida, true)
      : (setNewBebida((old) => ({ ...old, count: old.count - 1 })),
        setCount((old) => old - 1),
        updatPriceTotalD(bebida.price),
        drink
          ? updateDrinks(newBebida, false)
          : updateSauces(newBebida, false));
  };

  console.log(newBebida);

  return (
    <article className="flex justify-between gap-4 my-2">
      <p>{newBebida.title}</p>
      <div className="flex gap-4 justify-center">
        <button
          className="border-2 px-2 md:px-4 py-1 md:py-2 text-md hover:bg-gray-200 transition-all duration-500"
          onClick={updateCountBebidaI}
        >
          +
        </button>
        <p>{count}</p>
        <button
          className="border-2 px-2 md:px-4 py-1 md:py-2 text-md hover:bg-gray-200 transition-all duration-500"
          onClick={updateCountBebidaD}
        >
          -
        </button>
      </div>
    </article>
  );
}

export default Extra;
