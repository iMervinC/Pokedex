import { useEffect, useState } from 'react'
import axios from 'axios'

async function getPokemon(url, setDetails, setLoading, setError) {
  try {
    const { data } = await axios.get(url)
    setDetails(data)
    setLoading(false)
    //console.log(data)
  } catch (error) {
    setError(error)
  }
}

const useFetchDetails = (url) => {
  const [details, setDetails] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getPokemon(url, setDetails, setLoading, setError)
    return () => {
      setDetails(null)
      setLoading(true)
      setError(null)
    }
  }, [url])
  return { details, loading, error }
}
export default useFetchDetails
