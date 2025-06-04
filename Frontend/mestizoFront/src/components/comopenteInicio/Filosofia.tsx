import { NavLink } from "react-router";
import Equipo from "../../assets/Equipo.jpg";
export const Filosofia = () => {
  return (
    <section
      id="filosofia"
      className="container flex flex-col md:flex-row min-h-screen mx-auto bg-gradient-to-b 
         from-amber-50 to-white py-20"
    >
      <div className="md:w-1/2 px-6 flex justify-center items-center flex-col animate-fadeIn gap-6 mb-6">
        <h2 className="font-playfair text-3xl text-amber-800">Filosofia</h2>
        <p className="max-w-3xl text-lg text-gray-800 leading-relaxed">
          En El Mestizo, creemos que la cocina es un lenguaje de identidad.
          Cocinamos para conectar culturas, para rendir homenaje a nuestras
          raíces y para contar historias que cruzan montañas, fronteras y
          generaciones.
        </p>
        <p className="max-w-3xl text-lg text-gray-800 leading-relaxed">
          La fusión no es moda, es memoria compartida. Cada plato es un puente
          entre lo ancestral y lo actual.
        </p>
        <div className="flex gap-6">
          <button
            className=" w-40 h-12 border-2 border-amber-700 cursor-pointer transition-all duration-300
           hover:bg-amber-700 hover:rounded hover:text-gray-300"
          >
            <NavLink to={"/menu"}>Menu del día</NavLink>
          </button>
          <button
            className="w-40 h-12 border-2 border-gray-400 text-center flex items-center justify-center 
              transition-all duration-300 hover:bg-gray-300 hover:rounded hover:text-gray-800"
          >
            <NavLink to="/equipo">Nuestro equipo</NavLink>
          </button>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${Equipo})` }}
        className="md:w-1/2 animate-fadeIn bg-cover bg-amber-200 bg-center min-h-[20rem] relative "
      >
        <div className="absolute bg-black/30 inset-0"></div>
      </div>
    </section>
  );
};
