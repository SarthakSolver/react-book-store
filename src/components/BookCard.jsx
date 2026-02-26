import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function BookCard({ book }) {
  const { cart, addToCart, increaseQty, decreaseQty } = useContext(CartContext);

  const itemInCart = cart.find((item) => item.id === book.id);
  return (
   <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition flex flex-col max-w-xs mx-auto">
      {/* Image */}
      <div className="w-full aspect-[3/4] overflow-hidden bg-gray-50 rounded flex items-center justify-center">
  <img
    src={book.image}
    alt={book.title}
    className="h-full object-contain"
  />
</div>

      {/* Info */}
      <h2 className="font-bold text-base">{book.title}</h2>
      <p className="text-sm text-gray-600">{book.author}</p>

      <p className="mt-1 font-semibold">₹{book.price}</p>
      <p className="text-yellow-500 text-sm">⭐ {book.rating}</p>

      {/* Button */}
      {itemInCart ? (
        <div className="flex items-center justify-between mt-3">
          <button
            onClick={() => decreaseQty(book.id)}
            className="bg-red-500 text-white px-3 rounded"
          >
            -
          </button>

          <span>{itemInCart.qty}</span>

          <button
            onClick={() => increaseQty(book.id)}
            className="bg-green-500 text-white px-3 rounded"
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={() => addToCart(book)}
          className="mt-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}
