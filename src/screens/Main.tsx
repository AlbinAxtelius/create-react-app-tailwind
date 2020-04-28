import React from "react";
import { RouteProps } from "react-router-dom";
import Header from "../components/Header";

const Main: React.FC<RouteProps> = ({ children }) => {
	return (
		<div className="flex flex-col min-h-screen font-sans">
			<Header />
			<div className="">{children}</div>
		</div>
	);
};
export default Main;
