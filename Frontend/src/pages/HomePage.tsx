//Estilos HomePage
import { Link } from "react-router-dom";
import "./EstilosCSS/HomePage.css";
import Chef from "../assets/chef.png";
import Galeria1 from "../assets/galeria1.jpg";
import Galeria2 from "../assets/galeria2.jpg";
import Galeria3 from "../assets/galeria3.jpg";
import Galeria4 from "../assets/galeria4.png";
import Galeria5 from "../assets/galeria5.jpg";
import Galeria6 from "../assets/galeria6.png";
import Galeria7 from "../assets/galeria7.png";
import Galeria8 from "../assets/galeria8.png";
import Galeria9 from "../assets/galeria9.png";
import Galeria10 from "../assets/galeria10.jpg";
import Galeria11 from "../assets/galeria11.png";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "./src/assets/Fondo.jpg",
  "./src/assets/ComidaLatina.jpg",
  "./src/assets/contacto.jpg",

];
export const HomePage = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="principal-Home">
      <div className="section-container1">
        <div className="absolute inset-0 overflow-hidden ">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={index}
              src={images[index]}
              alt="Fondo"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ x: direction * 100 + "%" }}
              animate={{ x: "0%" }}
              exit={{ x: -direction * 100 + "%" }}
              transition={{ duration: 2 }}
            />
          </AnimatePresence>
          <section className="section1-Home">
            <div className="contenedor-Home">
              <h1 className="title2-Home md:text-[10vw] md:text-center">
                EL MESTIZO
              </h1>
              <div className="botones">
                <Link className="boton-Home md:w-[15rem]" to="/menu">
                  Platos a la Carta
                </Link>
                <Link className="boton-Home md:w-[15rem]  hover:bg-blue-950" to="/menudia">
                  Menú del día
                </Link>
              </div>
            </div>
            <div className="description-Home md:text-center">
              <p className="description-Text md:w-2/4 md:text-[clamp(1.2rem,2.5vw,1.8rem)]">
                Sumérgete en la auténtica cocina latina tradicional en un ambiente acogedor y lleno de vida, donde cada platillo está preparado con esmero.
              </p>
              <Link className="boton-Pregunta md:w-[18rem] " to="/menu">
                Platos a la Carta
              </Link>
            </div>
          </section>
        </div>
      </div>
      {/* ------------------------------------------------------------ */}


      <section className="carta">
        <h1 className="titulo-carta md:text-6xl">Platos a la carta</h1>
        <p className="carta-descripcion md:w-2/4 md:text-[clamp(1.2rem,2.5vw,1.8rem)]">Descubre nuestra extensa variedad de comida latina, diseñada para hacerte sentir como en casa. Deléitate con nuestros exquisitos platos y vive una experiencia culinaria única.</p>
        <div className="contenedor-carta container ">
          <Link className="opciones-card opcion-1" to="/raciones">
            <span>Raciones</span>
          </Link>
          <Link className="opciones-card opcion-2" to="/entrantes">
            <span>Entrantes</span>
          </Link>
          <Link className="opciones-card opcion-3" to="/caldos">
            <span>Caldos y Sopas</span>
          </Link>
          <Link className="opciones-card opcion-4" to="">
            <span>Ensaladas</span>
          </Link>
          <Link className="opciones-card opcion-5" to="/tipicos">
            <span>Platos Típicos</span>
          </Link>
          <Link className="opciones-card" to="/batidos"></Link>
          <Link className="opciones-card" to="/batidos">
            <span>Batidos y Jugos</span>
          </Link>
          <Link className="opciones-card" to="">
            <span>Resfrescos</span>
          </Link>
          <Link className="opciones-card" to="">
            <span>Resfrescos Importados</span>
          </Link>
          <Link className="opciones-card" to="">
            <span>Tercios</span>
          </Link>
          <Link className="opciones-card" to="">
            <span>Jarras</span>
          </Link>
          <Link className="opciones-card opcion-11" to="">
            <span className="absolute">Vinos</span>
          </Link>
        </div>
      </section>



      {/* -------------------------------------------------------------- */}
      <section className="filosofia">
        <div className="contenedor-filosofia md:grid-cols-2 container m-auto">
          <div className=" w-[100%] flex flex-col justify-center bg-black p-4">
            <h2 className="filosofia-titulo">Nuestra Filosofía</h2>
            <p className="parrafo1-filosofia">
              "Cocinamos con amor para alimentar tu alma"
            </p>
            <p className="parrafo2-filosofia">
              En nuestro restaurante , cada plato es una expresión de amor y
              dedicación. Creemos que la comida tiene el poder de nutrir no solo
              el cuerpo, si no tambien el espiritu."
            </p>
          </div>
          <img className="md:w-[80%]" src={Chef} alt="" />
        </div>
      </section>




      {/* -------------------------------------------------------------- */}
      <section className="nosotros">
        <div className="contenedor-nosotros md:grid-cols-2 container m-auto">
          <div>
            <h2 className="nosotros-Title">Sobre Nosotros</h2>
            <img src="" alt="mestizo" />
          </div>

          <div>
            <p className="section3-description">
              El térmio MESTIZO fue aplicado por españa en el siglo XVI para
              denominar a unas de las "castas". Proviene del latín Mixticius y
              resulta de la combinacion de un Blanco Europeo y un Aborigene
              Americano{" "}
            </p>
            <p className="section3-description">
              El MESTIZO es más que un restaurante; es una experiencia
              gastronómica que te transportará a los vibrantes sabores y colores
              de América Latina. En El MESTIZO, nos enorgullecemos de ofrecer
              una auténtica selección de platos latinos cuidadosamente
              elaborados, cada uno inspirado en las tradiciones culinarias
              únicas de países como Colombia, Venezuela, Ecuador y mucho más.
            </p>
            <p className="section3-description">
              En El Mestizo, la pasión por la comida se fusiona con el arte de
              la hospitalidad. Nuestro equipo está comprometido en brindarte una
              experiencia gastronómica excepcional, desde el momento en que
              cruzas nuestras puertas hasta el último sorbo de tu bebida.
            </p>
            <p className="section3-description">
              Ya sea que estés celebrando una ocasión especial, disfrutando de
              una comida en familia o simplemente buscando una escapada
              culinaria, estamos aquí para hacerte sentir como en casa. ¡Ven y
              únete a nosotros en este viaje culinario por América Latina en El
              Mestizo!
            </p>
          </div>
        </div>
      </section>




      <section className="galeria">
        {/* <h1 className="titulo-galeria md:w-3/6 md:text-6xl">Galería</h1> */}
        <div className="contenedor-galeria container">
          <img className="galeria-imagen md:w-full" src={Galeria1} alt="" />
          <img className="galeria-imagen md:w-full" src={Galeria2} alt="" />
          <img className="galeria-imagen md:w-full" src={Galeria3} alt="" />
          <img className="galeria-imagen md:w-full" src={Galeria4} alt="" />
          <img className="galeria-imagen md:w-full" src={Galeria5} alt="" />
          <img className="galeria-imagen md:w-full" src={Galeria6} alt="" />
          <img className="galeria-imagen md:w-full" src={Galeria7} alt="" />
          <img className="galeria-imagen md:w-full" src={Galeria8} alt="" />
          <img className="galeria-imagen md:w-full" src={Galeria9} alt="" />
          <img className="galeria-imagen md:w-full" src={Galeria10} alt="" />
          <img className="galeria-imagen md:w-full" src={Galeria11} alt="" />
        </div>
      </section>
    </div>
  );
};
