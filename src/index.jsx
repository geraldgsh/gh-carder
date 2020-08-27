import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './styles/index.scss';
import rootReducer from './reducers/index';
import App from './App';
import * as serviceWorker from './serviceWorker';

const initialState = {
  users: [
    {
      uid: Math.floor(Math.random() * 1000),
      user: 'Angels and Demons',
    },
    {
      uid: Math.floor(Math.random() * 1000),
      user: 'Angel',
    },
    {
      uid: Math.floor(Math.random() * 1000),
      user: 'Buffy The Vampire Slayer',
    },
  ],
};

const store = createStore(rootReducer);
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
