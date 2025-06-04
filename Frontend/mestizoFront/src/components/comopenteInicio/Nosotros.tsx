export const Nosotros = () => {
  return (
    <section id="nosotros" className=" w-full min-h-screen  py-20 px-6">
      <div className="container mx-auto flex flex-col gap-y-8">
        <h2 className="font-playfair text-3xl text-blue-800 ">
          Sobre Nosostro
        </h2>
        <p className="text-lg leading-relaxed max-w-3xl">
          El Mestizo nació del encuentro entre cocineros y soñadores de
          distintas tierras andinas. Un equipo multicultural con raíces en{" "}
          <strong>Colombia, Ecuador, Perú, Venezuela y Bolivia</strong>, unido
          por un mismo anhelo: dar vida a una cocina que hable de todos.
        </p>
        <p className="text-lg leading-relaxed max-w-3xl">
          Nuestra propuesta une ingredientes autóctonos, saberes tradicionales y
          técnicas modernas para reinventar los sabores de la región sin perder
          su esencia.
        </p>
        <ul className="text-lg  w-full text-gray-800 leading-relaxed ">
          <li>🌱 Ingredientes locales y frescos</li>
          <li>🔥 Cocina de autor con raíces latinas</li>
          <li>🤝 Compromiso con la comunidad</li>
          <li>🌎 Sabor que cruza fronteras</li>
        </ul>
        <blockquote className="italic text-amber-700 border-l-4 border-amber-600 pl-4 max-w-3xl">
          “No cocinamos solo comida, cocinamos identidad.”
        </blockquote>
      </div>
    </section>
  );
};
