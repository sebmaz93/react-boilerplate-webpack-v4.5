import React from 'react';
import { render } from 'react-dom';
import { injectGlobal } from 'styled-components';

import App from './components/App';
import 'sanitize.css';
import './global.css?raw';
import './style.css';

render(<App />, document.getElementById('app'));

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
