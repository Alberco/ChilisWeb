export interface Drink {
 id: string
 title: string
 price: number
 count: number
}

export interface Sauce {
 id: string
 title: string
 price: number
 count: number
}

export interface Menu {
 id: string
 title: string
 count: number
 price: number
 drinks: Drink[]
 sauces: Sauce[]
 total_price: number
 image: string
}

export interface CarritoCompra {
 compras: Menu[];
 total: number;
}