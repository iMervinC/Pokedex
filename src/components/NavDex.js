import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import lens from '../_images/Lens.svg'

import { useSelector } from 'react-redux'

const NavDex = () => {
  const [type, setType] = useState(null)

  const pokedetails = useSelector(
    (state) => state.pokeDetails.pokeDetails.types
  )
  const mainType =
    pokedetails && pokedetails.find((x) => x.slot === 1).type.name

  useEffect(() => {
    setType(mainType)
  }, [pokedetails, mainType])

  useEffect(() => {
    document.body.style = `background: var(--${type ? type : 'white'})`
  }, [type])

  return (
    <header className="navdex">
      <div className="navdex navdex__extension">
        <span className="outer">
          <span
            className="inner"
            style={{
              background: `var(--${type ? type : 'white'})`,
            }}
          ></span>
        </span>
      </div>
      <motion.div className="container">
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', delay: 0.2 }}
          src={lens}
          alt="lens"
          className="navdex__lens"
        />
      </motion.div>
    </header>
  )
}

export default NavDex
