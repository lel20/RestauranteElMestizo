import { Submenu } from "../../components/Submenu";
import { Outlet } from "react-router-dom";
export const Carta = () => {
  return (
    <section className="min-h-screen pt-20 w-full">
      <div className="container mx-auto">
        <Submenu />
        <Outlet />
      </div>
    </section>
  );
};
