//Estilos
import "./components.css";
//Iconos
import { FiMenu } from "react-icons/fi";
import Logo from '../assets/logoMestizo.png'
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
    <nav className='nav'>
      <div className="container contenedor">
        <div className="contenedor-cuerpo ">
          <div className=" flex  gap-4  justify-center items-center">
            <img src={Logo} alt="LogoMestizo" className="w-[50px]" />
            <h2 className="title md:text-[2.3rem] ">El Mestizo</h2>
          </div>
          <div className="opciones-menu md:flex gap-3 ">
            <Link to="/">Inicio</Link>
            <Link to="/filosofia">Platos a la carta</Link>
            <Link to="/menudia">Menu</Link>
            <Link to="/contacto">Contacto</Link>
          </div>
          <FiMenu className="md:hidden text-4xl" onClick={handleClick} />
        </div>
        {menu &&(
          <div className='opciones-menu1 md:hidden'>
            <a className='opciones' href="/">Inicio</a>
            <a className='opciones' href="/filosofia">Fisolofia</a>
            <a className='opciones' href="/menu">Menu</a>
            <a className='opciones' href="/contacto">Contacto</a>
          </div>
        )}  
      </div>
    </nav>
  );
};
