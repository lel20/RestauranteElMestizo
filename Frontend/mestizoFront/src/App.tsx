import { Navigation } from "./components/Navigation";
import { Routes, Route, useLocation } from "react-router-dom";
import { Inicio } from "./pages/Inicio";
import { Menu } from "./pages/Menu";
import { Carta } from "./pages/Carta";
import { Contacto } from "./pages/Contacto";
import { PaginaNoEncontrada } from "./pages/PaginaNoEncotrada";
import { Piepagina } from "./components/Piepagina";
import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import { NuestraHistoria } from "./components/comopenteInicio/NuestraHistoria";
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
            <Route path="/carta" element={<Carta />}></Route>
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
