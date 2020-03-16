import { RouteComponentProps } from "@reach/router";
import React from "react";

const Home: React.FC<RouteComponentProps> = () => {
  return (
    <div className="font-mono text-sm">
      <h1>Hello world</h1>
    </div>
  );
};

export default Home;
