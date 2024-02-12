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
import { Servicios } from "./pages/Servicio";
import { ServiciosGarantia } from "./pages/ServiciosGarantia";
import { ServiciosLista } from "./pages/ServiciosLista";
import { ServiciosPoliticas } from "./pages/ServiciosPoliticas";
import { ServiciosHome } from "./pages/ServiciosHome";
import { ServicioDetalle } from "./pages/ServicioDetalle";

function App() {
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Producto 1", precio: 10.99 },
    { id: 2, nombre: "Producto 2", precio: 20.49 },
    { id: 3, nombre: "Producto 3", precio: 15.75 },
    { id: 4, nombre: "Producto 4", precio: 8.99 },
    { id: 5, nombre: "Producto 5", precio: 30.99 },
  ]);

  const [servicios, setServicios] = useState([
    { id: 1, nombre: "Servicio 1", precio: 1580.99 },
    { id: 2, nombre: "Servicio 2", precio: 20050.49 },
    { id: 3, nombre: "Servicio 3", precio: 154245.75 },
    { id: 4, nombre: "Servicio 4", precio: 84757.99 },
    { id: 5, nombre: "Servicio 5", precio: 37680.99 },
  ]);

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
          <Route
            path="/productos"
            element={<Productos productos={productos} />}
          />
          <Route
            path="/productos/:id"
            element={<ProductoDetalle productos={productos} />}
          />
          <Route path="/servicios" element={<Servicios />}>
            <Route index element={<ServiciosHome />} />
            <Route path="garantia" element={<ServiciosGarantia />} />
            <Route
              path="lista"
              element={<ServiciosLista servicios={servicios} />}
            />
            <Route path="politicas" element={<ServiciosPoliticas />} />
            <Route
              path=":id"
              element={
                <>
                  <ServiciosLista servicios={servicios} />
                  <ServicioDetalle servicios={servicios} />
                </>
              }
            />
          </Route>

          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
