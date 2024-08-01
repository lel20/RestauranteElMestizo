import { Link } from "react-router-dom"
import { HiChevronDown } from "react-icons/hi";
import { Dropdown } from "./Dropdown"
import './Estilos/Items.css'
import { ItemsProps } from "../interfaces/interfaz"
import { useState } from "react";
export const Items: React.FC<ItemsProps> =({itemsMenu, closeMenu})=>{
   const [dropdown, setDropdown] = useState(false);

  const handleMouseEnter = () => {
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    setDropdown(false);
  };
  return(
    <li className="menu-items"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {itemsMenu.submenu ? (
        <>
          <button 
            className="menu-boton" 
            type="button"  
            aria-haspopup="menu" 
            aria-expanded={dropdown ? "true" : "false"}
             >
            {itemsMenu.titulo}
            <HiChevronDown />
          </button>
          {dropdown && <Dropdown 
            submenus={itemsMenu.submenu} 
            dropdown={dropdown}
            closeDropdown={closeMenu} />}
          
        </>
      ) : (
        <Link 
          className="menu-boton" 
          to={itemsMenu.url}
          onClick={closeMenu}>
              {itemsMenu.titulo}
        </Link>
      )}
    </li>
  )
}