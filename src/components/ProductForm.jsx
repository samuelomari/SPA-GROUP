import { useState, useEffect } from 'react'

const empty = { name: '', price: '', description: '' }

export default function ProductForm({ initial, onSubmit, onCancel }) {
  const [form, setForm] = useState(initial || empty)

  useEffect(() => { setForm(initial || empty) }, [initial])

  const handle = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    onSubmit({ ...form, price: parseFloat(form.price) })
  }

  return (
    <form className="product-form" onSubmit={submit}>
      <input name="name" value={form.name} onChange={handle} placeholder="Coffee name" required />
      <input name="price" type="number" step="0.01" min="0" value={form.price} onChange={handle} placeholder="Price ($)" required />
      <textarea name="description" value={form.description} onChange={handle} placeholder="Description" required />
      <div className="form-actions">
        <button type="submit" className="btn-primary">{initial ? 'Update' : 'Add Coffee'}</button>
        {onCancel && <button type="button" className="btn-ghost" onClick={onCancel}>Cancel</button>}
      </div>
    </form>
  )
}
