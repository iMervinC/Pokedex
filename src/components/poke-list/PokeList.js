import React, { useEffect, useState } from 'react'
import { getId, id, imgUrl } from '../../helper'
import { ReactComponent as Pokeball } from '../../_images/pokeball.svg'

import { useDispatch } from 'react-redux'
import { pokeDetails } from '../../actions/pokeListActions'

const PokeList = ({ url, name }) => {
  //Uppercase first letter in pokemon name
  const nameI = name[0].toUpperCase() + name.slice(1)
  //Get Pokemon Id
  const pkmId = getId(url)
  const pkmUrlId = id(url)

  //get pokemon details
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

  //Use Redux
  const dispatch = useDispatch()

  const clickHandler = (idForUrl) => {
    dispatch(pokeDetails(idForUrl))
  }

  return (
    <div
      className="poke-list__items"
      style={{ background: `var(--${types ? mainType() : 'normal'})` }}
      onClick={() => clickHandler(pkmUrlId)}
    >
      <span>#{pkmId}</span>
      <p>{nameI}</p>

      <img src={imgUrl(url)} alt={nameI} />

      <Pokeball />
    </div>
  )
}

export default PokeList
