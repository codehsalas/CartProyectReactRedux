import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import Nosotros from "./Pages/Nosotros";
import Products from "./Pages/Products";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Carrito from "./Pages/Carrito";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="productos/*" element={<Products />} />
          <Route path="carrito" element={<Carrito />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
