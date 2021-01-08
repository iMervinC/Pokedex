import React from 'react'
import { motion } from 'framer-motion'
import { statStyle, status } from '../../../helper'

const PokeStats = ({ stats }) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <div className="poke-status">
      <motion.h3 animate={{ y: 0, opacity: 1 }} initial={{ y: -8, opacity: 0 }}>
        Base Stats
      </motion.h3>
      <motion.div
        className="poke-stats"
        variants={container}
        animate="visible"
        initial="hidden"
      >
        {stats.map((stat, index) => (
          <motion.div
            variants={item}
            whileHover={{ borderRadius: '100%' }}
            className="poke-stat"
            key={index}
            style={statStyle(stat.stat.name)}
          >
            <p className="poke-stat__name">{status(stat.stat.name)}</p>
            <p className="poke-stat__val">{stat.base_stat}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default PokeStats
