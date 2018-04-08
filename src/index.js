import React from "react";
import ReactDOM from "react-dom";

import style from "./style.css";
import Jest from "./components/Jest/Jest";
import Test from "./components/Test/Test";
import Mest from "./components/Mest/Mest";

const App = () => {
	return (
		<div>
			<p>React here!</p>
			<Jest />
			<Test />
			<Mest />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("app"));
