import React from 'react'
import useGetEvo from '../../../hooks/useGetEvo'
import { motion } from 'framer-motion'
import { imgUrl } from '../../../helper'

const PokeEvolution = ({ evoChain }) => {
  const { details, loading } = useGetEvo(evoChain.url)
  const nameI = (n) => n && n[0].toUpperCase() + n.slice(1)

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  }

  return (
    <div>
      <motion.p
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="evo-title"
      >
        Evolution Chart
      </motion.p>

      {!loading ? (
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="evo"
        >
          {details.map((evo, index) => (
            <motion.div
              variants={item}
              whileHover={{ scale: 1.1 }}
              key={index}
              className="evo-card"
            >
              <img
                className="evo-card__img"
                src={imgUrl(evo.species_id)}
                alt={evo.species_name}
              />
              <p className="evo-card__name">{nameI(evo.species_name)}</p>
              <p className="evo-card__lvl">Lvl. {evo.min_level}</p>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  )
}

export default PokeEvolution
