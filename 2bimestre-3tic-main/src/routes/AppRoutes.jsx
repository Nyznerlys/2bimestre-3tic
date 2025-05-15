import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Detalhes from "../pages/Detalhes";
import Favoritos from "../pages/Favoritos";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <header className="w-full bg-white shadow-md">
        <nav className="flex justify-center gap-6 py-4 text-lg font-semibold text-blue-600">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/detalhes" className="hover:underline">Detalhes</Link>
          <Link to="/favoritos" className="hover:underline">Favoritos</Link>
        </nav>
      </header>

      {/* Conteúdo das páginas */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalhes/:id" element={<Detalhes />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
