import { RouteComponentProps } from "@reach/router";
import React from "react";
import Titlebar from "../components/Titlebar";

const Main: React.FC<RouteComponentProps> = ({ children }) => {
  return (
    <div className="min-h-screen font-sans">
      <Titlebar />
      <div className="p-2">{children}</div>
    </div>
  );
};
export default Main;
