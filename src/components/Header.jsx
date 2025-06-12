import { Link } from "react-router-dom";

import cartLogo from "../assets/shopping_cart.png";
import logoImg from "../assets/logo.png";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <div
          className="logo-container"
        >
          <img
            src={logoImg}
            alt="Pura Delicia Logo"
          />
        </div>
      </Link>
      <nav className="nav">
        <Link to="/cart" className="nav-link" aria-label="Carrito">
          <img
            src={cartLogo}
            alt="Carrito"
          />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
