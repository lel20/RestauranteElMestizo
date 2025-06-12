import { Parallax } from "react-parallax";

import Parallax1 from "../../assets/Parallax_1.jpg";
import Parallax2 from "../../assets/Parallax-2.jpg";
import { NavLink } from "react-router";
export const Nosotros = () => {
  return (
    <section
      id="nosotros"
      className=" w-full min-h-screen pb-20 lg:pt-20 bg-gray-50"
    >
      <div className="container mx-auto flex flex-col  md:flex-row-reverse md:justify-center md:items-center gap-y-8">
        <div className="relative hidden lg:block min-h-screen lg:w-1/3">
          {" "}
          <Parallax
            className="min-h-screen"
            bgImage={Parallax1}
            strength={200}
            bgImageStyle={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              backgroundPosition: "center",
            }}
          ></Parallax>
          <div className="absolute flex inset-0 bg-black/70 z-10"></div>
        </div>
        <div className="md:w-1/2 lg:w-1/3 text-gray-600 flex flex-col justify-center items-center gap-y-10 px-10 ">
          <h2 className="font-playfair text-3xl md:text-[clamp(2rem,3vw,2rem)] text-blue-800 ">
            Sobre Nosostro
          </h2>
          <p className=" text-lg md:text-[clamp(0.5rem,1.5vw,1rem)] leading-relaxed ">
            El Mestizo nació del encuentro entre cocineros y soñadores de
            distintas tierras andinas. Un equipo multicultural con raíces en{" "}
            <strong>Colombia, Ecuador, Perú, Venezuela y Bolivia</strong>, unido
            por un mismo anhelo: dar vida a una cocina que hable de todos.
          </p>

          <blockquote className="italic text-amber-700 border-l-4 border-amber-600 pl-4 max-w-3xl">
            “No cocinamos solo comida, cocinamos identidad.”
          </blockquote>
          <button className="bg-black w-30 h-10 cursor-pointer text-white hover:rounded hover:text-orange-500">
            <NavLink to="/masnosotros"> Leer más</NavLink>
          </button>
        </div>
        <div className="md:w-1/2 lg:w-1/3 h-[20rem] md:min-h-screen">
          {""}
          <Parallax
            className="h-[20rem] md:min-h-screen"
            bgImage={Parallax2}
            strength={200}
            bgImageStyle={{
              width: "100vw",
              height: "100vh",
              objetFit: "cover",
              backgroundPosition: "center",
            }}
          ></Parallax>
        </div>
      </div>
    </section>
  );
};
