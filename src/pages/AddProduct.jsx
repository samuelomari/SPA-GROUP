import { useNavigate } from 'react-router-dom'
import { useProducts } from '../hooks/useProducts'
import ProductForm from '../components/ProductForm'

export default function AddProduct() {
  const { add } = useProducts()
  const navigate = useNavigate()

  const handleSubmit = async (data) => {
    await add(data)
    navigate('/products')
  }

  return (
    <div className="add-product-page">
      <h1>Add New Coffee</h1>
      <p className="page-sub">Fill in the details to add a new item to the menu.</p>
      <ProductForm onSubmit={handleSubmit} />
    </div>
  )
}
