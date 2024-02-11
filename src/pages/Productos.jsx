import { Link } from "react-router-dom";

export const Productos = ({ productos }) => {
  return (
    <section>
      <h1>Productos</h1>
      <ul>
        {productos.map((product) => (
          <li style={{ listStyleType: "none" }} key={product.id}>
            <Link to={`/productos/${product.id}`}>{product.nombre}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
