import React from "react";

export default function ProductCard({ product, onDelete }) {
  const handleDelete = () => {
    if (!window.confirm(`Are you sure you want to delete ${product.name}?`)) return;

    fetch(`http://localhost:3000/products/${product.id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          onDelete(product.id);
        } else {
          alert("Failed to delete product.");
        }
      })
      .catch((err) => console.error("Error deleting product:", err));
  };

  return (
    <div className="product-card">
      <div className="product-details">
        <h3>{product.name}</h3>
        <p className="price">${Number.parseFloat(product.price || 0).toFixed(2)}</p>
        <p className="description">{product.description}</p>
        
        <button type="button" onClick={handleDelete} className="delete-button">
          Delete
        </button>
      </div>
    </div>
  );
}