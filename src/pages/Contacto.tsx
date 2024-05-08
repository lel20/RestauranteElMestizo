export const Contacto=()=>{
  return(
    <section id="contact">
        <h2>Contacto</h2>
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
        </div>
      </section>
  )
}