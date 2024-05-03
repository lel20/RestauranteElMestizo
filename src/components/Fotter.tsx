export const Fotter=()=>{
  return(
    <footer className="bg-black text-white min-h-[15rem]">
      <div className="container px-4 mx-auto flex flex-col gap-8 md:flex">
        <div>
          <h2>Horio</h2>
          <ul>
            <li>Lunes 10:00 am - 22:00 pm</li>
            <li>Martes 10:00 am - 22:00 pm</li>
            <li>Miercoles 10:00 am - 22:00 pm</li>
            <li>Viernes 10:00 am - 22:00 pm</li>
            <li>Sábado 10:00 am - 22:00 pm</li>
            <li>Domingo 10:00 am - 22:00 pm</li>
          </ul>

        </div>
        <div>
          <h2>Contacta con nosotros</h2>
          <ul>
            <li>Arabial, 45, Ronda, 18004 Granada</li>
            <li>
              <a href="tel:+34610937223">610937223</a>
            </li>
            <li>
              <a href="mailto:ejemplo@example.com">restaurantemestizo@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}