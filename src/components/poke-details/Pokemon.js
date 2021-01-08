import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { pokeDetails as initialdata } from '../../actions/pokeListActions'
import { animateContainer } from '../../animation/animations'
import PokeImg from './PokeImg'
import PokeBox from './PokeBox'

const Pokemon = () => {
  const [details, setDetails] = useState({})

  const pokemonDetails = useSelector((state) => state.pokeDetails)
  const { loading, pokeDetails } = pokemonDetails

  const { name, id, types, stats, weight, height, species, abilities } = details
  const idToZ = (o) => o && o.toString().padStart(3, '0')
  const nameI = (n) => n && n[0].toUpperCase() + n.slice(1)

  useEffect(() => {
    setDetails(pokeDetails)
  }, [pokeDetails])

  //Load Default Pokemon
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initialdata(384))
  }, [dispatch])

  return (
    <div className="poke-details">
      {!loading && (
        <>
          <motion.div
            variants={animateContainer}
            animate="visible"
            initial="initial"
            className="poke-details__top"
          >
            <h2 className="poke-details__name">{nameI(name)}</h2>
            <p className="poke-details__id">{idToZ(id)}</p>
          </motion.div>
          <motion.div
            variants={animateContainer}
            animate="visible"
            initial="initial"
            className="poke-details__types"
          >
            {types &&
              types.map((type, index) => (
                <p
                  className="type"
                  key={index}
                  style={{ background: `var(--${type.type.name})` }}
                >
                  {nameI(type.type.name)}
                </p>
              ))}
          </motion.div>

          <PokeImg id={id} name={name} />
          <PokeBox
            stats={stats}
            url={species && species.url}
            weight={weight}
            height={height}
            abilities={abilities}
          />
        </>
      )}
    </div>
  )
}
export default Pokemon
