import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home";

function App() {

	return (
		<Switch>
			<Route path="/" exact component={HomePage} />
			<Route
				component={() => <div>Page was not found! Out of information!</div>}
			/>
		</Switch>
	);
}

export default App;
