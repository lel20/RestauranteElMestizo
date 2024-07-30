import "./EstilosCSS/MenuDia.css";
export const MenuDia = () => {
  return (
    <>
      <section className="menudia md:min-h-[35rem] ">
        <div className="container m-auto">
          <h1 className="menudia-titulo md:text-8xl  sm:text-6xl sm:w-[40%] md:w-[60%]">
            Consulta nuestro menú del día
          </h1>
        </div>
      </section>
      <section className="menu-cuerpo">
        <div className="menu-contenedor  container m-auto">
          <article className="menu-articulo  ms:w-[80%] md:w-[60%]">
          <div className="menu-titulo">
            <h1 className="menu-h1 sm:text-5xl">Menu</h1>
            <h3 className="menu-h3">Especial</h3>
          </div>
            <div className="menu-principal">
              <div className="primeros ">
                <h2 className="menu-h2">Primeros</h2>
                <ul className="list-inside list-disc ">
                  <li>Sancocho de Pescado</li>
                  <li>Sancocho mixto</li>
                  <li>Maduro con queso</li>
                </ul>
              </div>
              <div className="segundos">
                <h2 className="menu-h2">Segundos</h2>
                <ul className="list-inside list-disc ">
                  <li>Tajada de maduro</li>
                  <li>Bandera</li>
                  <li>Patacon Pisado</li>
                </ul>
              </div>
            </div>
            <div className="precio">
              <p className="menu-p">Por Solo</p>
              <h1 className="menu-h1 sm:text-5xl">11,90 €</h1>
            </div>
            <div className="incluye">
              <p className="menu-p">Incluye</p>
              <h3 className="menu-h3">Bebida y Postre !</h3>
            </div>
            <div className="esperamos">
              <h2 className="menu-h2 uppercase">Te esperamos en:</h2>
              <p>Calle Sol, 9, Armilla, Granada</p>
              <p>Centro Comercial Neptuno, Junto al Gimnasio Mcfit</p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};
