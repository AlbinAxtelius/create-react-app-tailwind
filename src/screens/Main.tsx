import React, { useEffect, useContext } from "react";
import { RouteComponentProps, useLocation } from "@reach/router";
import Header from "../components/Header";

const Main: React.FC<RouteComponentProps> = ({ children }) => {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <div className="container p-2 mx-auto md:p-1 xl:p-0">{children}</div>
    </div>
  );
};
export default Main;
