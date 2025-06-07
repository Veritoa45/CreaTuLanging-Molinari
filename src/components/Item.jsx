const Item = ({ prod }) => {
  const { nombre, precio, imagen, categoria } = prod;
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
      <button className="btn-mas">Ver más</button>
    </div>
  );
};

export default Item;
