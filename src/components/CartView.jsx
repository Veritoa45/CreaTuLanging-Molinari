import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartView = () => {
  const { cart, clearCart } = useContext(CartContext);

  return (
    <div className="cartView">
      <h2>Tu carrito</h2>
      <table className="table">
        <thead className="head">
          <tr>
            <th className="th">Imagen</th>
            <th className="th">Producto</th>
            <th className="th">Cantidad</th>
            <th className="th">Precio</th>
            <th className="th">Total</th>
            <th className="th"></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((compra) => (
            <CartItem key={compra.id} compra={compra} />
          ))}
        </tbody>
        <tfoot>
          <tr className="head">
            <th className="bold" colSpan={2}>
              Total
            </th>
            <td className="bold">3</td>
            <td className="bold" colSpan={3}>
              U$S 21,000
            </td>
          </tr>
        </tfoot>
      </table>
      <div onClick={clearCart} className="btnVaciar">
        Vaciar carrito
      </div>
    </div>
  );
};

export default CartView;
