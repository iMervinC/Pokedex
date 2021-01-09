import React, { useEffect } from 'react'
import Search from '../../components/input/Search'
import PokeListBlock from './PokeListBlock'

import { useDispatch, useSelector } from 'react-redux'
import { pokeList } from '../../actions/pokeListActions'

const PokeBlock = () => {
  const dispatch = useDispatch()

  //Get Data from Redux
  const pokedex = useSelector((state) => state.pokeList)
  const { loading } = pokedex

  useEffect(() => {
    dispatch(pokeList())
  }, [dispatch])

  return (
    <div className="poke-list">
      <Search />
      {!loading && <PokeListBlock />}
    </div>
  )
}

export default PokeBlock
