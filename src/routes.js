import React from "react";
import Login from "./pages/Login";
const { Route, Redirect, BrowserRouter, Switch } = require("react-router-dom");
const { isAuthenticated } = require("./services/auth");

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			isAuthenticated() ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{ pathname: "/", state: { from: props.location } }}
				/>
			)
		}
	/>
);

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Login} />
			<PrivateRoute path="/app" component={() => <h1>App</h1>} />
			<Route path="*" component={() => <h1>Page not found</h1>} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
