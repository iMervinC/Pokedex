import { useEffect, useState, useDebugValue } from 'react'
import { getIdUrl } from '../helper'
import axios from 'axios'

async function getEvo(url, setDetails, setLoading, setError) {
  try {
    const { data } = await axios.get(url)

    var evoChain = []
    var evoData = data.chain

    do {
      var evoDetails = evoData['evolution_details'][0]

      evoChain.push({
        species_name: evoData.species.name,
        species_id: getIdUrl(evoData.species.url),
        min_level: !evoDetails ? 1 : evoDetails.min_level,
        trigger_name: !evoDetails ? null : evoDetails.trigger.name,
        item: !evoDetails ? null : evoDetails.item,
      })

      evoData = evoData['evolves_to'][0]
    } while (!!evoData && evoData.hasOwnProperty('evolves_to'))

    setDetails(evoChain)
    setLoading(false)
    //console.log(evoChain)
  } catch (error) {
    setError(error)
  }
}

const useGetEvo = (url) => {
  const [details, setDetails] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getEvo(url, setDetails, setLoading, setError)
    return () => {
      setDetails(null)
      setLoading(true)
      setError(null)
    }
  }, [url])

  useDebugValue('getEvo' ?? 'Loading...')

  return { details, loading, error }
}
export default useGetEvo
