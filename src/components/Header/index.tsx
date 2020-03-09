import React from "react";
import { Link } from "@reach/router";
import { Icon } from "@mdi/react";
import { mdiDeathStarVariant } from "@mdi/js";
import NavLink from "./NavLink";

const Header: React.FC = () => (
  <div className="w-full shadow">
    <div className="sticky top-0 flex items-center justify-between h-16 max-w-screen-xl px-4 mx-auto xl:px-0">
      <Link to="/" className="flex items-center text-teal-600 ">
        <Icon path={mdiDeathStarVariant} className="w-8 h-8 fill-current" />
        <span className="ml-2 font-mono text-2xl text-gray-900">Template</span>
      </Link>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </div>
  </div>
);

export default Header;
