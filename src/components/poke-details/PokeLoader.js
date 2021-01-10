import React from 'react'
import { motion } from 'framer-motion'
import pokeball from '../../_images/pokeballColored.svg'

const animate = {
  animationOne: {
    x: ['-48%', '-52%'],
    y: '50%',

    rotate: [-10, 10],
    transition: {
      rotate: {
        repeat: Infinity,
        duration: 0.4,
      },
      x: {
        repeat: Infinity,
        duration: 0.4,
      },
    },
  },
}

const PokeLoader = () => {
  return (
    <div className="pokeloader">
      <motion.img
        variants={animate}
        animate="animationOne"
        src={pokeball}
        alt="pokeballLoader"
        style={{ transformOrigin: 'bottom' }}
      />
    </div>
  )
}

export default PokeLoader
