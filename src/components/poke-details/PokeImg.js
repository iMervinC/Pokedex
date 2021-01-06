import React from 'react'

const PokeImg = ({ url, name }) => {
  return <img className="poke-details__img" src={url} alt={name} />
}

export default PokeImg
