import { Link } from "react-router-dom"
import { Dropdown } from "./Dropdown"
import './Estilos/Items.css'
import { ItemsProps } from "../interfaces/interfaz"
import { useState } from "react";
export const Items: React.FC<ItemsProps> =({itemsMenu})=>{
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
             >
            {itemsMenu.titulo}
          </button>
          <Dropdown 
            submenus={itemsMenu.submenu} 
            dropdown={dropdown}
            closeDropdown={() => setDropdown(false)} />
        </>
      ) : (
        <Link className="menu-boton" to={itemsMenu.url}>{itemsMenu.titulo}</Link>
      )}
    </li>
  )
}