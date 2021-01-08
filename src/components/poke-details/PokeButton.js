import React from 'react'
import { motion } from 'framer-motion'

const PokeButton = ({ setState, pos }) => {
  return (
    <div className="radio-group">
      <input
        type="radio"
        id="option-one"
        name="details"
        value="about"
        defaultChecked
        onClick={(e) => setState(e.target.value)}
      />
      <label htmlFor="option-one">About</label>
      <input
        type="radio"
        id="option-two"
        name="details"
        value="stats"
        onClick={(e) => setState(e.target.value)}
      />
      <label htmlFor="option-two">Stats</label>
      <input
        type="radio"
        id="option-three"
        name="details"
        value="evolution"
        onClick={(e) => setState(e.target.value)}
      />
      <label htmlFor="option-three">Evolution</label>
      <motion.span
        layout
        className="radio-group__indicator"
        style={pos}
      ></motion.span>
    </div>
  )
}

export default PokeButton
