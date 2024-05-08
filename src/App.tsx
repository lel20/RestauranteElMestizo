import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { NavBar } from "./components/NavBar";
import { Contacto } from "./pages/Contacto";
import { Menu } from "./pages/Menu";
import { Filosofia } from "./pages/Filosofia";
import { Footer } from "./components/Footer";
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="flex-1">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/filosofia" element={<Filosofia />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
