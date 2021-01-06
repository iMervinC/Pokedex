import React, { useState } from 'react'
import PokeButton from './PokeButton'
import PokeStats from './tabs/PokeStats'

const PokeBox = ({ pokeId, stats }) => {
  const [tab, setTab] = useState('about')

  const renderTabs = (whatTab) => {
    switch (whatTab) {
      case 'about':
        return <p>About</p>
      case 'stats':
        return <PokeStats stats={stats} />
      case 'evolution':
        return <p>Evolution</p>
      default:
        return <p>Loading</p>
    }
  }

  return (
    <div className="poke-details__box">
      <PokeButton setState={setTab} />
      {renderTabs(tab)}
    </div>
  )
}

export default PokeBox
