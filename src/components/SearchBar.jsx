export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="search"
        placeholder="Search coffees…"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  )
}
