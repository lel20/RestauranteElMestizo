import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export const Piepagina = () => {
  return (
    <footer
      className=" container mx-auto min-h-80 bg-black/90 text-amber-300 bottom-0 flex-col md:flex-row p-8 justify-center 
      items-center"
    >
      <div className="flex flex-col md:flex-row bg-red-600 w-full justify-center space-x-10 space-y-5">
        <div className="flex space-x-4">
          <div>
            <p>Lunes</p>
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
        <div className="flex space-x-4">
          <a href="">
            <FaSquareInstagram />
          </a>
          <a href="">
            <FaFacebook />
          </a>
        </div>
      </div>
      <p>© 2025 Todos los derecho reservados a Lenardo Paredes.</p>
    </footer>
  );
};
