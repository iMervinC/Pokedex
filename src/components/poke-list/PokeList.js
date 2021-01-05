import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { getId, id, imgUrl } from '../../helper'
import { ReactComponent as Pokeball } from '../../_images/pokeball.svg'

const PokeList = ({ url, name }) => {
  //Uppercase first letter in pokemon name
  const nameI = name[0].toUpperCase() + name.slice(1)
  //Get Pokemon Id
  const pkmId = getId(url)
  const pkmUrlId = id(url)

  const [types, setTypes] = useState(null)
  const mainType = () => types && types.find((x) => x.slot === 1).type.name

  const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const pokemon = await res.json()
    setTypes(pokemon.types)
  }

  useEffect(() => {
    getPokemon(pkmUrlId)
  }, [pkmUrlId])

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{
        scale: 0.98,
      }}
      className="poke-list__items"
      style={{ background: `var(--${types ? mainType() : 'normal'})` }}
    >
      <span>#{pkmId}</span>
      <p>{nameI}</p>
      <img src={imgUrl(url)} alt={nameI} />
      <Pokeball />
    </motion.div>
  )
}

export default PokeList
