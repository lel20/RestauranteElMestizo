import { NavLink } from "react-router";
import { CiMenuBurger } from "react-icons/ci";
import { useEffect, useState } from "react";
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
      <nav
        className="fixed h-20 px-12 items-center justify-center flex w-full container mx-auto
         bg-[rgba(0,0,0,0.5)] space-x-4
         text-black text-xl"
      >
        <div className="flex h-full items-center space-x-4">
          <img
            className="w-12 h-12 bg-amber-500 rounded-full"
            src=""
            alt="logo"
          />
          <p>Mestizo</p>
        </div>
        <div className=" h-full flex space-x-4 justify-center items-center">
          <button>
            <CiMenuBurger
              onClick={onMostrar}
              size={30}
              className="md:hidden outline "
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
      </nav>
      {mostrar && (
        <div className="fixed  top-15 w-full h-full bg-black/90 text-xl text-white">
          <ul className="flex flex-col h-full items-center justify-center pace-x-4">
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
