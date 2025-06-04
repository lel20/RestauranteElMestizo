import { Filosofia } from "../components/comopenteInicio/Filosofia";
import { Nosotros } from "../components/comopenteInicio/Nosotros";
import { Hero } from "../components/comopenteInicio/Hero";

export const Inicio = () => {
  return (
    <div className="min-h-screen w-full">
      <Hero />
      <Filosofia />
      <Nosotros />
      <section>Tipos de platos</section>
      <section>Platos destacados</section>
      <section>opiniones</section>
    </div>
  );
};
