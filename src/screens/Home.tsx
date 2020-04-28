import { mdiCreditCardOutline } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState } from "react";
import InputMask from "react-input-mask";
import { RouteProps } from "react-router-dom";

const Home: React.FC<RouteProps> = () => {
	const [creditCardInfo, setCreditCardInfo] = useState<string>("");

	return (
		<div className="flex flex-col">
			<h1>Home</h1>
		</div>
	);
};

export default Home;
