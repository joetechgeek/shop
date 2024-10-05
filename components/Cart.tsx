// components/Cart.tsx
import React from 'react';

interface CartItem {
  id: number; // Adjust according to your CartItem structure
  price: number;
  // Add other properties as needed
}

const Cart: React.FC<{ cartItems?: CartItem[]; clearCart: () => void }> = ({ cartItems = [], clearCart }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0); // This will now work even if cartItems is undefined

  return (
    <div className="mt-4 p-4 border-t">
      <h2 className="text-xl font-semibold">Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            Item ID: {item.id} - Price: ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <div className="font-bold">Total: ${total.toFixed(2)}</div>
      <button onClick={clearCart} className="mt-2 p-2 bg-red-500 text-white">
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
