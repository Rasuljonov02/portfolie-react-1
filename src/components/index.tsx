import { Routes as Switch, Route, Navigate } from "react-router-dom";
import Home from "./pajes/Home";
import Front from "./pajes/Front";
import Contact from "./pajes/Contact";
import Portfolio from "./pajes/Portfolio";

import "./main.css";

const Main = () => {
	return (
		<div>
			<Switch>
				<Route  index path="/home" element={<Home />} />

				<Route path="/front" element={<Front />} />
				<Route path="/portfolio" element={<Portfolio />} />

				<Route path="/contact" element={<Contact />} />

				<Route path="/*" element={<Navigate to="/home" />} />
			</Switch>
		</div>
	);
};

export default Main;
