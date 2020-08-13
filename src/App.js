import React from "react";
import GlobalStyle from "./styles/global";
import { Router } from "react-router-dom";
import Routes from "./routes";

import history from "./services/history";

import DateFnsUtils from '@date-io/date-fns';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';

function App() {
	return (
		<Router history={history}>
			<Routes />
			<GlobalStyle />
		</Router>
	);
}
export default App;
