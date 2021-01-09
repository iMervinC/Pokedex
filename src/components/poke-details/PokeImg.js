import React from 'react'
import { img } from '../../helper'

import { motion } from 'framer-motion'

const PokeImg = ({ id, name }) => {
  const url = img(id)

  return (
    <motion.img
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 40, opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="poke-details__img"
      src={url}
      alt={name}
    />
  )
}

export default PokeImg
