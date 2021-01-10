import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { pokeDetails } from '../../actions/pokeListActions'
import arrow from '../../_images/arrow.svg'

const Search = ({ show, setShow }) => {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  const onSubmitHandler = (e) => {
    e.preventDefault()
    let parsed = parseInt(search)
    if (parsed <= 897) {
      dispatch(pokeDetails(parsed))
    }
    setSearch('')
  }

  const onChangeHandler = (e) => {
    setSearch(e.target.value)
  }

  const track = {
    animateHide: { rotate: 0 },
    animateShow: { rotate: 180 },
  }

  return (
    <motion.form
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: '100%' }}
      transition={{ type: 'tween', delay: 0.2 }}
      className="navdex__input"
      onSubmit={(e) => onSubmitHandler(e)}
    >
      <input
        placeholder="Enter Pokemon ID"
        type="text"
        value={search}
        onChange={(e) => onChangeHandler(e)}
      />
      <motion.img
        variants={track}
        animate={show ? 'animateHide' : 'animateShow'}
        className="show-list"
        src={arrow}
        alt="show"
        onClick={() => setShow(!show)}
      />
    </motion.form>
  )
}

export default Search
