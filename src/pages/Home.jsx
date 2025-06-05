import Gallery from "../components/Gallery";

const Home = () => {
    return (
        <>
            <section className="hero-section">
                <h1 className="hero-title">¡Las tortas más ricas y frescas!</h1>
                <p className="hero-subtitle">
                    Descubre nuestra variedad de tortas artesanales, hechas con amor y los mejores ingredientes.
                </p>
            </section>
            <Gallery/>
        </>

    );
};

export default Home;