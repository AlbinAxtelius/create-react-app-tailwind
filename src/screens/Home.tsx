import { RouteComponentProps } from "@reach/router";
import React from "react";
import { zip, chain, reduce, map, flatten, concat } from "lodash";

const Home: React.FC<RouteComponentProps> = () => {
  

	return (
		<div className="flex">
			{JSON.stringify(
				chain(concat([1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12])).reduce(
					(a, b) => a + b,
					0
				)
			)}
		</div>
	);
};

export default Home;
