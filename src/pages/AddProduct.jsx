import React, { useState, useEffect } from "react";

export default function AddProduct() {
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    roastLevel: "Light",
    price: "",
    imageUrl: "",
    description: "",
    isAvailable: true,
  });

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:3000/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return response.json();
  };

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      roastLevel: "Light",
      price: "",
      imageUrl: "",
      description: "",
      isAvailable: true,
    });
    setEditingId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      price: Number.parseFloat(formData.price),
    };

    const url = editingId
      ? `http://localhost:3000/products/${editingId}`
      : "http://localhost:3000/products";
    const method = editingId ? "PUT" : "POST";

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Failed to save product");
        }
        return response.json();
      })
      .then((data) => {
        if (editingId) {
          setProducts((prev) =>
            prev.map((product) => (product.id === editingId ? data : product))
          );
        } else {
          setProducts((prev) => [...prev, data]);
        }
        resetForm();
      })
      .catch((error) => console.error("Error saving product:", error));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/products/${id}`, { method: "DELETE" })
      .then((res) => {
        if (res.ok) {
          setProducts((prev) => prev.filter((item) => item.id !== id));
          if (editingId === id) {
            resetForm();
          }
        }
      })
      .catch((error) => console.error("Error deleting product:", error));
  };

  return (
    <div className="product-manager">
      <h2>{editingId ? "Edit Coffee" : "Add Coffee"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <select name="roastLevel" value={formData.roastLevel} onChange={handleChange} required>
          <option value="Light">Light</option>
          <option value="Medium">Medium</option>
          <option value="Dark">Dark</option>
        </select>
        <input
          type="number"
          step="0.01"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />
        <input
          type="url"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          placeholder="Image URL"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <label>
          <input
            type="checkbox"
            name="isAvailable"
            checked={formData.isAvailable || false}
            onChange={handleChange}
          />
          Available
        </label>
        <button type="submit">{editingId ? "Update" : "Add"}</button>
        {editingId && (
          <button type="button" onClick={resetForm}>
            Cancel
          </button>
        )}
      </form>

      <h3>Manage Coffee</h3>
      {products.map((item) => (
        <div key={item.id} style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <span>
            <strong>{item.name}</strong> - ${item.price}
          </span>
          <button
            type="button"
            onClick={() => {
              setEditingId(item.id);
              setFormData(item);
            }}
          >
            Edit
          </button>
          <button type="button" onClick={() => handleDelete(item.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
   
        
        
    

            