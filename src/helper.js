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

export const imgUrl = (url) => {
  const _id = id(url)
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${_id}.png?raw=true`
}
export const img = (_id) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${_id}.png?raw=true`
}
