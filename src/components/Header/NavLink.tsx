import React from "react";
import { Link } from "@reach/router";

export interface Props {
  to: string;
}

const NavLink: React.FC<Props> = props => (
  <Link
    getProps={({ isCurrent }) => ({
      className: isCurrent
        ? "p-2 px-4 font-bold uppercase rounded text-teal-600"
        : "p-2 px-4 font-bold text-gray-600 uppercase rounded hover:text-teal-600 active:text-teal-800"
    })}
    {...props}
  />
);

export default NavLink;
