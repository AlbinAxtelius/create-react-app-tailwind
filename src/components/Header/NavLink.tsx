import { Link } from "@reach/router";
import React from "react";

export interface Props {
	to: string;
}

const NavLink: React.FC<Props> = (props) => (
	<Link
		getProps={({ isCurrent }) => ({
			className: isCurrent
				? "font-bold uppercase rounded text-teal-600"
				: "font-bold text-gray-600 uppercase rounded hover:text-teal-600 active:text-teal-800",
		})}
		{...props}
	/>
);

export default NavLink;
