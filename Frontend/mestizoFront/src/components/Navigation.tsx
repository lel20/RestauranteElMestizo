import { Link } from "react-router";

export const Navigation = () => {
  return (
    <nav
      className=" h-15 px-12 items-center justify-center flex  container mx-auto bg-black/90 space-x-4
       text-amber-100 text-xl"
    >
      <div className="flex h-full items-center space-x-4">
        {/* <img
          className="w-12 h-12 bg-amber-500 rounded-full"
          src=""
          alt="logo"
        /> */}
        <p>Mestizo</p>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/carta">Carta</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};
