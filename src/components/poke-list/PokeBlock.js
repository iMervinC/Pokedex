import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Search from '../../components/input/Search'
import PokeList from './PokeList'

import { useDispatch, useSelector } from 'react-redux'
import { pokeList } from '../../actions/pokeListActions'

const PokeBlock = () => {
  const dispatch = useDispatch()

  //Get Data from Redux
  const pokedex = useSelector((state) => state.pokeList)
  const { results } = pokedex.pokeList
  const { loading } = pokedex

  useEffect(() => {
    dispatch(pokeList())
  }, [dispatch])

  return (
    <div className="poke-list">
      <Search />
      <motion.div className="poke-list__overflow">
        {loading ? (
          <p>Loading....</p>
        ) : (
          <>
            {results &&
              results.map((pkm, index) => (
                <PokeList
                  key={index}
                  name={pkm.name}
                  url={pkm.url}
                  element={'grass'}
                />
              ))}
          </>
        )}
      </motion.div>
    </div>
  )
}

export default PokeBlock
