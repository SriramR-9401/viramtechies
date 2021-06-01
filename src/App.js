import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Service from "./Components/Service";
import Navbar from "./Components/Navbar";
import Cctv from "./views/cctv";
import Solar from "./views/solar";
import Training from "./views/training";
import Electrical from "./views/electrical";

function App() {
	return (
		<React.Fragment>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route exact path="/service">
						<Service />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route exact path="/service/solar">
						<Solar />
					</Route>
					<Route exact path="/service/cctv">
						<Cctv />
					</Route>
					<Route exact path="/service/electrical">
						<Electrical />
					</Route>
					<Route exact path="/service/training">
						<Training />
					</Route>
				</Switch>
			</Router>
		</React.Fragment>
	);
}

export default App;
