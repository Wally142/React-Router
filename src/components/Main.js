import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Team from './Team';
import Home from './Home';
import About from './About';

const Main = (props) => (
    <div>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/team' component={Team} />
            <Route path='/headlines' component={About} />
        </Switch>
        <div>
            <br />
            {props.name.map(item => (
                <div className="text-center" key={item.publishedAt}>
                    <a target="_blank" href={item.url} className="urlText">{item.title}</a>
                </div>
            ))}
        </div>
    </div>
)

export default Main;