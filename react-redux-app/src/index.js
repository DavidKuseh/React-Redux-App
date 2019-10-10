import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { combineReducers, createStore } from 'redux';
import * as reducer from './state/reducers';
import { Provider } from 'react-redux';


const mainReducer = combineReducers({
	count: reducer.countReducer
});

export const store = createStore(mainReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);

