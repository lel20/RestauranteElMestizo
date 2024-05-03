//Estilos HomePage
import { Link } from "react-router-dom";
import "./EstilosCSS/HomePage.css";
import { CardMenus } from "../components/CardMenus";
export const HomePage = () => {
  return (
    <div className="principal-Home">
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

      <section className="section2-Home">
        <h1 className="title-S2">Menu del Día</h1>
        <div className="container contenedor-S2">
          <CardMenus />
          <CardMenus />
          <div></div>
        </div>
      </section>
      <section className="section3-Home">
       <p>El térmio MESTIZO fue aplicado por españa en el siglo XVI para denominar a unas de las "castas". Proviene del latín Mixticius y resulta de la combinacion de un Blanco Europeo y un Aborigene Americano </p>
      </section>
      <section id="contact">
      <h2>Contacto</h2>
      <div>
        <p><strong>Dirección:</strong> 123 Calle Principal, Ciudad, País</p>
        <p><strong>Teléfono:</strong> (123) 456-7890</p>
        <p><strong>Correo Electrónico:</strong> <a href="mailto:info@elmestizo.com">info@elmestizo.com</a></p>
      </div>
        <div className="w-full"><iframe width="100%" height="600" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Arabial,%2045,%20Ronda,%2018004%20Granada+(El%20Mestizo)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/car-satnav-gps/">GPS car tracker</a></iframe></div>
    </section>
    </div>
    
  );
};
