import React from 'react'

const PokeButton = ({ setState }) => {
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
    </div>
  )
}

export default PokeButton
