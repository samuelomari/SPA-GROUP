import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Register() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handle = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const check = await fetch(`http://localhost:3000/users?email=${form.email}`)
      const existing = await check.json()
      if (existing.length > 0) {
        setError('An account with this email already exists.')
        return
      }
      const res = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, role: 'user' }),
      })
      const newUser = await res.json()
      login(newUser)
      navigate('/menu')
    } catch {
      setError('Could not connect to server.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>☕ Join Us</h1>
        <p className="page-sub">Create a free account to browse our menu</p>
        {error && <p className="auth-error">{error}</p>}
        <form className="product-form" onSubmit={handleSubmit}>
          <input name="name" placeholder="Full name" value={form.name} onChange={handle} required />
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={handle} required />
          <input name="password" type="password" placeholder="Password" value={form.password} onChange={handle} required minLength={6} />
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? 'Creating account…' : 'Create Account'}
          </button>
        </form>
        <p className="auth-footer">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  )
}
