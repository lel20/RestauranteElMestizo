import { CardPlatos } from "../../components/cards/CardPlatos";
import { Platos1 } from "../../data/Platos";
export const Platos = () => {
  return (
    <section className="w-full min-h-20 flex flex-col">
      <div className="container mx-auto">
        <h2 className="text-3xl font-playfair  text-center mb-4">
          Nuestra Comida Latina
        </h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-8">
          Disfruta una selección de los sabores más representativos de
          Latinoamérica.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {Platos1.map((plato, index) => (
          <CardPlatos
            key={index}
            nombre={plato.nombre}
            imagen={plato.img}
            url={plato.url}
          />
        ))}
      </div>
    </section>
  );
};
