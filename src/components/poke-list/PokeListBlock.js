import React, { useRef, useCallback, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PokeList from './PokeList'
import { useSelector, useDispatch } from 'react-redux'
import { pokeAdd } from '../../actions/pokeListActions'
import { pokeListContainer, pokeListItem } from '../../animation/animations'

const PokeListBlock = ({ show }) => {
  const dispatch = useDispatch()
  //Get Data from Redux
  const pokedex = useSelector((state) => state.pokeList)
  const { results, next } = pokedex.pokeList
  const { loading, loadingAdd } = pokedex

  const [delayLoad, setDelayLoad] = useState(false)

  useEffect(() => {
    setDelayLoad(results)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayLoad(results)
    }, 500)

    return () => clearTimeout(timer)
  }, [loadingAdd])

  //Do somthing when the element with the ref callback is on screen
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
    <AnimatePresence>
      {show && (
        <motion.ul
          variants={pokeListContainer}
          animate="visible"
          initial="initial"
          exit="exit"
          className="poke-list__overflow"
        >
          {delayLoad &&
            delayLoad.map((pkm, index) =>
              //Apply ref to the last element of the map
              delayLoad.length === index + 1 ? (
                <motion.li
                  key={index}
                  ref={lastPokemonRef}
                  variants={pokeListItem}
                  whileTap={{
                    scale: 0.98,
                  }}
                >
                  <PokeList name={pkm.name} url={pkm.url} />
                </motion.li>
              ) : (
                <motion.li
                  key={index}
                  variants={pokeListItem}
                  whileTap={{
                    scale: 0.98,
                  }}
                >
                  <PokeList name={pkm.name} url={pkm.url} />
                </motion.li>
              )
            )}
        </motion.ul>
      )}
    </AnimatePresence>
  )
}

export default PokeListBlock
