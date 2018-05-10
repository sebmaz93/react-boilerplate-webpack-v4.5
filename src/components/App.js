import React from 'react';
import { hot } from 'react-hot-loader';

import Jest from './Jest/Jest';
import Test from './Test/Test';
import './App.css';

const App = () => {
	return (
		<div>
			<p styleName="text">HMR enabled for JS + CSS !!</p>
			<Jest />
			<Test />
		</div>
	);
};

export default hot(module)(App);
