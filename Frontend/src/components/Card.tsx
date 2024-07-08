import { Racion } from "../interfaces/interfaz";

export const Card: React.FC<Racion> = ({ nombre, precio, imagen,disponibilidad }) => {
  return (
    <>
      <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
        <a href="#!">
          <img
            className="rounded-t-lg"
            src={imagen}
            alt={nombre}
          />
        </a>
        <div className="p-6 text-surface dark:text-white">
          <h5 className="mb-2 text-xl font-medium leading-tight">{nombre}</h5>
          <p className="mb-4 text-base">
            {precio.toFixed(2)}
          </p>
        </div>
      </div>
    </>
  );
};
