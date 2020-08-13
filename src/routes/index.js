
import React from 'react';

import { Switch } from "react-router-dom";
import Route from './Route';
import Participantes from '../pages/Participantes'
import ParticipantesList from '../pages/Participantes/List'
import Login from '../pages/Login'


export default function Routes() {
    return (
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/app" component={() => <h1>App</h1>} isPrivate />
            <Route exact path="/participantes/cadastro" component={Participantes} isPrivate />
            <Route exact path="/participantes" component={ParticipantesList} isPrivate />
            <Route exact path="/eventos" component={() => <h1>eventos</h1>} isPrivate />
            <Route path="/forgot" component={() => <h1>Forgot password</h1>} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    );
}
