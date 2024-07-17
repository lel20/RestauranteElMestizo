import { useEffect, useState } from "react";
import { Card1 } from "../components/Card1";
import { Atributos } from "../interfaces/interfaz";

export const Tipicos: React.FC = () => {
  const [data, setData] = useState<Atributos[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.43.11:8000/tipicos/");
        if (!response.ok) {
          throw new Error("fallo al obtener los datos");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <section className="entrantes py-10">
      <div className="entrantes-contenedor container gap-y-6">
        {data.map((item, id) => (
          <Card1
            key={id}
            nombre={item.nombre}
            precio={item.precio}
            descripcion={item.descripcion}
            imagen={item.imagen}
            nota={item.nota}
            disponibilidad={item.disponibilidad}
          />
        ))}
      </div>
    </section>
  );
};
