import './styles.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import { CartProvider } from './hooks/CartContext'
import Cart from './pages/Cart'

function App() {
  return (
    <Router>
      <div className="main-container">
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </CartProvider>
      </div>
    </Router >
  )
}

export default App