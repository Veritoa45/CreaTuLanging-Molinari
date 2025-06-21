import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, cantidad) => {
    if (isInCart(item.id)) {
      const updatedCart = cart.map((prod) => {
        if (prod.id === item.id) {
          return { ...prod, cantidad: prod.cantidad + cantidad };
        }
        return prod;
      });
      setCart(updatedCart);
      return;
    }
    setCart([...cart, { ...item, cantidad: cantidad }]);
  };

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
