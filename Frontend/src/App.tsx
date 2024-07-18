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
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/filosofia" element={<Filosofia />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/raciones" element={<Raciones />} />
        <Route path="/entrantes" element={<Entrante />} />
        <Route path="/caldos" element= {< Caldos />} />
        <Route path="/tipicos" element= {< Tipicos />} />
        <Route path="/batidos" element={<Batidos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
