const BASE = 'http://localhost:3000/products'

export const getProducts = () => fetch(BASE).then(r => r.json())

export const createProduct = (data) =>
  fetch(BASE, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }).then(r => r.json())

export const updateProduct = (id, data) =>
  fetch(`${BASE}/${id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }).then(r => r.json())

export const deleteProduct = (id) =>
  fetch(`${BASE}/${id}`, { method: 'DELETE' })
