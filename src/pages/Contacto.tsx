import './EstilosCSS/Contacto.css'
export const Contacto=()=>{
  return(
    <>
    <section className="contacto">
        <div className="contenedor-contacto container">
          <h1 className='titulo-contacto'>VEN Y CONÓCENOS</h1>
          <p>Si tienes alguna duda sobre nosotros, ponte en contacto y te ayudaremos a solucionarlo</p>

        </div>
        


        {/* <h2>Contacto</h2>
        <div>
          <p>
            <strong>Dirección:</strong> 123 Calle Principal, Ciudad, País
          </p>
          <p>
            <strong>Teléfono:</strong> (123) 456-7890
          </p>
          <p>
            <strong>Correo Electrónico:</strong>{" "}
            <a href="mailto:info@elmestizo.com">info@elmestizo.com</a>
          </p>
        </div>
        <div className="w-full">
          <iframe
            width="100%"
            height="600"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Arabial,%2045,%20Ronda,%2018004%20Granada+(El%20Mestizo)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/car-satnav-gps/">GPS car tracker</a>
          </iframe>
        </div> */}
      </section>
      <section className='mapa'>
        <div className=" contenedor-mapa md:w-3/4">
         <iframe className='iframe-mapa md:w-4/5' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d422.19431749570873!2d-3.607210334204332!3d37.1690392151448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fd16b948d75f%3A0xd62656c79a19dacc!2sEl%20Mestizo%20(Neptuno)!5e0!3m2!1ses-419!2ses!4v1718359354593!5m2!1ses-419!2ses"    loading="lazy"></iframe>
        </div>
      </section></>
    
  )
}