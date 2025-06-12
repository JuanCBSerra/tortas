import { useCart } from '../hooks/CartContext';
import { useToast } from '../hooks/ToastContext';
import { useCallback } from 'react';
import "../styles/cake-card.css";

export default function CakeCard({ cake }) {
  const { addToCart } = useCart();
  const { addToast} = useToast();

  const handleAddToCart = useCallback((cake) => {
    addToCart(cake);
    addToast(`¡${cake.title} ha sido agregado al carrito!`);
  }, [addToast, addToCart]);

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
          onClick={() => handleAddToCart(cake)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
