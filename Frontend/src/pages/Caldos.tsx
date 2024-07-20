import { useEffect, useState } from "react";
import { Atributos } from "../interfaces/interfaz";
import { Card1 } from "../components/Card1";
import './EstilosCSS/Caldos.css'

export const Caldos: React.FC = () => {
  const [data, setData] = useState<Atributos[]>([]);
  useEffect(() => {
    const caldos = async () => {
      try {
        const response = await fetch("http://192.168.43.11:8000/caldos/");
        if (!response.ok) throw new Error("Fallo al otener los datos");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error en el feth de datos", error);
      }
    };
    caldos();
  }, []);
  return (
    <section className="bg-slate-100/50 caldos py-10">
      <div className="caldos-contenedor container gap-y-6 md:grid-cols-13 md:px-32">
        {data.map((item, id) => (
          <Card1
            key={id}
            nombre={item.nombre}
            precio={item.precio}
            disponibilidad={item.disponibilidad}
            imagen={item.imagen}
            descripcion={item.descripcion}
            nota={item.nota}
          />
        ))}
      </div>
    </section>
  );
};
