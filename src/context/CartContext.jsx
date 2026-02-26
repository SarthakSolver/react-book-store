import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    const existing = cart.find((item) => item.id === book.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === book.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...book, qty: 1 }]);
    }
  }

  function increaseQty(id) {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  }

  function decreaseQty(id) {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, increaseQty, decreaseQty }}>
      {children}
    </CartContext.Provider>
  );
}