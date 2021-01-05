import React, { useState } from 'react'

const Search = () => {
  const [search, setSearch] = useState('')

  return (
    <form className="navdex__input">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <h1>{search}</h1>
    </form>
  )
}

export default Search
