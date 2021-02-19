import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import indexRoutes from "../routers";

const App = () => {

	return (
		<div className="container">
			<div>
				<Switch>
					{
						indexRoutes.map((prop, key) => {
							return <Route path={prop.path} exact={prop.exact} key={key} component={prop.component} />;
						})
					}
				</Switch>
			</div>
		</div>
	)
}

const AppComponent = App;
export default AppComponent;
