import{useState}from"react"
function useSearch(items) 
{
  const [search,setSearch]=useState("")
  const results=items.filter(function(item)
   {
    return item.title.includes(search)
   })
  return[search,setSearch,results]
}
export default useSearch


