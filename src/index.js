import React from 'react';
import { render } from 'react-dom';

import App from './components/App';
import 'sanitize.css';
import './global.css?raw';
import './style.css';

render(<App />, document.getElementById('app'));
