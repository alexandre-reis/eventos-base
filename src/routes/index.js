
import React from 'react';

import { Switch } from "react-router-dom";
import Route from './Route';
import Participantes from '../pages/Participantes'
import Login from '../pages/Login'


export default function Routes() {
	return (
		<Switch>
			<Route exact path="/" component={Login} />
			<Route exact path="/app" component={() => <h1>App</h1>} isPrivate/>
			<Route exact path="/app/participantes" component={Participantes} isPrivate/>
			<Route path="/forgot" component={() => <h1>Forgot password</h1>} />
			<Route path="*" component={() => <h1>Page not found</h1>} />
		</Switch>
	);
}
