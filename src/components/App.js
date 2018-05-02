import React from 'react';
import { hot } from 'react-hot-loader';

import Jest from './Jest/Jest';
import Test from './Test/Test';
import Mest from './Mest/Mest';
import './App.css';

const App = () => {
	return (
		<div>
			<p styleName="text">HMR enabled !!</p>
			<Jest />
			<Test />
			<Mest />
		</div>
	);
};

export default hot(module)(App);
