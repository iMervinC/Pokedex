import axios from 'axios'
import {
  POKE_LIST_REQUEST,
  POKE_LIST_SUCCESS,
  POKE_LIST_FAIL,
} from '../constants/pokeConstants'

export const pokeList = () => async (dispatch) => {
  try {
    dispatch({ type: POKE_LIST_REQUEST })
    const { data } = await axios.get(
      'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20'
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
