import "../styles/footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            © {new Date().getFullYear()} Pura Delicia. Todos los derechos reservados.
        </footer>
    )
};

export default Footer;