import { useCart } from '../hooks/CartContext';

export default function CakeCard({ cake }) {
  const { addToCart } = useCart();
  return (
    <div className="cake-card">
      <img
        className="cake-photo"
        src={cake.imageUrl}
        alt={cake.title}
      />
      <div className="cake-info">
        <div>
          <h2 className="cake-title">{cake.title}</h2>
          <p className="cake-description">{cake.description}</p>
        </div>
        <div className="cake-price">{cake.price}</div>
        <button
          className="button"
          style={{ marginTop: 12, fontSize: '0.95rem', padding: '8px 16px' }}
          onClick={() => addToCart(cake)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
