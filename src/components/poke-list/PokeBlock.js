import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Search from '../../components/input/Search'
import PokeList from './PokeList'

import { pokeListContainer, pokeListItem } from '../../animation/animations'

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
      <div>
        {!loading && (
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
