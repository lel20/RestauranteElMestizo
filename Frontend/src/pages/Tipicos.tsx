import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Atributos } from "../interfaces/interfaz";
import './EstilosCSS/Tipicos.css'

export const Tipicos: React.FC = () => {
  const [data, setData] = useState<Atributos[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.43.103:8000/tipicos/");
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
    <section className="tipicos py-10">
      <div className="tipicos-contenedor container gap-y-6 md:grid-cols-13">
        {data.map((item, id) => (
          <Card
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
