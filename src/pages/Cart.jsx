import { useCart } from '../hooks/CartContext';

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => {
    // Extrae el número del precio (ej: "$15.00" -> 15)
    const price = parseFloat(item.price.replace(/[^\d.]/g, ''));
    return sum + price * (item.quantity || 1);
  }, 0);

  return (
    <section style={{ maxWidth: 600, margin: '40px auto', background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(166,116,110,0.08)', padding: 32 }}>
      <h2 className="hero-title" style={{ fontSize: '2rem', marginBottom: 24 }}>Carrito de compras</h2>
      {cart.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#A9746E' }}>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cart.map(item => (
              <li key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: 18, borderBottom: '1px solid #F6E3B4', paddingBottom: 12 }}>
                <img src={item.imageUrl} alt={item.title} style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 8, marginRight: 16 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 'bold', color: '#4B2E2B' }}>{item.title}</div>
                  <div style={{ color: '#A9746E', fontSize: 15 }}>{item.price} x {item.quantity || 1}</div>
                </div>
                <button className="button" style={{ padding: '6px 14px', fontSize: 14 }} onClick={() => removeFromCart(item.id)}>
                  Quitar
                </button>
              </li>
            ))}
          </ul>
          <div style={{ textAlign: 'right', marginTop: 24, fontWeight: 'bold', color: '#4B2E2B', fontSize: 18 }}>
            Total: ${total.toFixed(2)}
          </div>
          <button className="button" style={{ marginTop: 24, background: '#A9746E' }} onClick={clearCart}>
            Vaciar carrito
          </button>
        </>
      )}
    </section>
  );
};