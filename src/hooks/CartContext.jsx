// CartContext.js
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function checkoutCart() {
    if (cart.length === 0) {
      return;
    }
    // Generar mensaje para WhatsApp
    const itemsMsg = cart.map(item => `${item.title} x${item.quantity || 1}`).join("%0A");
    const total = cart.reduce((sum, item) => {
      const price = parseFloat(item.price.replace(/[^\d.]/g, ""));
      return sum + price * (item.quantity || 1);
    }, 0);
    const message = `Hola! Quiero hacer un pedido:%0A${itemsMsg}%0ATotal: $${total.toFixed(2)}`;
    const phone = "5491121645718";
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, "_blank");
    clearCart();
  }

  function addToCart(product) {
    setCart(prev =>
      prev.find(item => item.id === product.id)
        ? prev.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prev, { ...product, quantity: 1 }]
    );
  }

  function removeFromCart(id) {
    setCart(prev => prev.filter(item => item.id !== id));
  }

  function reduceFromCart(id) {
    setCart(prev => {
      const item = prev.find(item => item.id === id);
      if (item && item.quantity > 1) {
        return prev.map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return prev.filter(item => item.id !== id);
    })
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, reduceFromCart,  clearCart, checkoutCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}