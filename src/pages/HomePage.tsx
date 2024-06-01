//Estilos HomePage
import { Link } from "react-router-dom";
import "./EstilosCSS/HomePage.css";
import { CardMenus } from "../components/CardMenus";
import Chef from "../assets/chef.png";
export const HomePage = () => {
  return (
    <div className="principal-Home">
      {/* ------------------------------------------------------------------ */}
      <section className="section1-Home">
        <div className="contenedor-Home">
          <h2 className="title1-Home md:text-[3rem] md:text-center">
            Bienvenido a Nuestro Restaurante
          </h2>
          <h1 className="title2-Home md:text-[5rem] md:text-center">
            EL MESTIZO
          </h1>
          <p className="description-Home md:text-center">
            Saborea la auténtica cocina latina tradicional en un ambiente
            acogedor, vibrante y con buena música
          </p>
        </div>
        <Link className="boton-Home md:w-[18rem]" to="/menu">
          Explora Los Platos a la Carta
        </Link>
      </section>
      {/* ------------------------------------------------------------ */}
      <section className="section2-Home">
        <h1 className="title-S2">Menu del Día</h1>
        <div className=" contenedor-S2">
          <CardMenus />
          <CardMenus />
        </div>
      </section>
      {/* -------------------------------------------------------------- */}
      <section className="filosofia bg-black/90">
        <div className="contenedor-filosofia md:grid-cols-2 container m-auto">
          <div className=" w-[80%] flex flex-col justify-center">
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
    </div>
  );
};
