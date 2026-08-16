function SearchBar({text,settext})
 {
  return(
    <input
      value={text}
      onChange={function(event) 
        {
        settext(event.target.value)
        }}
        placeholder="search for the name of the product here"
    />
  )
 }
export default SearchBar