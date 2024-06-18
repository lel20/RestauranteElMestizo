import "./EstilosCSS/Contacto.css";
export const Contacto = () => {
  return (
    <>
      <section className="contacto md:min-h-[31rem]">
        <div className="contenedor-contacto container md:min-h-[31rem]">
          <h1 className="titulo-contacto md:text-[2.8rem]">VEN Y CONÓCENOS</h1>
          <p className="descripcion-contacto md:w-3/6">
            Si tienes alguna duda ponte en contacto con nosotros y estaremos
            encantados de ayudarte a resolver cualquier pregunta que tengas.
            ¡Así que no dudes en comunicarte!
          </p>
        </div>
      </section>
      <section className="mapa">
        <div className="contenedor-mapa container md:grid-cols-2">
          <div className="iframe-mapa">
            <h2 className="titulo-mapa">Localízanos</h2>
            <iframe
              className="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d422.19431749570873!2d-3.607210334204332!3d37.1690392151448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fd16b948d75f%3A0xd62656c79a19dacc!2sEl%20Mestizo%20(Neptuno)!5e0!3m2!1ses-419!2ses!4v1718359354593!5m2!1ses-419!2ses"
              loading="lazy"
            ></iframe>
          </div>
          <div className="horario">
            <h2 className="titulo-horario">Horario</h2>
            <p>Abrimos de:</p>
            <ul className="list-disc list-inside flex space-y-4 mb-4 ">
              <li>Lunes a Domingos incluido festivos</li>
            </ul>
            <ul className=" pl-6 list-none list-inside mb-8">
              <li className=" ">11:00h a 22:00 h</li>
            </ul>
            <p>Nos encontramos en:</p>
            <ul className="list-disc list-inside flex space-y-4 mb-4">
              <li>Arabial, 45, Ronda, 18004 Granada</li>
            </ul>
            <ul className="pl-6 list-none list-inside mb-8">
              <li>
                Dentro del Centro comercial Neptuno, Local nº 30 junto al
                Gimnasio
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="formulario">
        <div className="contenedor-formulario container md:grid-cols-2">
          <form className="" action="">
            <div className="flex flex-col">
              <label htmlFor="">Nombre</label>
              <input type="text" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Apellidos</label>
              <input type="text" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Email</label>
              <input type="text" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Teléfono</label>
              <input type="text" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Asunto</label>
              <textarea name="" id=""></textarea>
            </div>
            <button>Enviar</button>
          </form>
          <p>Escribenos tus dusda y te responderemos en el menor tiempo posible</p>
        </div>
      </section>
    </>
  );
};
