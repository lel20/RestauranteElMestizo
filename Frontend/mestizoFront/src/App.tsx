import { Navigation } from "./components/Navigation";
import { Routes, Route, useLocation } from "react-router-dom";
import { Inicio } from "./pages/Inicio/Inicio";
import { Menu } from "./pages/Menu";

import { Carta } from "./pages/carta/Carta";
import { Entrantes } from "./pages/carta/submenuCarta/Entrantes";
import { PlatosTipicos } from "./pages/carta/submenuCarta/PlatosTipicos";
import { Caldos } from "./pages/carta/submenuCarta/Caldos";
import { Raciones } from "./pages/carta/submenuCarta/Raciones";
import { Ensaladas } from "./pages/carta/submenuCarta/Ensaladas";
import { BebidasNaturales } from "./pages/carta/submenuCarta/Bebidas/BebidasNaturales";

import { Contacto } from "./pages/Contacto";
import { PaginaNoEncontrada } from "./pages/PaginaNoEncotrada";
import { Piepagina } from "./components/Piepagina";
import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import { NuestraHistoria } from "./pages/Inicio/NuestraHistoria";
import { Batidos } from "./pages/carta/submenuCarta/Bebidas/Batidos";
import { Jugos } from "./pages/carta/submenuCarta/Bebidas/Jugos";

function App() {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (hash) {
      // espera un tick para asegurar que el DOM está actualizado
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  }, [hash, pathname]);
  return (
    <>
      <ScrollToTop />
      <div className=" w-full min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route path="/masnosotros" element={<NuestraHistoria />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/carta" element={<Carta />}>
              <Route path="" element={<Raciones />}></Route>
              <Route path="entrantes" element={<Entrantes />}></Route>
              <Route path="platostipicos" element={<PlatosTipicos />}></Route>
              <Route path="sopas" element={<Caldos />}></Route>
              <Route path="ensaladas" element={<Ensaladas />}></Route>
              {/* <Route path="bebidas" element={<Bebidas />}></Route> */}
              <Route path="bebidasnaturales" element={<BebidasNaturales />}>
                <Route path="batidos" element={<Batidos />}></Route>
                <Route path="jugos" element={<Jugos />}></Route>
              </Route>
            </Route>
            <Route path="/contacto" element={<Contacto />}></Route>
            <Route path="*" element={<PaginaNoEncontrada />}></Route>
          </Routes>
        </main>
        <Piepagina />
      </div>
    </>
  );
}

export default App;
