import React, { useEffect, useState } from 'react'
import Search from '../../components/input/Search'
import PokeListBlock from './PokeListBlock'
import PokeListLoader from './PokeListLoader'
import { AnimatePresence } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { pokeList } from '../../actions/pokeListActions'

const PokeBlock = () => {
  const dispatch = useDispatch()

  //Get Data from Redux
  const pokedex = useSelector((state) => state.pokeList)
  const { loading, loadingAdd } = pokedex

  useEffect(() => {
    dispatch(pokeList())
  }, [dispatch])

  const [delayLoad, setDelayLoad] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setDelayLoad(false)
    }, 1000)
    return () => setDelayLoad(true)
  }, [loadingAdd])

  const [showList, setShowList] = useState(true)

  return (
    <div className="poke-list">
      <Search show={showList} setShow={setShowList} />
      {!loading && <PokeListBlock show={showList} setShow={setShowList} />}
      <AnimatePresence>{delayLoad && <PokeListLoader />}</AnimatePresence>
    </div>
  )
}

export default PokeBlock
