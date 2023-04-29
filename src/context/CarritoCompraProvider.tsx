"use client";
import React, { ReactNode, useState } from "react";
import { CarritoCompraContex } from "./CarritoCompraContext";
import { CarritoCompra, Menu } from "@/models";
import { menus } from "@/tools/bd";

interface Props {
  children: ReactNode;
}

function CarritoCompraProvider({ children }: Props) {
  const initialState = {
    compras: [],
    total: 0,
  };

  const [comprasNew, setComprasNew] = useState<CarritoCompra>(initialState);

  const addCompra = (menu: Menu) => {
    setComprasNew((old) => ({
      ...old,
      compras: [...old.compras, menu],
    }));
  };

  const updateTotalCompra = () => {
    const total_compra = comprasNew.compras.reduce(
      (a, b) => a + b.total_price,
      0
    );
    setComprasNew((old) => ({
      ...old,
      total: total_compra,
    }));
  };

  return (
    <CarritoCompraContex.Provider
      value={{
        comprasNew,
        addCompra,
        updateTotalCompra,
      }}
    >
      {children}
    </CarritoCompraContex.Provider>
  );
}

export default CarritoCompraProvider;
