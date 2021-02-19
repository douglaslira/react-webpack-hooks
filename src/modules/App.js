import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import indexRoutes from "../routers";

const App = () => {

	return (
		<div className="container">
			<Switch>
				{
					indexRoutes.map((prop, key) => {
						return <Route path={prop.path} exact={prop.exact} key={key} component={prop.component} />;
					})
				}
			</Switch>
			<footer className="footer fixed-bottom p-2">
				<p className="text-center">Digital FrontEnd - ALTRAN &#10084; by Douglas Lira - 2021</p>
			</footer>
		</div>
	)
}

const AppComponent = App;
export default AppComponent;
