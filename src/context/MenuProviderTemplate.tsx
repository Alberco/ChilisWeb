"use client"
import MenuProvider from "@/context/MenuContextProvider"
import { ReactNode } from "react"

interface Props {
 children: ReactNode
}

function MenuProviderTemplate({children}: Props) {
  return (
    <MenuProvider>
      {children}
    </MenuProvider>
  )
}

export default MenuProviderTemplate