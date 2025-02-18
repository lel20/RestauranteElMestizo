import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { NavBar } from "./components/NavBar";
import { Contacto } from "./pages/Contacto";
import { Menu } from "./pages/Menu";
import { Filosofia } from "./pages/Filosofia";
import { Footer } from "./components/Footer";
import { Raciones } from "./pages/Raciones";
import { Entrante } from "./pages/Entrante";
import { Caldos } from "./pages/Caldos";
import { Tipicos } from "./pages/Tipicos";
import { Batidos } from "./pages/Batidos";
import { MenuDia } from "./pages/MenuDia";
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/filosofia" element={<Filosofia />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/raciones" element={<Raciones />} />
            <Route path="/entrantes" element={<Entrante />} />
            <Route path="/caldos" element={< Caldos />} />
            <Route path="/tipicos" element={< Tipicos />} />
            <Route path="/batidos" element={<Batidos />} />
            <Route path="/menudia" element={<MenuDia />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
