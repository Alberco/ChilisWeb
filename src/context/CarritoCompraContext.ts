import {  CarritoCompra, Menu } from "@/models";
import { createContext, useContext } from "react";


export interface ContextCarrito {
 comprasNew: CarritoCompra
 addCompra: (menu: Menu) => void
 updateTotalCompra: () => void
}

export const CarritoCompraContex = createContext<ContextCarrito>({
 comprasNew: {
  compras: [],
  total: 0
 },
 addCompra() {},
 updateTotalCompra(){}
})

export const useCarritoContext = () => useContext(CarritoCompraContex)