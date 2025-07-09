import type { CartaPlatos } from "../../../interfaces/interface";
import { useFetch } from "../../../hooks/useFetch";
import { BeatLoader } from "react-spinners";
import { CardMenu } from "../../../components/cards/CardMenu";
export const Entrantes = () => {
  const url = "http://192.168.1.202:8000/entrantes/";
  const { datos, loading, error } = useFetch<CartaPlatos[]>(url);
  if (loading)
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <BeatLoader color="#0087ff" />
      </div>
    );
  if (error)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p>{error}</p>
      </div>
    );

  return (
    <section className="flex flex-col  min-h-screen">
      <div className="container mx-auto h-screen flex flex-col justify-center items-center ">
        <h1 className="text-5xl font-playfair text-center">
          Conoce nuestra carta
        </h1>
        <p>Dsifruta de los sabores de Latino América</p>
      </div>
      <div
        className="container mx-auto grid grid-cols-1 md:grid-cols-custom-1 
                      lg:grid-cols-custom-2 p-4 gap-6"
      >
        {datos?.map((entrantes) => (
          <CardMenu
            key={entrantes.id}
            nombre={entrantes.nombre}
            precio={entrantes.precio}
            descripcion={entrantes.descripcion}
            imagen={entrantes.imagen}
          />
        ))}
      </div>
    </section>
  );
};
