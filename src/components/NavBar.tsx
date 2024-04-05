//Estilos
import "./components.css";
//Iconos
import { FiMenu } from "react-icons/fi";
//Rutas
import { Link } from 'react-router-dom';
//Hooks Estados
import { useState } from 'react'
export const NavBar = () => {
  const [menu, setMenu]= useState(false)
  const handleClick=()=>{
    setMenu(!menu)
  }
  return (
    <nav className='nav md:h-[6rem]'>
      <div className="container contenedor">
        <div className="contenedor-cuerpo ">
          <div className=" flex  flex-col gap-4 w-[100px] h-[100px] rounded-full bg-red-600 justify-center items-center">
            <img src="" alt="LogoMestizo" />
            <h2>El Mestizo</h2>
          </div>
          <div className="opciones-menu md:flex gap-3 ">
            <Link to="/">Inicio</Link>
            <Link to="/filosofia">Fisolofia</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/contacto">Contacto</Link>
          </div>
          <FiMenu className="md:hidden text-4xl" onClick={handleClick} />
        </div>
        {menu &&(
          <div className='opciones-menu1 md:hidden'>
            <Link className='opciones' to="/">Inicio</Link>
            <Link className='opciones' to="/filosofia">Fisolofia</Link>
            <Link className='opciones' to="/menu">Menu</Link>
            <Link className='opciones' to="/contacto">Contacto</Link>
          </div>
        )}  
      </div>
    </nav>
  );
};
