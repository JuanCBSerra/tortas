import Gallery from "../components/Gallery";
import "../styles/pedidos.css";

const Pedidos = () => {
      
    return (
        <div>
            <section className="title-container">
                <h1 className="title">Descubrí nuestras tortas!</h1>
                <p className="subtitle">
                    Llená tu carrito con las tortas que más te gusten.
                </p>
            </section>
            <Gallery />
        </div>
    );
};

export default Pedidos;