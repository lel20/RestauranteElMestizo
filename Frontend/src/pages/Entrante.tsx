import { Card1 } from "../components/Card1"
import React, { useEffect, useState } from "react";
import './EstilosCSS/Entrantes.css'
import { Entrantes} from "../interfaces/interfaz";
export const Entrante: React.FC = () =>{
  const [data, setData] = useState<Entrantes[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.43.11:8000/entrantes/");
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
      <div className="entrantes-contenedor container gap-y-6">
        {data.map((item, id) => (
          <Card1
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