import { useEffect, useState } from "react"
import { Atributos } from "../interfaces/interfaz"
import { Card1 } from "../components/Card1"

export const Batidos:React.FC=()=>{
  const [data, setData]=useState<Atributos[]>([])
  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const response=await fetch("http://192.168.43.11:8000/batidos/")
        if(!response)
          throw Error("Error al obtener los datos")
        const dataJson= await response.json();
        setData(dataJson);
      }catch(error){
        console.error("Error en el fetch de datos", error)
      }
    }
    fetchData();
  },[])
  return(
    <section>
      <div>
        {
          data.map((item,id)=>(
            <Card1
            key={id}
            nombre={item.nombre}
            precio={item.precio}
            descripcion={item.descripcion}
            imagen={item.nombre}
            disponibilidad={item.disponibilidad}
            nota={item.nota}
            
            
            />

          ))
        }
      </div>
    </section>
  )
}