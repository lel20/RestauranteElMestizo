import { useState } from "react";
import ImagenContacto from "../assets/contacto.jpg";
import type { FormData } from "../interfaces/interface";
export const Contacto = () => {
  const [datos, setDatos] = useState<FormData>({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });
  const datoOnchage = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
    console.log(datos);
  };
  const handleClick = () => {
    alert(JSON.stringify(datos));
    setDatos({
      nombre: "",
      apellidos: "",
      email: "",
      telefono: "",
      asunto: "",
      mensaje: "",
    });
  };
  return (
    <div className="min-h-screen w-full">
      <section className="min-h-screen w-full ">
        <div
          className="relative flex w-full justify-center items-center h-screen bg-cover bg-center "
          style={{ backgroundImage: `url(${ImagenContacto})` }}
        >
          <div className="absolute bg-black/40 inset-0"></div>
          <div className="container  mx-auto h-screen w-full flex flex-col justify-center items-center gap-y-3 text-gray-100">
            <div className="w-full flex flex-col items-center z-10">
              <h3 className="text-[clamp(2rem,3vw,4rem)] text-base font-bold font-dacing">
                ¡ Si tines alguna duda !
              </h3>
              <h1 className="font-Arvo text-[clamp(3rem,10vw,15rem)] leading-none">
                Contactanos
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen w-full py-20">
        <div
          className=" container  w-full md:w-10/12  min-h-screen flex flex-col justify-center 
        items-center mx-auto bg-gray-200 p-10 "
        >
          <div className="flex flex-col w-full items-center">
            <h3 className="text-xl text-center">
              Resuelve tus tudas con nostros
            </h3>
            <h2 className="text-4xl">Escríbenos</h2>
          </div>
          <div className=" w-full md:w-[50%] flex flex-col  justify-center  gap-10 h-screen md:p-10">
            <input
              className="outline-0 border-2 border-gray-400 h-10 px-2 rounded focus:border-blue-700"
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Nombre"
              autoComplete="given-name"
              value={datos.nombre}
              onChange={datoOnchage}
            />
            <input
              className="outline-0 border-2 border-gray-400 h-10 px-2 rounded focus:border-blue-700"
              type="text"
              name="apellidos"
              placeholder="Apellidos..."
              autoComplete="family-name"
              value={datos.apellidos}
              onChange={datoOnchage}
            />

            <input
              className="outline-0 border-2 border-gray-400 h-10 px-2 rounded focus:border-blue-700"
              type="email"
              name="email"
              placeholder="correo@gmail.com"
              autoComplete="email"
              value={datos.email}
              onChange={datoOnchage}
            />
            <input
              className="outline-0 border-2 border-gray-400 h-10 px-2 rounded focus:border-blue-700"
              type="tel"
              name="telefono"
              placeholder="610947223"
              autoComplete="tel"
              pattern="[0-9]*"
              value={datos.telefono}
              onChange={datoOnchage}
            />
            <input
              className="outline-0 border-2 border-gray-400 h-10 px-2 rounded focus:border-blue-700"
              type="text"
              name="asunto"
              placeholder="Asunto"
              value={datos.asunto}
              onChange={datoOnchage}
            />
            <textarea
              className="outline-0 border-2 border-gray-400 h-60 px-2 rounded focus:border-blue-700"
              name="mensaje"
              placeholder="Escribe tu mensaje aquí"
              value={datos.mensaje}
              onChange={datoOnchage}
              rows={50}
              cols={5}
            ></textarea>
          </div>
          <button
            className=" bg-amber-500 w-30 h-10 rounded text-amber-50 cursor-pointer"
            onClick={handleClick}
          >
            Enviar
          </button>
        </div>
      </section>
      <section className="w-full min-h-screen">
        <div className="container flex flex-col lg:flex-row mx-auto h-screen w-full py-40 gap-10">
          <div className=" flex flex-col w-full lg:w-1/2 justify-center items-center px-4 gap-y-6">
            <h4>Horarios</h4>
            <div className="flex gap-4 w-full items-center justify-center">
              <div className="flex flex-col items-start">
                <p>Lunes</p>
                <p>Martes</p>
                <p>Miércoles</p>
                <p>Jueves</p>
                <p>Viernes</p>
                <p>Sábado</p>
                <p>Domingo</p>
              </div>
              <div>
                <p>11:00 - 22:00</p>
                <p>11:00 - 22:00</p>
                <p>Descanso</p>
                <p>11:00 - 22:00</p>
                <p>11:00 - 22:00</p>
                <p>11:00 - 22:00</p>
                <p>11:00 - 22:00</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-amber-200">
            {" "}
            <iframe
              className="w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.347883535546!2d-3.610587924679399!3d37.16820274686987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fd16b948d75f%3A0xd62656c79a19dacc!2sEl%20Mestizo%20(Neptuno)!5e0!3m2!1sen!2ses!4v1750767658408!5m2!1sen!2ses"
              height="450"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};
