import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import Logo from "../assets/pizza.png";
export const Piepagina = () => {
  return (
    <footer className="w-full h-[70rem] md:h-[40rem] flex flex-col justify-center  bg-black/90 text-white p-8 space-y-20">
      <div className="  grid grid-cols-1 md:grid-cols-custom gap-20">
        <div className="flex-1 flex min-w-[200px] h-full justify-center gap-x-4  items-center w-full ">
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
        <div className="flex flex-1 flex-col min-w-[200px] justify-center   w-full items-center">
          {Logo && (
            <img
              className="w-40 h-40 bg-amber-50 rounded-full"
              src={Logo}
              alt="logo"
            />
          )}

          <h1>El Mestizo</h1>
        </div>
        <div className="flex flex-1 space-x-4 min-w-[200px] justify-center w-full items-center">
          <a href="">
            <FaSquareInstagram />
          </a>
          <a href="">
            <FaFacebook />
          </a>
        </div>
        <div className="flex flex-1 flex-col space-x-4 min-w-[200px]  justify-center w-full items-center">
          <a href="">Inicio</a>
          <a href="">Menu</a>
          <a href="">Carta</a>
          <a href="">Contacto</a>
          <a href="">Sobre Nosotros</a>
          <a href="">Galeria</a>
          <a href="">Filosofía</a>
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
