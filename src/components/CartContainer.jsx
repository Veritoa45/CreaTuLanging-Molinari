import EmptyCart from "./EmptyCart";
import CartView from "./CartView";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const CartContainer = () => {
  const { cart } = useContext(CartContext);

  return <>{!cart.length ? <EmptyCart /> : <CartView />}</>;
};

export default CartContainer;
