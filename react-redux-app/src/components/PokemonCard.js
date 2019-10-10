import React from 'react';
import styled from 'styled-components';

const CharacterStyle = styled.div`
  width: 350px;
  background-color: #E1BB80;
  margin: 10px;
  padding: 10px;
  border-radius: 15px;
`

 function PokemonCard({props}) {
  return (
    <CharacterStyle className='component'>
      <img src={props.imageUrl} alt={props.name}/>
      <h3>Name: {props.name}</h3>
      <h4>HP: {props.hp}</h4>
      <h4>Rarity: {props.rarity}</h4>
      <h4>Pokedex Number: {props.nationalPokedexNumber}</h4>
    </CharacterStyle>
  );
}

export default PokemonCard;


