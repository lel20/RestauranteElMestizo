import { Parallax } from "react-parallax";
import Eventos1 from "../../assets/eventos.jpg";
import Meztizo from "../../assets/mestizo.jpg";
export const Eventos = () => {
  return (
    <section className="relative flex justify-center  items-center w-full mt-40 min-h-[30rem] md:min-h-screen">
      <Parallax
        className="min-h-[50rem] md:min-h-screen w-full"
        bgImage={Eventos1}
        strength={200}
        bgImageStyle={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          backgroundPosition: "center",
        }}
      ></Parallax>
      <div className="container mx-auto flex items-center justify-center gap-4 absolute md:px-10 md:min-h-screen">
        <div
          style={{ backgroundImage: `url(${Meztizo})` }}
          className="hidden md:block md:w-1/2 h-[25rem] bg-center bg-cover relative"
        >
          <div className="absolute inset-0 bg-black/30 w-full h-full"></div>
        </div>
        <div className="flex flex-col w-full md:w-1/2 rounded bg-white/70 h-[25rem] px-6 ">
          <div className="h-full w-full flex flex-col items-end justify-center gap-y-4">
            <h3 className="text-2xl">Realiza tus evento en </h3>
            <h2 className="text-4xl font-playfair">El Mestizo</h2>
            <p className="w-[70%] text-end">
              Organiza tus momentos especiales con nosostros: cumpleaños, bodas,
              aniversarios y cualquier celebración.
            </p>
            <button
              className="bg-black/90 h-10 w-30 text-white/90 flex items-center justify-center 
          hover:text-orange-500 hover:rounded"
            >
              <a href="infoeventos">Leer más</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
