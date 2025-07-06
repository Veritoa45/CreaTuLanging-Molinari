import CartItem from "./CartItem";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartView = () => {
  const { cart, clearCart, totalItems, totalPrice } = useContext(CartContext);

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
            <td className="bold">{totalItems()}</td>
            <td className="bold" colSpan={3}>
              U$S {totalPrice()}
            </td>
          </tr>
        </tfoot>
      </table>
      <div className="lineBlock">
        <div onClick={clearCart} className="btn">
          Vaciar carrito
        </div>
        <Link className="btn" to={"/checkout"}>
          Terminar compra
        </Link>
      </div>
    </div>
  );
};

export default CartView;
