import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handle = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch(`http://localhost:3000/users?email=${form.email}`)
      const users = await res.json()
      const user = users[0]
      if (!user || user.password !== form.password) {
        setError('Invalid email or password.')
        return
      }
      login(user)
      navigate(user.role === 'admin' ? '/products' : '/menu')
    } catch {
      setError('Could not connect to server.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>☕ Welcome Back</h1>
        <p className="page-sub">Sign in to your account</p>
        {error && <p className="auth-error">{error}</p>}
        <form className="product-form" onSubmit={handleSubmit}>
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={handle} required />
          <input name="password" type="password" placeholder="Password" value={form.password} onChange={handle} required />
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>
        <p className="auth-footer">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  )
}
