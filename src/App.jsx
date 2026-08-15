
import './App.css'
import Products from './pages/Products'
import AddProduct from './pages/AddProduct'

function App() {
  return (
    <div className="App-container">
      <nav
        style={{
          display: 'flex',
          gap: '20px',
          padding: '1rem',
          backgroundColor: '#333',
          color: '#fff',
        }}
      >
        <span style={{ fontWeight: 'bold' }}>☕ Coffee Menu</span>
        <span style={{ fontWeight: 'bold' }}>➕ Manage/Add Coffee</span>
      </nav>

      <main style={{ padding: '1.5rem' }}>
        <Products />
        <AddProduct />
      </main>
    </div>
  )
}

export default App