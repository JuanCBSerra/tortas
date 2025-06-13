import { useCart } from "../hooks/CartContext";
import "../styles/cart.css";

export default function Cart() {
  const { cart, removeFromCart, clearCart, addToCart, reduceFromCart, checkoutCart } = useCart();

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^\d.]/g, ""));
    return sum + price * (item.quantity || 1);
  }, 0);

  return (
    <section className="cart-container">
      <h2 className="cart-title">Carrito de compras</h2>
      <h3 className="cart-subtitle">Cuando procedas a finalizar tu compra, te redijiremos a whatsapp para que nos envíes tu pedido</h3>
      {cart.length === 0 ? (
        <p className="cart-empty">Parece que no agregaste tortas a tu pedido todavía.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item) => (
              <li className="cart-item" key={item.id}>
                <img
                  className="cart-item-img"
                  src={item.imageUrl}
                  alt={item.title}
                />
                <div className="cart-item-info">
                  <div className="cart-item-title">{item.title}</div>
                  <div className="cart-item-details">
                    {item.price} x {item.quantity || 1}
                  </div>
                </div>
                <div className="cart-item-buttons" style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.5rem",
                    margin: "1rem 0",
                  }}
                >
                  <button
                    className="button cart-btn"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                  <button
                    className="button cart-btn"
                    onClick={() => reduceFromCart(item.id)}
                  >
                    -
                  </button>
                </div>
                <button
                  className="button cart-btn"
                  style={{ margin: "2rem 0"}}
                  onClick={() => removeFromCart(item.id)}
                >
                  Quitar
                </button>

                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">Total: ${total.toFixed(2)}</div>
          <button className="button cart-clear-btn" onClick={clearCart}>
            Vaciar carrito
          </button>
          <button
            className="button cart-checkout-btn"
            onClick={checkoutCart}
          >
            Finalizar compra
          </button>
        </>
      )}
    </section>
  );
}
