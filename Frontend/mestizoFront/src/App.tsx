import { Navigation } from "./components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "./pages/Inicio";
import { Menu } from "./pages/Menu";
import { Carta } from "./pages/Carta";
import { Contacto } from "./pages/Contacto";
import { PaginaNoEncontrada } from "./pages/PaginaNoEncotrada";
import { Piepagina } from "./components/Piepagina";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className=" w-full min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Inicio />}></Route>
              <Route path="/menu" element={<Menu />}></Route>
              <Route path="/carta" element={<Carta />}></Route>
              <Route path="/contacto" element={<Contacto />}></Route>
              <Route path="*" element={<PaginaNoEncontrada />}></Route>
            </Routes>
          </main>
          <Piepagina />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
