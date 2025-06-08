import { Icon } from "@iconify/react";

const CartWidget = ({ cartCount = 2 }) => {
  return (
    <div className="relative">
      <Icon icon="mdi:cart" width="40" height="40" color="#e3c2fe" />
      {cartCount > 0 && <span className="contador">{cartCount}</span>}
    </div>
  );
};

export default CartWidget;
