import { useState } from 'react'
import { useProducts } from '../hooks/useProducts'
import ProductCard from '../components/ProductCard'
import SearchBar from '../components/SearchBar'
import ProductForm from '../components/ProductForm'

export default function Products() {
  const { products, loading, error, update, remove } = useProducts()
  const [query, setQuery] = useState('')
  const [editing, setEditing] = useState(null)

  if (loading) return <div className="status-msg">Loading coffees…</div>
  if (error) return <div className="status-msg error">Error: {error}</div>

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  )

  const handleEdit = async (data) => {
    await update(editing.id, data)
    setEditing(null)
  }

  return (
    <div className="products-page">
      <h1>☕ Coffee Menu</h1>
      <SearchBar value={query} onChange={setQuery} />

      {editing && (
        <div className="edit-overlay">
          <div className="edit-modal">
            <h2>Edit Coffee</h2>
            <ProductForm initial={editing} onSubmit={handleEdit} onCancel={() => setEditing(null)} />
          </div>
        </div>
      )}

      {filtered.length === 0
        ? <p className="empty-msg">No coffees found.</p>
        : (
          <div className="product-grid">
            {filtered.map(p => (
              <ProductCard key={p.id} product={p} onDelete={remove} onEdit={setEditing} />
            ))}
          </div>
        )
      }
    </div>
  )
}
