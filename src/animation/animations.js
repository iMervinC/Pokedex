export const pokeListContainer = {
  initial: {
    y: 0,
  },
  visible: {
    y: 0,
    transition: { type: 'tween', delayChildren: 0.3, staggerChildren: 0.2 },
  },
}

export const pokeListItem = {
  initial: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export const animateContainer = {
  initial: {
    y: -50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'tween', delayChildren: 0.3, staggerChildren: 0.2 },
  },
}

export const animateItems = {
  initial: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
}
