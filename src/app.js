import React from "react";
import ReactDOM from "react-dom";

// import "./re.scss";
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
export default App;
ReactDOM.render(<App />, document.getElementById("app"));
