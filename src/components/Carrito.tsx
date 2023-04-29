"use client";
import { useCarritoContext } from "@/context/CarritoCompraContext";
import { Cart } from "@/icons/User";

function Carrito() {
  const { comprasNew } = useCarritoContext();

  return (
    <article>
      <p className="text-2xl font-bold my-2 flex gap-2">
        <span>
          <Cart />
        </span>
        Carrito de compra
      </p>
      <ul className="flex flex-col justify-center gap-4">
        {comprasNew.compras.length === 0 ? (
          <li key={"dskde564"}>
            <p className="font-bold">No existe compras</p>
          </li>
        ) : (
          comprasNew.compras.map((item) => (
            <li className="flex gap-4" key={item.id + "dsd234"}>
              <p className="text-md max-w-[200px]">{item.title}</p>
              <span>+ S/.{item.total_price}</span>
            </li>
          ))
        )}
      </ul>
      <p className="my-3 font-extrabold">Total : S/.{comprasNew.total}</p>
    </article>
  );
}

export default Carrito;
