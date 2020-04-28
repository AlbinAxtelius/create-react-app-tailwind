import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import About from "./screens/About";
import Home from "./screens/Home";
import Main from "./screens/Main";

const App: React.FC = () => {
	return (
		<Router>
			<Main>
				<Switch>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Main>
		</Router>
	);
};

export default App;
