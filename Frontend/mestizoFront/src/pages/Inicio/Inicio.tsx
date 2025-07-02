import { Filosofia } from "./Filosofia";
import { Nosotros } from "./Nosotros";
import { Hero } from "./Hero";
import { Platos } from "./Platos";
import { Eventos } from "./Eventos";

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
