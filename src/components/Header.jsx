import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="logo-container">
                <div className="logo">Tortas Deliciosas</div>
            </div></Link>
            <nav className="nav">
                <Link to="/cart" className="nav-link">
                    Carrito
                </Link>
            </nav>
        </header>
    )
};

export default Header;