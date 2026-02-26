import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {

  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="bg-blue-600 text-white px-6 py-4 flex justify-between">
      <h1 className="font-bold text-xl">📚 Book Store</h1>
      <div className="text-right">
        <p>🛒 Items: {totalItems}</p>
        <p>💰 ₹{totalPrice}</p>
      </div>
    </div>
  );
}