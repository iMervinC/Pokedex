import React, { useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import PokeList from './PokeList'
import { useSelector, useDispatch } from 'react-redux'
import { pokeAdd } from '../../actions/pokeListActions'
import { pokeListContainer, pokeListItem } from '../../animation/animations'

const PokeListBlock = () => {
  //Get Data from Redux
  const pokedex = useSelector((state) => state.pokeList)
  const { results, next } = pokedex.pokeList
  const { loading, loadingAdd } = pokedex

  const dispatch = useDispatch()

  //Do somthing when the elemt with the ref callback is on screen
  const observer = useRef()
  const lastPokemonRef = useCallback(
    (node) => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          dispatch(pokeAdd(next, results))
        }
      })
      if (node) observer.current.observe(node)
    },
    [loading, next, dispatch, results]
  )

  return (
    <motion.div
      variants={pokeListContainer}
      animate="visible"
      initial="initial"
      className="poke-list__overflow"
    >
      {results &&
        results.map((pkm, index) =>
          results.length === index + 1 ? (
            <motion.div
              key={index}
              ref={lastPokemonRef}
              variants={pokeListItem}
              whileTap={{
                scale: 0.98,
              }}
            >
              <PokeList name={pkm.name} url={pkm.url} />
            </motion.div>
          ) : (
            <motion.div
              key={index}
              variants={pokeListItem}
              whileTap={{
                scale: 0.98,
              }}
            >
              <PokeList name={pkm.name} url={pkm.url} />
            </motion.div>
          )
        )}
      <p>Loading...</p>
    </motion.div>
  )
}

export default PokeListBlock
