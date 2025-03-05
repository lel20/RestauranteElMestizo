import { Card } from "../components/Card"
import React, { useEffect, useState } from "react";
import './EstilosCSS/Entrantes.css'
import { Atributos} from "../interfaces/interfaz";
export const Entrante: React.FC = () =>{
  const [data, setData] = useState<Atributos[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.43.103:8000/entrantes/");
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
  return(
    <section className="entrantes py-10">
      <div className="entrantes-contenedor container gap-y-6 md:grid-cols-13">
        {data.map((item, id) => (
          <Card
            key={id} 
            nombre={item.nombre}
            precio={item.precio}
            imagen={item.imagen}
            disponibilidad={item.disponibilidad}
            nota={item.nota}
            descripcion={item.descripcion} />
        ))}
      </div>
    </section>
  )
}