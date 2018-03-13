import React from 'react';
import ReactDOM from 'react-dom';
/* import { createStore } from 'redux'; */
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app';
import reducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.getElementById('root'));


/* const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
 */