import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Store from './store/store';

interface State {
  store: Store;
}

const store = new Store();

export const Context = createContext<State>({ store })

ReactDOM.render(
  <Context.Provider value={{ store }}>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </Context.Provider>,
  document.getElementById('root')
);

reportWebVitals();
