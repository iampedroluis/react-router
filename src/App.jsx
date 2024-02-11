import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Acerca } from "./pages/Acerca";
import { Contacto } from "./pages/Contacto";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Error404 } from "./pages/Error404";
import { Productos } from "./pages/Productos";
import { ProductoDetalle } from "./pages/ProductoDetalle";
import { useState } from "react";

function App() {
  const[productos, setProductos] = useState([
    { id: 1, nombre: "Producto 1", precio: 10.99 },
    { id: 2, nombre: "Producto 2", precio: 20.49 },
    { id: 3, nombre: "Producto 3", precio: 15.75 },
    { id: 4, nombre: "Producto 4", precio: 8.99 },
    { id: 5, nombre: "Producto 5", precio: 30.99 },
  ])
  return (
    <>
      <BrowserRouter>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/about" element={<Navigate to="/acerca" />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/productos" element={<Productos productos={productos} />} />
          <Route path="/productos/:id" element={<ProductoDetalle productos={productos} />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
