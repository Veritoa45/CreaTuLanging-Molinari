import { Link } from "react-router-dom";

const Item = ({ prod }) => {
  const { nombre, precio, imagen, categoria, id } = prod;
  return (
    <div className="card">
      <img className="img" src={imagen} alt={nombre} />
      <div className="info">
        <h3>{nombre}</h3>
        <h5> U$S {precio}</h5>
        <div className="etiquetas">
          {categoria.map((cat, index) => (
            <span key={index} className="etiqueta">
              {cat}
            </span>
          ))}
        </div>
      </div>
      <Link to={`/item/${id}`} className="btn-mas">
        Ver más
      </Link>
    </div>
  );
};

export default Item;
