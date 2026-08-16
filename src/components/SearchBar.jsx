export default function SearchBar({ text, settext }) {
  return (
    <div className="search-bar">
      <span className="search-icon">🔍</span>
      <input
        type="search"
        value={text}
        onChange={e => settext(e.target.value)}
        placeholder="Search for a coffee..."
      />
      {text && (
        <button className="search-clear" onClick={() => settext('')} type="button">✕</button>
      )}
    </div>
  )
}
