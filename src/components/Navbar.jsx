import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <div className="brand">☕ Coffee Menu</div>

        <nav className={`nav ${open ? 'open' : ''}`} aria-label="Main navigation">
          {!user && (
            <>
              <NavLink to="/" end className="nav-link">Home</NavLink>
              <NavLink to="/login" className="nav-link">Login</NavLink>
              <NavLink to="/register" className="nav-link">Register</NavLink>
            </>
          )}
          {user?.role === 'user' && (
            <NavLink to="/menu" className="nav-link">Menu</NavLink>
          )}
          {user?.role === 'admin' && (
            <>
              <NavLink to="/products" className="nav-link">Products</NavLink>
              <NavLink to="/add-product" className="nav-link">Add Product</NavLink>
            </>
          )}
        </nav>

        <div className="nav-right">
          {user && (
            <div className="nav-user">
              <span className="nav-username">👤 {user.name}</span>
              <button className="btn-logout" onClick={handleLogout}>Logout</button>
            </div>
          )}
          <button
            className="nav-toggle"
            aria-expanded={open}
            onClick={() => setOpen(s => !s)}
          >
            <span className="sr">Toggle menu</span>
            <div className="hamburger" />
          </button>
        </div>
      </div>
    </header>
  )
}
