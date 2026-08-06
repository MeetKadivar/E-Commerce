
function Search({searchValue}) {

  return (
    <div>
        <input type="text" placeholder="Search products..." onChange={(e) => searchValue(e.target.value)} />
    </div>
  )
}

export default Search