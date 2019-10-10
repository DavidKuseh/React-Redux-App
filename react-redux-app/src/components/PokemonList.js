import React, { useEffect } from 'react';
import PokemonCard from './PokemonCard';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

export const PokemonList = (props) => {
    useEffect(() => {
        props.getChars();
        })
    return (
        <div className='characters'>
            {
                props.state.pokemon.map(item => <PokemonCard key={item.id} props={item} />)
            }
        </div>
    )
}
export default connect(
    state => state, 
    actionCreators, 
  )(PokemonList);