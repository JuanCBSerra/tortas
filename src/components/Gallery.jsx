import { useEffect, useState } from 'react';
import { fetchCakesFromUnsplash } from '../mocks/cakes';
import CakeCard from './CakeCard';
import "../styles/Gallery.css";

export default function Gallery() {
    const [cakes, setCakes] = useState(null);

    useEffect(() => {
        fetchCakesFromUnsplash().then(setCakes);
    }, []);

    return (
        <section className="cake-gallery">
            {cakes && cakes.map(cake => (
                <CakeCard cake={cake} key={cake.id} />
            ))}
        </section>
    );
}
