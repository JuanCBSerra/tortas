import { useEffect, useState } from 'react';
import { fetchCakesFromUnsplash } from '../mocks/cakes';
import CakeCard from './CakeCard';

export default function Gallery() {
    const [cakes, setCakes] = useState(null);

    useEffect(() => {
        fetchCakesFromUnsplash().then(setCakes);
    }, []);

    return (
        <section id="galeria" className="cake-gallery">
            {cakes && cakes.map(cake => (
                <CakeCard cake={cake} key={cake.id} />
            ))}
        </section>
    );
}
