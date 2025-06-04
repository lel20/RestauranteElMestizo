import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import Logo from "../assets/pizza.png";
export const Piepagina = () => {
  return (
    <footer className="w-full h-[70rem] md:h-[40rem] flex flex-col justify-center  bg-black/90 text-white p-8 space-y-20">
      <div className=" container mx-auto w-full grid grid-cols-1 md:grid-cols-custom gap-20 text-center">
        <div className="flex h-full justify-center gap-x-4  items-center w-full">
          <div className=" ">
            <p className="">Lunes</p>
            <p>Martes</p>
            <p>Miércoles</p>
            <p>Jueves</p>
            <p>Viernes</p>
            <p>Sábado</p>
            <p>Domingo</p>
          </div>
          <div>
            <p>10:00h -22:00h </p>
            <p>10:00h -22:00h </p>
            <p>Día de descanso </p>
            <p>10:00h -22:00h </p>
            <p>10:00h -22:00h </p>
            <p>10:00h -22:00h </p>
            <p>10:00h -22:00h </p>
          </div>
        </div>
        <div className="flex  flex-col justify-center  items-center w-full">
          {Logo && (
            <img
              className="w-40 h-40 bg-amber-50 rounded-full"
              src={Logo}
              alt="logo"
            />
          )}

          <h1>El Mestizo</h1>
        </div>
        <div className="flex  space-x-4 justify-center text-gray-300 items-center w-full">
          <a
            className="bg-black/40 w-12 h-12 hover:bg-orange-600 rounded-full flex justify-center 
            items-center transition-colors  duration-300  
            hover:shadow-[0_0_10px_rgba(255,255,255,0.50)] "
            href="https://www.instagram.com/elmestizogranada/?hl=es"
            target="_blank"
          >
            <FaSquareInstagram
              size={20}
              className="transition-transform duration-300 ease-in-out transform hover:scale-125"
            />
          </a>
          <a
            className="bg-black/40 w-12 h-12 hover:bg-orange-600 rounded-full flex justify-center 
            items-center origin-center transition-colors duration-300  
            hover:shadow-[0_0_10px_rgba(255,255,255,0.50)]"
            href="https://www.facebook.com/Elmestizogranada/?locale=es_ES"
            target="_blank"
          >
            <FaFacebook
              size={20}
              className="transition-transform duration-300 ease-in-out transform hover:scale-125"
            />
          </a>
        </div>
        <div className="flex flex-col space-x-4 justify-center w-full  items-center">
          <a href="/">Inicio</a>
          <a href="/menu">Menu</a>
          <a href="/carta">Carta</a>
          <a href="/contacto">Contacto</a>
          <a href="/not">Sobre Nosotros</a>
          <a href="">Galeria</a>
          <a href="/#filosofia">Filosofía</a>
        </div>
      </div>
      <div className="container mx-auto">
        <p className="text-center">
          © 2025 Todos los derecho reservados a Lenardo Paredes.
        </p>
      </div>
    </footer>
  );
};
