import FotoMenu from "../assets/menu.png";
import Menufoto from "../assets/Menufoto.jpg";
export const Menu = () => {
  return (
    <>
      <section className="min-h-screen w-full  flex items-center justify-center">
        <div className="relative h-screen w-full flex items-center justify-center">
          <div className="absolute left-0 w-1/2 h-screen flex items-center justify-center px-4 ">
            <h1 className=" text-[clamp(3rem,10vw,12rem)]">Menú del día</h1>
          </div>
          <div className=" absolute right-0 w-1/2 h-screen flex items-center bg-amber-400 overflow-hidden">
            <img
              src={FotoMenu}
              alt={FotoMenu}
              className="w-full h-screen object-contain md:object-cover object-left md:translate-x-20 "
            />
          </div>
          <div className="absolute text-[clamp(0.5rem,5vw,1.5rem)] bg-gray-300/60 w-[90%] md:w-[25%] p-6 bottom-15 md:bottom-[10rem] rounded  ">
            <p>
              "Deléitate cada día con un menú renovado, elaborado con pasión y
              los mejores ingredientes."
            </p>
          </div>
        </div>
      </section>
      <section
        className=" w-full min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${Menufoto})` }}
      >
        <div className="container mx-auto flex flex-col w-[90%] md:w-[60%] lg:w-[40%] min-h-[50rem]">
          <div className="flex flex-col w-full bg-pink-200/80 justify-center items-center py-8 gap-2">
            <div className="w-full flex flex-col justify-center items-center text-center">
              <h1 className="font-Arvo text-6xl text-orange-500">El Mestizo</h1>
              <h2 className="font-dacing text-4xl text-red-700">Restaurante</h2>
              <h2 className="font-Parisiene text-7xl mt-5">Menú</h2>
              <h3 className="w-[90%] md:w-[50%] font-dacing text-2xl -rotate-12 flex justify-end">
                Lunes
              </h3>
            </div>
            <div className="flex flex-col min-h-[10rem] md:flex-row w-full gap-2 p-2 md:px-12">
              <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
                <h2 className="font-Arvo text-2xl">Primeros</h2>
                <div className="w-full text-center md:text-start p-4">
                  <ul className="md:list-disc px-2 w-full ">
                    <li>Caldo de pata</li>
                    <li>Mondongo</li>
                    <li>Causa limeña</li>
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-1/2  flex flex-col items-center md:items-start">
                <h2 className="font-Arvo text-2xl">Segundos</h2>
                <div className="w-full text-center md:text-start flex justify-center p-4">
                  <ul className="md:list-disc px-2 w-full">
                    <li className="">Lengua en salsa rosa con arroz</li>
                    <li>Arroz con pollo</li>
                    <li>Sobrebarrriga</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <p className="text-2xl">Sólo</p>
              <h2 className="text-6xl font-Arvo-1">11.90 €</h2>
              <h3 className="text-3xl font-Parisiene text-orange-500 -rotate-6">
                Icluido bebida y postre
              </h3>
            </div>
            <div className=" w-full font-Parisiene text-2xl px-2 md:px-12">
              Localizanos en :
            </div>
            <div className="w-full md:w-[50%] px-6">
              <ul className="flex flex-col gap-y-4">
                <li>
                  Arabial, 45,18004, Ronda, Centro Comercial Neptuno, Granada,
                  Primera planta
                </li>
                <li>Calle sol, 9, 18100, Armilla. Granada</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
