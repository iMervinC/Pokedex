import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { img } from '../../helper'

const Pokemon = () => {
  const [details, setDetails] = useState({})

  const pokemonDetails = useSelector((state) => state.pokeDetails)
  const { loading, pokeDetails } = pokemonDetails

  const { name, order, types, sprites } = details
  const id = (o) => o.toString().padStart(3, '0')

  useEffect(() => {
    setDetails(pokeDetails)
  }, [pokeDetails])

  return (
    <div className="poke-details">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>{name}</h2>
          <p>{order && id(order)}</p>
          {types &&
            types.map((type, index) => <p key={index}>{type.type.name}</p>)}
          {/* <img src={img(order)} alt={name} /> */}
        </>
      )}
    </div>
  )
}
export default Pokemon
