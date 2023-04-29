import { Drink, Menu, Sauce } from "@/models"
import { createContext, useContext } from "react"

export interface ContextMenu {
 menu: Menu
 updateTotalA: (price: number) => void
 updateTotalD: (price: number) => void
 updateCountAumentar: () => void
 updateCountDecrementar: () => void
 updateDrinks: (drink: Drink, eliminar: boolean) => void
 updatPriceTotalA: (price: number) => void
 updatPriceTotalD: (price: number) => void
 updateMenuAll: (newMenu: Menu) => void
 updateSauces: (sauce: Sauce, eliminar: boolean) => void
}

export const MenuContext = createContext<ContextMenu>({
 "menu": {
   id: "sd",
   title: "",
   count: 0,
   price: 12,
   total_price: 0,
   drinks: [],
   sauces: [],
   image: ""
 },
 updateTotalA() {},
 updateTotalD() {},
 updateCountAumentar() {},
 updateCountDecrementar() {},
 updateDrinks() {},
 updatPriceTotalA() {},
 updatPriceTotalD() {},
 updateMenuAll() {},
 updateSauces() {}
})

export const useMenuContext = () => useContext(MenuContext);

