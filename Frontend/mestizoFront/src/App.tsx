import { Navigation } from "./components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "./pages/Inicio";
import { Menu } from "./pages/Menu";
import { Carta } from "./pages/Carta";
import { Contacto } from "./pages/Contacto";
import { PaginaNoEncontrada } from "./pages/PaginaNoEncotrada";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/carta" element={<Carta />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="*" element={<PaginaNoEncontrada />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
