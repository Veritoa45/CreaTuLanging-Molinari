import ItemCount from "./ItemCount";

const ItemDetail = ({ detail }) => {
  const onAdd = (cantidad) => {
    alert(`Agregaste ${cantidad} items`);
  };

  return (
    <div className="cardDescription">
      <div className="cardInformation">
        <img src={detail.imagen} alt={detail.nombre} className="imageCard" />
      </div>
      <div className="textInformation">
        <div className="textLine">
          <h2>{detail.nombre}</h2>
          <p className="text-cyan-600 text-xl font-semibold">
            U$S {detail.precio}
          </p>
        </div>
        <p className="text-slate-600 leading-normal font-light">
          {detail.descripcion}
        </p>
      </div>
      <ItemCount stock={detail.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
