import { menus } from "@/tools/bd";
import Menu from "./components/Menu";

function Carta() {
  return (
    <div className="mx-auto max-w-7xl my-10 px-10 md:px-10">
      <h1 className="text-xl lg:text-3xl font-semibold">CARTA DE PLATOS</h1>
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
        {menus.map((item) => (
          <Menu menuI={item} key={item.id + "dsd"} />
        ))}
      </section>
    </div>
  );
}

export default Carta;
