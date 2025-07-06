import CartItem from "./CartItem";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";

const CartView = () => {
  const { cart, clearCart, totalItems, totalPrice } = useContext(CartContext);

  const confirmClearCart = () => {
    toast.custom((t) => (
      <div className="toastConfirm">
        <p>¿Estás segur@ de vaciar el carrito?</p>
        <div className="toastButtons">
          <button
            onClick={() => {
              clearCart();
              toast.dismiss(t.id);
            }}
            className="btn"
          >
            Sí
          </button>
          <button onClick={() => toast.dismiss(t.id)} className="btn">
            No
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="cartView">
      <h2>Tu carrito</h2>
      <table className="table">
        <thead className="head">
          <tr>
            <th>Imagen</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
            <th></th>
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
        <div onClick={confirmClearCart} className="btn">
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
