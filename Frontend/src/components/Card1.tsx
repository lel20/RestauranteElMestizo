import { Atributos } from "../interfaces/interfaz";
import "./Estilos/Card1.css";
export const Card1: React.FC<Atributos> = ({
  nombre,
  precio,
  imagen,
  disponibilidad,
  descripcion,
  nota,
}) => {
  return (
    <div className="card-1 ">
      <div className="w-full h-[200px] flex">
        <img className="rounded-t-lg object-cover object-center w-full h-full" style ={{backgroundImage: `url(${imagen})` }} src={imagen} alt={nombre} />
      </div>
      <div className="p-2 text-surface dark:text-white absolute">
        <h5 className="mb-2 text-xl font-medium leading-tight">{nombre}</h5>
        <p className="text-justify text-black/70">{descripcion}</p>
        <p className="text-red-500">{nota}</p>
        
      </div>
      <div className=" px-2 absolute bottom-0 right-0">
        <p className="my-4 text-right text-xl font-bold  ">
          {precio} €
        </p>
      </div>
    </div>
  );
};
