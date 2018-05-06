import React from 'react';
import { hot } from 'react-hot-loader';

import Jest from './Jest/Jest';
import './App.css';

const App = () => {
	return (
		<div>
			<p styleName="text">HMR enabled for JS + CSS !!</p>
			<Jest />
		</div>
	);
};

export default hot(module)(App);
