import { Parallax } from "react-parallax";
import Eventos1 from "../../assets/eventos.png";
export const Eventos = () => {
  return (
    <section className="relative flex w-full mt-40 items-center justify-center h-[35rem] ">
      <Parallax
        className="min-h-screen w-full"
        bgImage={Eventos1}
        strength={200}
        bgImageStyle={{
          width: "100%",
          height: "100%",
          objetFit: "cover",
          backgroundPosition: "center",
        }}
      ></Parallax>
      <div className="container mx-auto flex justify-end-safe  absolute md:px-10">
        <div
          className="flex flex-col gap-y-6 w-full md:w-1/2 md:bg-white/30 
        h-[32rem] justify-center items-center px-6"
        >
          <h3 className="text-2xl">Relaiza tus evento con Nosotros</h3>
          <h2 className="text-3xl font-playfair">El Mestizo</h2>
          <button
            className="bg-black/90 h-10 w-30 text-white/90 flex items-center justify-center 
          hover:text-orange-500 hover:rounded"
          >
            <a href="infoeventos">Leer más</a>
          </button>
        </div>
      </div>
    </section>
  );
};
