import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { img } from '../../helper'
import { useDispatch } from 'react-redux'
import { pokeDetails as initialdata } from '../../actions/pokeListActions'
import PokeImg from './PokeImg'
import PokeBox from './PokeBox'

const Pokemon = () => {
  const [details, setDetails] = useState({})

  const pokemonDetails = useSelector((state) => state.pokeDetails)
  const { loading, pokeDetails } = pokemonDetails

  const { name, id, types, stats } = details
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
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="poke-details__top">
            <h2 className="poke-details__name">{nameI(name)}</h2>
            <p className="poke-details__id">{idToZ(id)}</p>
          </div>
          <div className="poke-details__types">
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
          </div>

          <PokeImg url={img(id)} name={name} />
          <PokeBox pokeId={idToZ(id)} stats={stats} />
        </>
      )}
    </div>
  )
}
export default Pokemon
