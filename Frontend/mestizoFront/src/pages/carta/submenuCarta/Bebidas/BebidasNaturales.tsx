import { NavLink, Outlet, useLocation } from "react-router-dom";
import Batidos from "../../../../assets/batidos.png";
import Jugos from "../../../../assets/jugos.png";
export const BebidasNaturales = () => {
  const { pathname } = useLocation();

  const isRoot = pathname === "/carta/bebidasnaturales";
  return (
    <section className="w-full min-h-screen">
      {isRoot && (
        <div className="  relative container mx-auto flex flex-col md:flex-row justify-center items-center w-full h-full">
          <div className=" absolute  top-0 left-0 w-full h-full flex text-5xl items-center justify-center">
            <h2 className="w-[70%] md:w-[30%] p-8 z-10 text-center font-Arvo text-[clamp(1.5rem,4vw,2rem)] bg-amber-100/70 rounded">
              Saborea nuestros batidos y jugos naturales
            </h2>
          </div>
          <NavLink
            to="batidos"
            className="h-screen bg-gradient-to-t from-amber-600 to-transparent  
          flex-1 w-full flex items-center justify-center bg-center bg-cover"
          >
            {" "}
            <img
              className="rounded-xl w-full max-w-[25rem] transition-all duration-300  hover:scale-105 
              hover:rotate-6 drop-shadow-pink-600 drop-shadow-xl "
              src={Batidos}
              alt=""
            />
          </NavLink>
          <NavLink
            className="h-screen flex-1 bg-gradient-to-t from-blue-900 to-transparent 
          flex w-full items-center justify-center"
            to="jugos"
          >
            <img
              className=" drop-shadow-xl w-full max-w-[25rem] drop-shadow-orange-800 rounded-xl 
              transition-all ease-in duration-300 hover:-rotate-6 hover:scale-105"
              src={Jugos}
              alt=""
            />
          </NavLink>
        </div>
      )}
      <Outlet />
    </section>
  );
};
