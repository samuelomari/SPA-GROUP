import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Menu from './pages/Menu'
import Products from './pages/Products'
import AddProduct from './pages/AddProduct'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="menu" element={<Menu />} />
            <Route path="products" element={
              <ProtectedRoute><Products /></ProtectedRoute>
            } />
            <Route path="add-product" element={
              <ProtectedRoute><AddProduct /></ProtectedRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
