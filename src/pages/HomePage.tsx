//Estilos HomePage
import { Link } from "react-router-dom";
import "./EstilosCSS/HomePage.css";
import { CardMenus } from "../components/CardMenus";
export const HomePage = () => {
  return (
    <div className="principal-Home">
      <section className="section1-Home">
        <div className="w-full">
          <h2 className="title1-Home md:text-[3rem] md:text-center">
            Bienvenido a Nuestro Restaurante
          </h2>
          <h1 className="title2-Home md:text-[5rem] md:text-center">
            EL MESTIZO
          </h1>
          <p className="description-Home md:text-center">
            Saborea la auténtica cocina latina tradicional en un ambiente
            acogedor, vibrante y buena música
          </p>
        </div>
        <Link className="boton-Home md:w-[18rem]" to="/menu">
          Explora Los Platos a la Carta
        </Link>
      </section>

      <section className="section2-Home">
        <h1 className="title-S2">Menu del Día</h1>
        <div className="container contenedor-S2">
          <CardMenus />
          <CardMenus />
          <div></div>
        </div>
       

      </section>
    </div>
  );
};
