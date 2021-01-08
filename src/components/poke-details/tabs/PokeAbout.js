import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const PokeAbout = ({ details, weight, height, abilities }) => {
  const [flavorText, setFlavorText] = useState('')
  const [genus, setGenus] = useState(null)

  const { flavor_text_entries, genera } = details

  const getGenus = (arr) => {
    const filteredArr = arr.filter(
      (genus) => genus.language.name === 'en' && genus
    )
    setGenus(filteredArr[0].genus)
  }

  const randomFlavorText = (arr) => {
    const filteredArr = arr.filter(
      (text) => 'en' === text.language.name && text
    )
    let rando = Math.floor(Math.random() * filteredArr.length)
    setFlavorText(filteredArr[rando].flavor_text)
  }

  useEffect(() => {
    randomFlavorText(flavor_text_entries)
  }, [flavor_text_entries])

  useEffect(() => {
    getGenus(genera)
  }, [genera])

  const nameI = (n) => n[0].toUpperCase() + n.slice(1)

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="poke-about"
    >
      <p>{flavorText}</p>
      <div className="poke-about__container">
        <p className="poke-about__titles">Species</p>
        <p>{genus}</p>
      </div>
      <div className="poke-about__container">
        <p className="poke-about__titles">Height </p>
        <p>{height * 10} cm</p>
      </div>
      <div className="poke-about__container">
        <p className="poke-about__titles">Weight </p>
        <p>{weight / 10} kg</p>
      </div>
      <div className="poke-about__container">
        <p className="poke-about__titles">Abilities</p>
        {abilities.map((ability) => nameI(ability.ability.name)).join(', ')}
      </div>
    </motion.div>
  )
}

export default PokeAbout
