import { Icon } from "@iconify/react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <div className="relative">
      <Icon icon="mdi:cart" width="40" height="40" color="#e3c2fe" />
      <span className="contador">{totalItems()}</span>
    </div>
  );
};

export default CartWidget;
