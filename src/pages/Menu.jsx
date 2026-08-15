import { useState } from 'react'
import { useProducts } from '../hooks/useProducts'
import SearchBar from '../components/SearchBar'
import { useAuth } from '../context/AuthContext'

export default function Menu() {
  const { products, loading, error } = useProducts()
  const { user } = useAuth()
  const [query, setQuery] = useState('')

  if (loading) return <div className="status-msg">Loading menu…</div>
  if (error) return <div className="status-msg error">Error: {error}</div>

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="products-page">
      <h1>☕ Our Coffee Menu</h1>
      <p className="page-sub">Welcome, {user?.name}! Browse our selection below.</p>
      <SearchBar value={query} onChange={setQuery} />
      {filtered.length === 0
        ? <p className="empty-msg">No coffees found.</p>
        : (
          <div className="product-grid">
            {filtered.map(p => (
              <div key={p.id} className="product-card">
                <div className="card-body">
                  <h3>{p.name}</h3>
                  <p className="price">${parseFloat(p.price || 0).toFixed(2)}</p>
                  <p className="description">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        )
      }
    </div>
  )
}
