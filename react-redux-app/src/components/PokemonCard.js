import React from 'react';

 function PokemonCard({props}) {
  return (
    <div className='component'>
      <h1>name: {props.name}</h1>
    </div>
  );
}

export default PokemonCard;


