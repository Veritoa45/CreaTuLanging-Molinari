import { Icon } from "@iconify/react";

const CartWidget = ({ cartCount = 0 }) => {
  return (
    <div className="relative">
      <Icon icon="mdi:cart" width="40" height="40" color="#e3c2fe" />
      {cartCount > 0 && (
        <span className="absolute -bottom-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {cartCount}
        </span>
      )}
    </div>
  );
};

export default CartWidget;
