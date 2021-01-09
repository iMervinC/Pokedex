export const id = (url) => {
  const splitUrl = url.split('/').splice(-2, 1).toString()
  return splitUrl
}

export const getId = (url) => {
  const splitUrl = url.split('/').splice(-2, 1).toString()
  if (splitUrl.length < 2) {
    return '00' + splitUrl
  } else if (splitUrl.length < 3) {
    return '0' + splitUrl
  } else {
    return splitUrl
  }
}
export const getIdUrl = (url) => {
  const splitUrl = url.split('/').splice(-2, 1).toString()
  return splitUrl
}

export const imgUrl = (url) => {
  const _id = id(url)
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${_id}.png?raw=true`
}

export const img = (_id) => {
  //let imgUrl = `https://cdn.traction.one/pokedex/pokemon/${_id}.png?raw=true`
  let imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${_id}.png`
  return imgUrl
}

export const status = (stat) => {
  switch (stat) {
    case 'hp':
      return 'HP'
    case 'attack':
      return 'ATK'
    case 'defense':
      return 'DEF'
    case 'special-attack':
      return 'SP.ATK'
    case 'special-defense':
      return 'SP.DEF'
    case 'speed':
      return 'SPD'
    default:
      return stat
  }
}

export const statStyle = (stat) => {
  switch (stat) {
    case 'hp':
      return { background: '#00E132', boxShadow: '0px 0px 20px 2px var(--a)' }
    case 'attack':
      return { background: '#F83A3A', boxShadow: '0px 0px 20px 2px var(--b)' }
    case 'defense':
      return { background: '#4F75FF', boxShadow: '0px 0px 20px 2px var(--c)' }
    case 'special-attack':
      return { background: '#FF269B', boxShadow: '0px 0px 20px 2px var(--d)' }
    case 'special-defense':
      return { background: '#4FEAFF', boxShadow: '0px 0px 20px 2px var(--e)' }
    case 'speed':
      return { background: '#FF9C40', boxShadow: '0px 0px 20px 2px var(--f)' }
    default:
      return stat
  }
}
