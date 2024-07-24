import "./EstilosCSS/MenuDia.css";
export const MenuDia = () => {
  return (
    <>
      <section className="menudia">
        <div className="container m-auto">
          <h1 className="menudia-titulo md:text-8xl  sm:text-6xl md:w-[60%]">
            Consulta nuestro menu del día
          </h1>
        </div>
      </section>
      <section className="menu-cuerpo">
        <div className="menu-contenedor  container m-auto">
          <article className="menu-articulo bg-orange-400">
            {/* <div className="bg-slate-600">
              <div className="menu-primeros ">
                <h2 className="menu-h2 sm:text-4xl">Primeros</h2>
                <div className="flex justify-center ">
                  <ul className="list-disc list-inside text-start">
                    <li>Sancocho de pescado</li>
                    <li>Sancocho mixto</li>
                    <li>Maduro con queso</li>
                  </ul>
                </div>
              </div>
              <div className="menu-segundos">
                <h2 className="menu-h2 sm:text-4xl">Segundos</h2>
                <div className="flex justify-center">
                  <ol className="list-disc list-outside text-start">
                    <li>Tajada de maduro con pollo</li>
                    <li>Bandera</li>
                    <li>Patacón Pisao</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className=" bg-slate-100 justify-center">
              <p>Por Solo</p>
              <h2>11,90</h2>
            </div> */}
          </article>
          <article className="menu-articulo sm:flex-1">
            <h2>Menu Neptuno</h2>
          </article>
        </div>
      </section>
    </>
  );
};
