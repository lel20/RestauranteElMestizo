import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import "./EstilosCSS/Raciones.css";
// Interfaces
import { Racion } from "../interfaces/interfaz";
export const Raciones: React.FC = () => {
  const [data, setData] = useState<Racion[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.43.103:8000");
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
    <section className="raciones">
      <div className="raciones-contenedor container">
        {data.map((item, id) => (
          <Card 
            key={id} 
            nombre={item.nombre}
            precio={item.precio}
            imagen={item.imagen}
            disponibilidad={item.disponibilidad} />
        ))}
      </div>
    </section>
  );
};
