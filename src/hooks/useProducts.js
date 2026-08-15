import { useState, useEffect } from 'react'
import { getProducts, createProduct, updateProduct, deleteProduct } from '../services/api'

export function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  const add = async (data) => {
    const product = await createProduct(data)
    setProducts(prev => [...prev, product])
  }

  const update = async (id, data) => {
    const product = await updateProduct(id, data)
    setProducts(prev => prev.map(p => p.id === id ? product : p))
  }

  const remove = async (id) => {
    await deleteProduct(id)
    setProducts(prev => prev.filter(p => p.id !== id))
  }

  return { products, loading, error, add, update, remove }
}
