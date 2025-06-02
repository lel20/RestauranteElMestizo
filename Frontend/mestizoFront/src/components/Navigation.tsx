import { NavLink } from "react-router";
import { CiMenuBurger } from "react-icons/ci";
import { useEffect, useState } from "react";
import Logo from "../assets/pizza.png";
export const Navigation = () => {
  //Para controlar el menu despelgable en pantallas móviles
  const [mostrar, setMostrar] = useState(false);
  const onMostrar = () => {
    setMostrar(!mostrar);
  };
  useEffect(() => {
    const detectarTamaño = () => {
      if (window.innerWidth >= 768) {
        setMostrar(false);
      }
    };
    window.addEventListener("resize", detectarTamaño);
    detectarTamaño();
    return () => {
      window.removeEventListener("resize", detectarTamaño);
    };
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-20 bg-[rgba(0,0,0,0.7)] z-50 text-white text-xl">
        <div className="container mx-auto flex items-center justify-center h-full space-x-4 px-6">
          {/* logo y nombre */}
          <div className="flex items-center space-x-4">
            {Logo && (
              <img className="w-14 h-14  rounded-full" src={Logo} alt="" />
            )}

            <h2>Mestizo</h2>
          </div>

          <div className="flex items-center space-x-4">
            <button>
              <CiMenuBurger
                onClick={onMostrar}
                size={30}
                className="md:hidden "
              />
            </button>
            <div className=" hidden md:flex  h-full ">
              <ul className="flex justify-center items-center w-full h-full space-x-4">
                <li className=" h-full  flex items-center justify-center">
                  <NavLink
                    className={({ isActive }) =>
                      `transition-all duration-500 h-full flex items-center ${
                        isActive ? "text-orange-500 scale-x-110" : "text-white"
                      }`
                    }
                    to="/"
                  >
                    Inicio
                  </NavLink>
                </li>
                <li className="h-full flex items-center justify-center">
                  <NavLink
                    className={({ isActive }) =>
                      `transition-all duration-500 ${
                        isActive ? "text-orange-500 scale-x-110" : "text-white"
                      }`
                    }
                    to="/menu"
                  >
                    Menu
                  </NavLink>
                </li>
                <li className="h-full flex items-center justify-center">
                  <NavLink
                    className={({ isActive }) =>
                      `transition-all duration-500 ${
                        isActive ? "text-orange-500 scale-x-110" : "text-white"
                      }`
                    }
                    to="/carta"
                  >
                    Carta
                  </NavLink>
                </li>
                <li className="h-full flex items-center justify-center">
                  <NavLink
                    className={({ isActive }) =>
                      `transition-all duration-500  ${
                        isActive ? "text-orange-500 scale-x-110" : "text-white"
                      }`
                    }
                    to="/contacto"
                  >
                    Contacto
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {mostrar && (
        <div className="fixed  top-20 left-0 w-full h-full bg-black/90 text-xl text-white z-20">
          <ul className="flex flex-col h-[90%] items-center justify-center pace-x-4">
            <li className="w-full flex justify-center items-center h-10">
              <NavLink
                onClick={onMostrar}
                className={({ isActive }) =>
                  `transition-all duration-500 ${
                    isActive ? "text-orange-500 scale-x-110" : "text-white"
                  }`
                }
                to="/"
              >
                Inicio
              </NavLink>
            </li>
            <li className="w-full flex justify-center items-center h-10">
              <NavLink
                onClick={onMostrar}
                className={({ isActive }) =>
                  `transition-all duration-500 ${
                    isActive ? "text-orange-500 scale-x-110" : "text-white"
                  }`
                }
                to="/menu"
              >
                Menu
              </NavLink>
            </li>
            <li className="w-full flex justify-center items-center h-10">
              <NavLink
                onClick={onMostrar}
                className={({ isActive }) =>
                  `transition-all duration-500 ${
                    isActive ? "text-orange-500 scale-x-110" : "text-white"
                  }`
                }
                to="/carta"
              >
                Carta
              </NavLink>
            </li>
            <li className="w-full flex justify-center items-center h-10">
              <NavLink
                onClick={onMostrar}
                className={({ isActive }) =>
                  `transition-all duration-500 ${
                    isActive ? "text-orange-500 scale-x-110" : "text-white"
                  }`
                }
                to="/contacto"
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
