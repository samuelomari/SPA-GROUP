// @vitest-environment jsdom
import{render,screen} from"@testing-library/react"
import{test,expect} from"vitest"
import SearchBar from"../components/SearchBar"
  test("see if the search appears in our page",function() 
   {
    render(<SearchBar text="" settext={function(){}}/>)
     const mysearchbox=screen.getByPlaceholderText("search for the name of the product here")
    expect(mysearchbox).toBeTruthy()
   })