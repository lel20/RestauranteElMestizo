import { Racioness } from "../data/Raciones";
export const Bebidas = () => {
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
          <div className="hidden md:flex items-center justify-center min-h-screen w-50">
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

          <div className="flex flex-col w-full h-full items-center py-20 gap-y-2">
            <h2 className="text-amber-600 text-4xl font-playfair mb-10">
              Bebidas
            </h2>
            {Racioness.map((raciones, index) => (
              <div
                key={index}
                className="flex px-4 h-full w-full md:w-[70%] justify-between text-gray-300"
              >
                <p className="whitespace-nowrap">{raciones.nombre}</p>
                <div className="flex-1 border-b-2 border-dotted border-gray-300 mx-2 self-center"></div>
                <p className="whitespace-nowrap">
                  {raciones.precio.toFixed(2)} €
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
