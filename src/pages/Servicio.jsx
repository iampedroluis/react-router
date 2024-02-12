import { Outlet, Link } from "react-router-dom";

export const Servicios = () => {
  return (
    <div>
      <h1>Servicios</h1>
      <nav className="menu">
        <Link to="/servicios">Inicio</Link>
        <Link to="/servicios/lista">Lista</Link>
        <Link to="/servicios/garantia">Garantia</Link>
        <Link to="/servicios/politicas">Politicas</Link>
      </nav>
      <Outlet />
    </div>
  );
};
