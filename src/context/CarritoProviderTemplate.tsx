"use client";
import { ReactNode } from "react";
import CarritoCompraProvider from "./CarritoCompraProvider";

interface Props {
  children: ReactNode;
}

function CarritoProviderTemplate({ children }: Props) {
  return <CarritoCompraProvider>{children}</CarritoCompraProvider>;
}

export default CarritoProviderTemplate;
