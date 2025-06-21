import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Icon } from "@iconify/react";

const CartItem = ({ compra }) => {
  const { removeItem } = useContext(CartContext);
  const { id, imagen, nombre, precio, cantidad } = compra;

  return (
    <tr className="fila">
      <td className="space">
        <img src={imagen} alt={nombre} className="imagenTabla" />
      </td>
      <td className="space">{nombre}</td>
      <td className="space">{cantidad}</td>
      <td className="space">U$S {precio}</td>
      <td className="space">U$S {precio * cantidad}</td>
      <td className="space">
        <Icon
          icon="mynaui:trash"
          onClick={() => removeItem(id)}
          className="trash"
        />
      </td>
    </tr>
  );
};

export default CartItem;
