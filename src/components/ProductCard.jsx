import React from "react";

export default function ProductCard({ product, onDelete }) {
  const imageUrl = product.imageUrl || product.image || "";
  const stockStatus = product.isAvailable ?? product.inStock ?? true;

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
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
    }
  };

  return (
    <div className="product-card">
      {imageUrl && (
        <img src={imageUrl} alt={product.name} className="product-image" />
      )}
      <div className="product-details">
        <h3>{product.name}</h3>
        <p className="roast-badge">
          <strong>Roast:</strong> {product.roastLevel || "Medium"}
        </p>
        <p className="price">${Number.parseFloat(product.price || 0).toFixed(2)}</p>
        <p className="description">{product.description}</p>
        <p className={`status ${stockStatus ? "in-stock" : "out-of-stock"}`}>
          {stockStatus ? "In Stock" : "Out of Stock"}
        </p>
        <button type="button" onClick={handleDelete} className="delete-button">
          Delete
        </button>
      </div>
    </div>
  );
}
