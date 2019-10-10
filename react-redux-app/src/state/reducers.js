import * as types from './actionTypes';

const initialList = {
  pokemon: [],
};
export function pokemonReducer(state = initialList, action) {
  switch (action.type) {
    case types.FETCH_POKEMON:
      return {
        ...state,
        pokemon: action.payload
      };
    default:
      return state;
  }
}