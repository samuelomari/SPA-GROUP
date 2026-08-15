import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Home() {
  const { user } = useAuth()

  return (
    <section className="home-page">
      <div className="hero-section">
        <h1>☕ Coffee Menu</h1>
        <p className="lead">
          Discover our handcrafted coffee selection — from bold espressos to smooth lattes.
        </p>
        <div className="hero-cta">
          {!user && (
            <>
              <Link to="/register" className="btn primary">Join Now</Link>
              <Link to="/login" className="btn outline">Sign In</Link>
            </>
          )}
          {user?.role === 'user' && (
            <Link to="/menu" className="btn primary">Browse Menu</Link>
          )}
          {user?.role === 'admin' && (
            <>
              <Link to="/products" className="btn primary">Manage Products</Link>
              <Link to="/add-product" className="btn outline">Add Product</Link>
            </>
          )}
        </div>
      </div>

      <div className="features">
        <div className="container features-grid">
          <div className="feature">
            <h2>🌍 Sourced Globally</h2>
            <p>Beans from Ethiopia, Colombia, Brazil and beyond.</p>
          </div>
          <div className="feature">
            <h2>🔍 Easy to Browse</h2>
            <p>Search and filter our menu to find your perfect cup.</p>
          </div>
          <div className="feature">
            <h2>📱 Works Everywhere</h2>
            <p>Optimized for desktop, tablet, and mobile devices.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
