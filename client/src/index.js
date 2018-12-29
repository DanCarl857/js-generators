import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './container/App/App';
import * as serviceWorker from './serviceWorker';

// Configure Redux
import { Provider } from 'react-redux';
import Store from './Store';

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
