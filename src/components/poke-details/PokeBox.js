import React, { useState } from 'react'
import PokeButton from './PokeButton'
import PokeStats from './tabs/PokeStats'
import PokeEvolution from './tabs/PokeEvolution'
import useFetchDetails from '../../hooks/useFetchDetails'
import PokeAbout from './tabs/PokeAbout'

const PokeBox = ({ url, stats, weight, height, abilities }) => {
  const [tab, setTab] = useState('about')
  const { details, loading } = useFetchDetails(url)

  const renderTabs = (whatTab) => {
    switch (whatTab) {
      case 'about':
        return (
          <>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <PokeAbout
                loading={loading}
                details={details}
                weight={weight}
                height={height}
                abilities={abilities}
              />
            )}
          </>
        )
      case 'stats':
        return <>{loading ? <p>Loading...</p> : <PokeStats stats={stats} />}</>
      case 'evolution':
        return <>{loading ? <p>Loading...</p> : <PokeEvolution />}</>
      default:
        return <PokeEvolution>Loading</PokeEvolution>
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
