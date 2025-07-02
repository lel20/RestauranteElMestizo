import type { CartaPlatos } from "../../interfaces/interface";
import { useFetch } from "../../hooks/useFetch";
import { BeatLoader } from "react-spinners";
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
      <div className="min-h-screen w-full">
        <div className="container flex mx-auto min-h-screen bg-black/80 w-full">
          <div className="hidden md:flex items-center justify-center min-h-screen w-1/6">
            <h1 className="text-gray-300 text-7xl flex  transform rotate-90 origin-center">
              <p className="mx-6">
                <span className="mx-2">E</span>
                <span className="mx-2">L</span>
              </p>

              <span className="mx-4">M</span>
              <span className="mx-4">E</span>
              <span className="mx-4">S</span>
              <span className="mx-4">T</span>
              <span className="mx-4">I</span>
              <span className="mx-4">Z</span>
              <span className="mx-4">O</span>
            </h1>
          </div>

          <div className="flex flex-col w-full h-full items-center  py-20 gap-y-2">
            <h2 className="text-amber-600 text-4xl font-playfair mb-10">
              Entrantes
            </h2>
            {datos?.map((entrantes) => (
              <div
                key={entrantes.id}
                className="flex flex-col px-4 h-full w-full md:w-[70%] justify-between text-gray-300"
              >
                <div className="flex text-gray-300 items-center">
                  <p className="whitespace-nowrap font-semibold">
                    {entrantes.nombre}
                  </p>
                  <div className="flex-grow border-b-2 border-dotted border-gray-300 mx-2 self-center"></div>
                  <p className="whitespace-nowrap font-semibold">
                    {entrantes.precio} €
                  </p>
                </div>

                <p className="text-gray-400 mt-1 w-[92%] break-words text-justify">
                  {entrantes.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
