import { NavLink } from "react-router-dom";

export const Submenu = () => {
  return (
    <nav className="w-full min-h-10">
      <div className=" flex w-full h-full justify-center">
        <div className="py-2 ">
          <ul className="flex flex-wrap w-full h-full md:gap-x-8 gap-y-2 items-center">
            <li className="h-10 min-w-5 px-2  flex items-center">
              <NavLink
                end
                className={({ isActive }) =>
                  `flex w-full h-full items-center justify-center transition-all duration-300 ${
                    isActive
                      ? "text-blue-700 border-2 border-blue-700 px-2"
                      : "text-black border-2 border-transparent"
                  }`
                }
                to={"."}
              >
                Raciones
              </NavLink>
            </li>
            <li className=" h-10 min-w-5 px-2 flex items-center">
              <NavLink
                className={({ isActive }) =>
                  `flex w-full h-full items-center justify-center transition-all duration-300 ${
                    isActive
                      ? "text-blue-700 border-2 border-blue-700 px-2"
                      : "text-black border-2 border-transparent"
                  }`
                }
                to={"entrantes"}
              >
                Entrantes
              </NavLink>
            </li>
            <li className="h-10 min-w-5 px-2 flex items-center">
              <NavLink
                className={({ isActive }) =>
                  `flex w-full h-full items-center justify-center transitio-all duration-300 ${
                    isActive
                      ? "text-blue-700 border-2 border-blue-700 px-2"
                      : "text-black border-2 border-transparent"
                  }`
                }
                to={"platostipicos"}
              >
                Platos Tipicos
              </NavLink>
            </li>
            <li className="h-10 min-w-5 px-2 flex items-center">
              <NavLink
                className={({ isActive }) =>
                  `flex w-full h-full items-center justify-center transitio-all duration-300 ${
                    isActive
                      ? "text-blue-700 border-2 border-blue-700 px-2"
                      : "text-black border-2 border-transparent"
                  } `
                }
                to={"ensaladas"}
              >
                Ensaladas
              </NavLink>
            </li>
            <li className=" h-10 min-w-5 px-2 flex items-center">
              <NavLink
                className={({ isActive }) =>
                  `flex w-full h-full items-center justify-center transitio-all duration-300 ${
                    isActive
                      ? "text-blue-700 border-2 border-blue-700 px-2"
                      : "text-black border-2 border-transparent"
                  }`
                }
                to={"bebidas"}
              >
                Bebidas
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
