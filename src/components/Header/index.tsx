import { mdiDeathStarVariant } from "@mdi/js";
import { Icon } from "@mdi/react";
import { NavLink, Link } from "react-router-dom";
import React from "react";

const Header: React.FC = () => (
	<header className="z-20 w-full shadow">
		<div className="sticky top-0 flex items-center justify-between h-16 max-w-screen-xl px-4 mx-auto xl:px-0">
			<Link to="/" className="flex items-center text-teal-600 ">
				<Icon path={mdiDeathStarVariant} className="w-8 h-8 fill-current" />
				<span className="ml-2 font-mono text-2xl text-gray-900">Template</span>
			</Link>
			<nav className="space-x-6">
				<NavLink
					className="font-bold text-gray-600 uppercase rounded hover:text-teal-600 active:text-teal-800"
					to="/"
					exact
					activeClassName="font-bold text-teal-400 uppercase rounded"
				>
					Home
				</NavLink>
				<NavLink
					to="/about"
					activeClassName="font-bold text-teal-400 uppercase rounded"
					className="font-bold text-gray-600 uppercase rounded hover:text-teal-600 active:text-teal-800"
					exact
				>
					About
				</NavLink>
			</nav>
		</div>
	</header>
);

export default Header;
