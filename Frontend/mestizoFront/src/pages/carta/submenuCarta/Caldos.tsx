import { BeatLoader } from "react-spinners";
import type { CartaPlatos } from "../../../interfaces/interface";
import { useFetch } from "../../../hooks/useFetch";
import { CardMenu } from "../../../components/cards/CardMenu";

export const Caldos = () => {
  const url = "http://192.168.1.202:8000/sopas/";
  const { datos, loading, error } = useFetch<CartaPlatos[]>(url);
  if (loading) {
    return (
      <div className="flex w-full justify-center items-center h-screen">
        <BeatLoader color="#0087ff" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex w-full justify-center items-center h-screen">
        <p>{error}</p>
      </div>
    );
  }

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
        {datos?.map((tipicos) => (
          <CardMenu
            key={tipicos.id}
            imagen={tipicos.imagen}
            nombre={tipicos.nombre}
            precio={tipicos.precio}
            descripcion={tipicos.descripcion}
          />
        ))}
      </div>
    </section>
  );
};
