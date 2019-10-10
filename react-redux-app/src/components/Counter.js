import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

export function Counter(props) {
  const { count, increment, decrement } = props;
  return (
    <div className='component'>
      The count is {count}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default connect(
  state => state, 
  actionCreators, 
)(Counter);

