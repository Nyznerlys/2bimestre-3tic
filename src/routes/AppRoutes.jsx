import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detalhes from "../pages/Detalhes";
import Favoritos from "../pages/Favoritos";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/detalhes">Detalhes</Link>
      <Link to="/favoritos">Favoritos</Link>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalhes/:id" element={<Detalhes />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
