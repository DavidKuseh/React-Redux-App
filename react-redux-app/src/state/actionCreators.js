import * as types from './actionTypes';
import axios from 'axios';

const url = "https://api.pokemontcg.io/v1/cards";

export function getPokemon(pokemon) {
    return { type: types.FETCH_POKEMON, payload: pokemon}
}

export const getChars = () => dispatch => {
    axios.get(url)
    .then(res => {
        dispatch({ type: types.FETCH_POKEMON, payload: res.data.cards})
    })
}