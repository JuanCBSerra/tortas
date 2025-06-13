import "./styles.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import gsap from "gsap";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Pedidos from "./pages/Pedidos";
import { CartProvider } from "./hooks/CartContext";
import { ToastProvider } from "./hooks/ToastContext";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <CartProvider>
        <ToastProvider>
          <div className="main-container">
            <Header />
            <div className="content">
              <Routes>
                <Route path="/cart" element={
                  <Cart />
                } />
                <Route path="/" element={

                  <Pedidos />
                } />
                <Route path="*" element={
                  <Navigate to="/" replace />
                } />
              </Routes>
            </div>
            <Footer />
          </div>
        </ToastProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
