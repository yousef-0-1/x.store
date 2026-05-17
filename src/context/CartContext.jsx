import { useState, createContext, useContext, useEffect } from "react";

export const CartContext = createContext({});
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const addToCart = (product, quantity, size, color) => {
    const exists = cart.find(
      (item) =>
        item.id === product.id && item.size === size && item.color === color,
    );
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id && item.size === size && item.color === color
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        ),
      );
    } else {
      setCart([
        ...cart,
        {
          id: product.id,
          name: product.title,
          thumbnail: product.thumbnail,
          price: product.price,
          discount: product.discountPercentage,
          quantity,
          size,
          color,
        },
      ]);
    }
  };
  const removeFromCart = (cartItemId, size, color) => {
    setCart(
      cart.filter(
        (item) =>
          item.id !== cartItemId || item.size !== size || item.color !== color,
      ),
    );
  };
  const updateQuantity = (cartItemId, size, color, newQuantity) => {
    setCart(
      cart.map((item) =>
        item.id === cartItemId && item.size === size && item.color === color
          ? { ...item, quantity: item.quantity + newQuantity }
          : item,
      ),
    );
  };
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
