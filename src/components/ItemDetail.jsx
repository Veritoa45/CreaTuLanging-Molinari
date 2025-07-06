import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ detail }) => {
  const { addItem } = useContext(CartContext);
  const [purchase, setPurchase] = useState(false);

  const onAdd = (cantidad) => {
    addItem(detail, cantidad);
    setPurchase(true);
  };

  return (
    <div className="cardDescription">
      <div className="cardInformation">
        <img src={detail.imagen} alt={detail.nombre} className="imageCard" />
      </div>
      <div className="textInformation">
        <div className="textLine">
          <h2>{detail.nombre}</h2>
          <p className="bold">U$S {detail.precio}</p>
        </div>
        <p className="bold">{detail.descripcion}</p>
      </div>
      {purchase ? (
        <div className="line">
          <Link className="btn" to={"/cart"}>
            Ir al carrito
          </Link>
          <Link className="btn" to={"/"}>
            Seguir comprando
          </Link>
        </div>
      ) : (
        <ItemCount stock={detail.stock} onAdd={onAdd} />
      )}
    </div>
  );
};

export default ItemDetail;
