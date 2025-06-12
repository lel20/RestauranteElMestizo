import { Filosofia } from "../components/comopenteInicio/Filosofia";
import { Nosotros } from "../components/comopenteInicio/Nosotros";
import { Hero } from "../components/comopenteInicio/Hero";
import { Platos } from "../components/comopenteInicio/Platos";
import { Eventos } from "../components/comopenteInicio/Eventos";

export const Inicio = () => {
  return (
    <div className="min-h-screen w-full">
      <Hero />
      <Filosofia />
      <Nosotros />
      <Platos />
      <Eventos />
    </div>
  );
};
