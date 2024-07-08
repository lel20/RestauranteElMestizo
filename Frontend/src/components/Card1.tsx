import { Entrantes } from "../interfaces/interfaz";
export const Card1: React.FC<Entrantes> = ({
  nombre,
  precio,
  imagen,
  disponibilidad,
  descripcion,
  nota,
}) => {
  return (
    <>
      <div className="block rounded-lg  gap-8 shadow-secondary-1 dark:bg-surface-dark border shadow">
        <a href="#!">
          <img className=" rounded-t-lg h-[240px]" src={imagen} alt={nombre} />
        </a>
        <div className="p-6 text-surface dark:text-white">
          <h5 className="mb-2 text-xl font-medium leading-tight">{nombre}</h5>
          <p className="text-justify text-black/70">{descripcion}</p>
          <p className="my-4 text-right text-xl font-bold  ">{precio.toFixed(2)} €</p>
        </div>
        <div className="p-6 ">
          <p className="text-red-500">{nota}</p>
        </div>
      </div>
    </>
  );
};
