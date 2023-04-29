import { Menu } from "@/models"

export interface MenuIndividual {
 id: string
 price: number
 title: string
 image: string
 count: number
 drinks?: BebidaIndividual[]
 sauces?: SalsaIndividual[]
 total_price?: number
}
export interface BebidaIndividual {
 id: string
 price: number
 title: string
 count: number
}
export interface SalsaIndividual {
 id: string
 price: number
 title: string
 count: number
}

export const menus:Menu[] = [
 {
   price: 18,
   count: 1,
   id: "1",
   title: "Pressure cooker refried beans",
      drinks: [],
   sauces: [],
   total_price: 18,
   image: "https://apipics.s3.amazonaws.com/mexican_api/1.jpg",

 },

 {
   price: 12,
   count: 1,
   id: "2",
   title: "Black bean chilli soup with corn dumplings",
  drinks: [],
   sauces: [],
   total_price: 12,
   image: "https://apipics.s3.amazonaws.com/mexican_api/2.jpg",
 },

 {
   price: 12,
   count: 1,
   id: "3",
   title: "Fishcake tacos",
    drinks: [],
   sauces: [],
   total_price: 12,
   image: "https://apipics.s3.amazonaws.com/mexican_api/3.jpg",
 },

 {
   price: 12,
   count: 1,
   id: "4",
   title: "Black bean and chicken burritos",
      drinks: [],
   sauces: [],
   total_price: 12,
   image: "https://apipics.s3.amazonaws.com/mexican_api/4.jpg",
 },

 {
   price: 12,
   count: 1,
   id: "5",
   title: "Pork tacos with sweetcorn and feta",
      drinks: [],
   sauces: [],
   total_price: 12,
   image: "https://apipics.s3.amazonaws.com/mexican_api/5.jpg",
 },

 {
   price: 12,
   count: 1,
   id: "6",
   title: "Taco slaw with pink pickled onions",
      drinks: [],
   sauces: [],
   total_price: 12,
   image: "https://apipics.s3.amazonaws.com/mexican_api/6.jpg",
 },

 {
   price: 12,
   count: 1,
   id: "7",
   title: "Smoky chipotle tofu with tomatoes and avocado",
      drinks: [],
   sauces: [],
   total_price: 12,
   image: "https://apipics.s3.amazonaws.com/mexican_api/7.jpg",
 },

 {
   price: 12,
   count: 1,
   id: "8",
   title: "Chilaquiles with fresh tomatillo salsa",
      drinks: [],
   sauces: [],
   total_price: 12,
   image: "https://apipics.s3.amazonaws.com/mexican_api/8.jpg",
 },

 {
   price: 12,
   count: 1,
   id: "9",
   title: "Chipotle baked eggs",
      drinks: [],
   sauces: [],
   total_price: 12,
   image: "https://apipics.s3.amazonaws.com/mexican_api/9.jpg",
 },

 {
   price: 12,
   count: 1,
   id: "10",
   title: "Venison tacos with grilled spring onions and peanut salsa",
      drinks: [],
   sauces: [],
   total_price: 12,
   image: "https://apipics.s3.amazonaws.com/mexican_api/10.jpg",
 },
 {
   price: 12,
   count: 1,
   id: "11",
   title: "Easy huevos rancheros",
      drinks: [],
   sauces: [],
   total_price: 12,
   image: "https://apipics.s3.amazonaws.com/mexican_api/11.jpg",
 },

 {
   price: 12,
   count: 1,
   id: "12",
   title: "Turkey pozole",
      drinks: [],
   sauces: [],
   total_price: 12,
   image: "https://apipics.s3.amazonaws.com/mexican_api/12.jpg",
 },
];

export const bebidas: BebidaIndividual[] = [
 {
   id: "1d",
   title: "Agua",
   count: 1,
   price: 1,
 },
 {
   id: "2d",
   title: "Inka Kola",
   count: 1,
   price: 2.
 },
 {
   id: "3d",
   title: "Coca Cola",
   count: 1,
   price: 3.
 },
];

export const salsas: SalsaIndividual[] = [
 {
   id: "1df3232",
   title: "Mayonesa",
   count: 1,
   price: 1.
 },
 {
   id: "2d32f",
   title: "Ocopa",
   count: 1,
   price: 2.
 },
 {
   id: "3df3232",
   title: "Huancaina",
   count: 1,
   price: 3.
 },
];
