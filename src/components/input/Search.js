import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Search = () => {
  const [search, setSearch] = useState('')

  return (
    <motion.form
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: '100%' }}
      transition={{ type: 'tween', delay: 0.2 }}
      className="navdex__input"
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </motion.form>
  )
}

export default Search
