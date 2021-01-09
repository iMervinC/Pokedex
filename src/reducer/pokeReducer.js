import {
  POKE_LIST_REQUEST,
  POKE_LIST_SUCCESS,
  POKE_LIST_FAIL,
  POKE_DETAILS_REQUEST,
  POKE_DETAILS_SUCCESS,
  POKE_DETAILS_FAIL,
  POKE_ADD_REQUEST,
  POKE_ADD_SUCCESS,
} from '../constants/pokeConstants'

export const pokeListReducer = (state = { pokeList: {} }, action) => {
  switch (action.type) {
    case POKE_LIST_REQUEST:
      return { loading: true, pokeList: {} }
    case POKE_LIST_SUCCESS:
      return { loading: false, pokeList: action.payload }
    case POKE_LIST_FAIL:
      return { loading: false, error: action.payload }

    //Scroll Add
    case POKE_ADD_REQUEST:
      return { ...state, loadingAdd: true }
    case POKE_ADD_SUCCESS:
      return {
        ...state,
        loadingAdd: false,
        pokeList: {
          next: action.payload.next,
          results: [...action.details, ...action.payload.results],
        },
      }

    default:
      return state
  }
}

export const pokeDetailsReducer = (state = { pokeDetails: {} }, action) => {
  switch (action.type) {
    case POKE_DETAILS_REQUEST:
      return { loading: true, pokeDetails: {} }
    case POKE_DETAILS_SUCCESS:
      return { loading: false, pokeDetails: action.payload }
    case POKE_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
