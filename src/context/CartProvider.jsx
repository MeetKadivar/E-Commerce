import { useState } from "react";
import CartContext from "./CartContext";


function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prevItems, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  }

  const addQuantity = (productId) => {
    setCartItems((prevItems) => prevItems.map(item =>
      item.id === productId ? { ...item, qty: item.qty + 1 } : item
    ));
  }

  const removeQuantity = (productId) => {
    setCartItems((prevItems) => prevItems.map(item =>
      item.id === productId ? { ...item, qty: item.qty - 1 } : item
    ).filter(item => item.qty > 0));
  }

  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, addQuantity, removeQuantity, totalQuantity }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider