import axios from 'axios'
import {
  POKE_LIST_REQUEST,
  POKE_LIST_SUCCESS,
  POKE_LIST_FAIL,
  POKE_DETAILS_REQUEST,
  POKE_DETAILS_SUCCESS,
  POKE_DETAILS_FAIL,
} from '../constants/pokeConstants'

export const pokeList = () => async (dispatch) => {
  try {
    dispatch({ type: POKE_LIST_REQUEST })
    const { data } = await axios.get(
      'https://pokeapi.co/api/v2/pokemon/?limit=50&offset=151'
    )
    dispatch({ type: POKE_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: POKE_LIST_FAIL,
      payload:
        error.respose && error.respose.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const pokeDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: POKE_DETAILS_REQUEST })

    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    dispatch({ type: POKE_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: POKE_DETAILS_FAIL,
      payload:
        error.respose && error.respose.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
