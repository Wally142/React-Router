import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Roster from './Roster';
import Home from './Home';
import Schedule from './Schedule';

const Main = () => (
    
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/roster' component={Roster} />
        <Route path='/schedule' component={Schedule} />
    </Switch>
)

export default Main;