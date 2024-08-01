//Estilos
import "./Estilos/Nav.css";
//Iconos
import { MenuItems } from "../archivosjs/MenuItems";
import { FiMenu } from "react-icons/fi";
import Logo from "../assets/logoMestizo.png";
//Hooks Estados
import { useState } from "react";
import { Items } from "./Items";
export const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const handleClick = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(false);
  };
  return (
    <nav className="nav">
      <div className="container contenedor m-auto">
        <div className="contenedor-cuerpo ">
          <div className="nav-logo">
            <img src={Logo} alt="LogoMestizo" className="w-[50px]" />
            <h2 className="title md:text-[2rem] ">El Mestizo</h2>
          </div>
          <div className="opciones-menu md:flex gap-3 ">
            {MenuItems.map((menu, index) => (
              <Items 
                itemsMenu={menu} 
                key={index} 
                closeMenu={closeMenu}
                />
            ))}
          </div>
          <FiMenu 
            className="md:hidden text-4xl" 
            onClick={handleClick} />
        </div>
        {menu && (
          <div className="opciones-menu1 md:hidden">
            {MenuItems.map((menu, index) => (
              <Items 
                itemsMenu={menu}
                closeMenu={closeMenu} 
                key={index} />
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
