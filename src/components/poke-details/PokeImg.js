import React from 'react'
import { img } from '../../helper'
import pokeball from '../../_images/pokeballColored.svg'

const PokeImg = ({ id, name }) => {
  const url = img(id)

  return (
    <>
      {id ? (
        <img className="poke-details__img" src={url} alt={name} />
      ) : (
        <img className="poke-details__img" src={pokeball} alt="loader" />
      )}
    </>
  )
}

export default PokeImg
