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

  const pokeListContainer = {
    initial: {
      y: 0,
    },
    visible: {
      y: 0,
      transition: { type: 'tween', delayChildren: 0.3, staggerChildren: 0.2 },
    },
  }

  const pokeListItem = {
    initial: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <div className="poke-list">
      <Search />
      <div>
        {loading ? (
          <p>Loading....</p>
        ) : (
          <motion.div
            variants={pokeListContainer}
            animate="visible"
            initial="initial"
            className="poke-list__overflow"
          >
            {results &&
              results.map((pkm, index) => (
                <motion.div
                  key={index}
                  variants={pokeListItem}
                  whileTap={{
                    scale: 0.98,
                  }}
                >
                  <PokeList name={pkm.name} url={pkm.url} element={'grass'} />
                </motion.div>
              ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default PokeBlock
