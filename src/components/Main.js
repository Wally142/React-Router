import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Team from './Team';
import Home from './Home';
import About from './About';

const Main = () => (
    
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/roster' component={Team} />
        <Route path='/schedule' component={About} />
    </Switch>
)

export default Main;