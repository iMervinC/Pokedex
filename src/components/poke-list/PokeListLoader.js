import React from 'react'
import { motion } from 'framer-motion'
import GreatBall from '../../_images/GreatBall.svg'
import Masterball from '../../_images/Masterball.svg'
import PokeballS from '../../_images/PokeballS.svg'

const loader = {
  initial: {
    y: 70,
  },
  animate: {
    y: 0,
    transition: { type: 'tween', delayChildren: 0.3, staggerChildren: 0.2 },
  },
  exit: {
    y: 70,
  },
}

const loaderBalls = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: [0, 5, -5, 0],
    transition: {
      y: {
        repeat: Infinity,
        duration: 1,
      },
    },
  },
}

const PokeListLoader = () => {
  return (
    <motion.div
      variants={loader}
      animate="animate"
      initial="initial"
      exit="exit"
      className="poke-list__loader"
    >
      <motion.img variants={loaderBalls} src={PokeballS} alt="PokeballS" />
      <motion.img variants={loaderBalls} src={GreatBall} alt="GreatBall" />
      <motion.img variants={loaderBalls} src={Masterball} alt="Masterball" />
    </motion.div>
  )
}

export default PokeListLoader
