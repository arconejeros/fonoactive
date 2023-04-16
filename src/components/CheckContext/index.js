import React from 'react';
import {withApp} from "@/contexts/appContext";

const CheckContext = ({app: { checkContext}}) => {
	return (
	  <div><button onClick={() => checkContext()}>checkContext</button></div>
	);
};

export default withApp(CheckContext);