"use client";

import Carrito from "./Carrito";

interface Props {
  cerrarAside: () => void;
  abrirAside: boolean;
}

function MenuSecundario({ abrirAside, cerrarAside }: Props) {
  return (
    <aside
      className={`fixed inset-y-0 z-50  ${
        !abrirAside ? "right-0 left-0 md:right-0 md:left-3/4 " : "-right-96 "
      } bg-white border-l-2 border-red-600 transition-all duration-400 `}
    >
      <div className="px-10 py-10">
        <Carrito />
        <button
          onClick={cerrarAside}
          className="border-2 px-6 py-1 my-4 text-black hover:bg-black hover:text-white transition-all duration-300 "
        >
          Cerrar
        </button>
      </div>
    </aside>
  );
}

export default MenuSecundario;
