import React from "react";
import { Link } from "react-router-dom";

export const ServiciosLista = ({ servicios }) => {
  return (
    <>
      <h2>Conoce nuestros servicios</h2>
      <ul>
        {servicios.map((servicio) => (
          <li style={{ listStyleType: "none" }} key={servicio.id}>
            <Link to={`/servicios/${servicio.id}`}>{servicio.nombre}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
