import React, { useState } from 'react'
import { motion } from 'framer-motion'
import PokeButton from './PokeButton'
import PokeStats from './tabs/PokeStats'
import PokeEvolution from './tabs/PokeEvolution'
import useFetchDetails from '../../hooks/useFetchDetails'
import PokeAbout from './tabs/PokeAbout'
import PokeLoader from './PokeLoader'

const PokeBox = ({ url, stats, weight, height, abilities }) => {
  const [tab, setTab] = useState('about')
  const { details, loading } = useFetchDetails(url)

  const renderTabs = (whatTab) => {
    switch (whatTab) {
      case 'about':
        return (
          <>
            {loading ? (
              <PokeLoader />
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
        return <PokeStats stats={stats} />
      case 'evolution':
        return (
          <>
            {loading ? (
              <PokeLoader />
            ) : (
              <PokeEvolution evoChain={details.evolution_chain} />
            )}
          </>
        )
      default:
        return <PokeEvolution>Loading</PokeEvolution>
    }
  }

  const selector = (whatTab) => {
    switch (whatTab) {
      case 'about':
        return { left: 0 }
      case 'evolution':
        return { right: 0 }
      default:
        return {}
    }
  }

  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: '100%', opacity: 0 }}
      transition={{ type: 'tween' }}
      className="poke-details__box"
    >
      <PokeButton setState={setTab} pos={selector(tab)} />
      {renderTabs(tab)}
    </motion.div>
  )
}

export default PokeBox
