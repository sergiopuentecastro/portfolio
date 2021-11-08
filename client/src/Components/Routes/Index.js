import React from 'react'
import { Switch, Route } from 'react-router-dom';
import BoilerRoom from '../Pages/BoilerRoom/BoilerRoom';
import Home from '../Pages/Home/Home';

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/home' render={() => <Home />} />
            <Route exact path='/BoilerRoom' render={() => <BoilerRoom />} />
        </Switch>
    )
}
