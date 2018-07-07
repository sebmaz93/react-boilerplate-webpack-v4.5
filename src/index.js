import 'sanitize.css';
import './global.css?raw';
import './style.css';

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';

import App from './components/App';
import reducers from './reducers';

import axios from 'axios';
window.axios = axios;

// Store Creation
const store = createStore(reducers);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);

injectGlobal`
  body {
  position: relative;
  min-height: 100vh;
  padding: 30px;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-blend-mode: overlay;
  }
`;
