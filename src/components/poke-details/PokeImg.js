import React from 'react'
import { img } from '../../helper'

import { motion, AnimatePresence } from 'framer-motion'

const PokeImg = ({ id, name }) => {
  const url = img(id)

  return (
    <AnimatePresence>
      {id && (
        <motion.img
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="poke-details__img"
          src={url}
          alt={name}
        />
      )}
    </AnimatePresence>
  )
}

export default PokeImg
