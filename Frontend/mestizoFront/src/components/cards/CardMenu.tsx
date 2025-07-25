import type { Carta } from "../../pages/carta/Carta";
interface Carta {
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string;
}
export const CardMenu = ({ nombre, precio, descripcion, imagen }: Carta) => {
  return (
    <div className="bg-gray-200 flex flex-col min-h-100 gap-6  rounded-3xl">
      <div className="flex w-full h-[12rem] bg-white">
        <img
          className="object-cover rounded-t-3xl w-full"
          src={imagen}
          alt={imagen}
        />
      </div>
      <div className="flex justify-between gap-x-4 px-6 font-bold text-[clamp(0.9rem,4vw,1.1rem)]">
        <h3>{nombre}</h3>
        <h3>{precio} EUR</h3>
      </div>
      <div className="flex p-6">
        <p>{descripcion}</p>
      </div>
    </div>
  );
};
