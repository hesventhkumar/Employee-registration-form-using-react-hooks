import React from 'react';
import ReactDOM from 'react-dom';
import {useState,useReducer} from 'react';

// INITILIZE STATE

const initialState = { count: 0 };


// FUNCTION  REDUCER

function Welcome(state, action) {
  switch (action.category) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset': 
      return { count: 0 };
    default:
      throw new Error();
  }
}

//  USE REDUCER  HOOKS

function CounterOne() {
  const [state, dispatch] = React.useReducer(Welcome, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ category: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ category: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ category: 'reset' })}>Reset</button>
    </div>
  );
}
export default CounterOne;


