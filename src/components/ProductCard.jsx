export default function ProductCard({ product, onDelete, onEdit }) {
  const handleDelete = () => {
    if (!window.confirm(`Delete "${product.name}"?`)) return
    onDelete(product.id)
  }

  return (
    <div className="product-card">
      <div className="card-body">
        <h3>{product.name}</h3>
        <p className="price">${parseFloat(product.price || 0).toFixed(2)}</p>
        <p className="description">{product.description}</p>
      </div>
      <div className="card-actions">
        <button type="button" className="btn-edit" onClick={() => onEdit(product)}>Edit</button>
        <button type="button" className="btn-delete" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}
