const UNSPLASH_ACCESS_KEY = '8BOkrtJIvO9VO04n-BgJJ51APklricfModd_li-gnF8'; // Reemplaza por tu API key de Unsplash
const COLLECTION_ID = 'ZZCio3F4J24'; // Reemplaza por el ID de la colección de Unsplash

export async function fetchCakesFromUnsplash() {
    const url = `https://api.unsplash.com/collections/${COLLECTION_ID}/photos?client_id=${UNSPLASH_ACCESS_KEY}&per_page=10`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Error al obtener las fotos de Unsplash');
    }
    const data = await response.json();

    // Adaptar los datos al formato de "cake"
    return data.map((photo, idx) => ({
        id: idx + 1, // ID simple basado en el índice
        title: photo.description || photo.alt_description || `Torta ${idx + 1}`,
        description: photo.alt_description || 'Torta artesanal de nuestra colección.',
        price: `$${(12 + Math.floor(Math.random() * 8))}.00`, // Precio aleatorio de ejemplo
        imageUrl: photo.urls.regular
    }));
}