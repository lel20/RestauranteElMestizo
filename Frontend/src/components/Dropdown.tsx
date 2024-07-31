import { Link } from "react-router-dom";
import { Submenu } from "../interfaces/interfaz";
import './Estilos/MenuVertical.css'

interface SubmenuProps{
  submenus:Submenu[];
  dropdown:boolean;  
  closeDropdown: () => void;
}
export const Dropdown:React.FC<SubmenuProps> = ({submenus ,dropdown, closeDropdown}) => {
  return (
    <ul className={`${dropdown ? "menu-vertical-true" : "menu-vertical-false hidden"}`}>
      {submenus.map((submenu, index) => (
        <li key={index} className="menu-items">
          <Link 
            to={submenu.url}
            onClick={closeDropdown}
          >{submenu.titulo}</Link>
        </li>
      ))}
    </ul>
  );
};