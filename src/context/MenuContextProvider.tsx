"use client";
import { ReactNode, useState } from "react";
import { MenuContext } from "./MenuContext";
import { Drink, Menu, Sauce } from "@/models";

interface Props {
  children: ReactNode;
}

export default function MenuProvider({ children }: Props) {
  const initialState: Menu = {
    id: "42",
    title: "Bembos2",
    count: 1,
    price: 14,
    total_price: 14,
    drinks: [],
    sauces: [],
    image: "",
  };

  const [menu, setMenu] = useState<Menu>(initialState);

  const updateDrinks = (bebida: Drink, eliminar: boolean) => {
    const newBebida = menu.drinks.map((item) =>
      item.id === bebida.id ? { ...item, count: bebida.count } : item
    );
    const existeBebida = menu.drinks.filter((items) => items.id == bebida.id);
    const drinksEliminate = menu.drinks.filter(
      (items) => items.id !== bebida.id
    );
    eliminar
      ? setMenu((old) => ({ ...old, drinks: drinksEliminate }))
      : existeBebida.length > 0
      ? setMenu((old) => ({ ...old, drinks: newBebida }))
      : setMenu((old) => ({ ...old, drinks: [...old.drinks, bebida] }));
  };

  const updateSauces = (sauce: Sauce, eliminar: boolean) => {
    const newSalsa = menu.sauces.map((item) =>
      item.id === sauce.id ? { ...item, count: sauce.count } : item
    );
    const existeSalsa = menu.sauces.filter((items) => items.id == sauce.id);
    const saucesEliminate = menu.sauces.filter(
      (items) => items.id !== sauce.id
    );
    eliminar
      ? setMenu((old) => ({ ...old, sauces: saucesEliminate }))
      : existeSalsa.length > 0
      ? setMenu((old) => ({ ...old, sauces: newSalsa }))
      : setMenu((old) => ({ ...old, sauces: [...old.sauces, sauce] }));
  };

  const updateTotalA = (price: number) => {
    menu.count >= 5
      ? null
      : setMenu((old) => ({ ...old, total_price: old.total_price + price }));
  };

  const updateTotalD = (price: number) => {
    menu.count <= 1
      ? null
      : setMenu((old) => ({ ...old, total_price: old.total_price - price }));
  };

  const updateCountAumentar = () => {
    console.log(menu);
    setMenu((old) => ({ ...old, count: old.count >= 5 ? 5 : old.count + 1 }));
  };

  const updateCountDecrementar = () => {
    setMenu((old) => ({ ...old, count: old.count <= 1 ? 1 : old.count - 1 }));
  };

  const updatPriceTotalA = (price: number) => {
    setMenu((old) => ({ ...old, total_price: old.total_price + price }));
  };

  const updatPriceTotalD = (price: number) => {
    setMenu((old) => ({ ...old, total_price: old.total_price - price }));
  };

  const updateMenuAll = (newMenu: Menu) => {
    setMenu(newMenu);
  };

  return (
    <MenuContext.Provider
      value={{
        menu,
        updateTotalA,
        updateTotalD,
        updateCountAumentar,
        updateCountDecrementar,
        updateDrinks,
        updatPriceTotalA,
        updatPriceTotalD,
        updateMenuAll,
        updateSauces,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
