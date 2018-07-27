import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Rules from './Rules';
import Rankings from './Rankings';
import Results from './Results';
import Smack from './SmackTalk';

const Main = (props) => (
    <div>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/rules' component={Rules} />
            <Route path='/rankings' component={Rankings} />
            <Route path='/results' component={Results} />
            <Route path='/bark' component={Smack} />
        </Switch>
        {/* <div>
            <br />
            {props.name.map(item => (
                <div className="text-center" key={item.publishedAt}>
                    <a target="_blank" href={item.url} className="urlText">{item.title}</a>
                </div>
            ))}
        </div> */}
    </div>
)

export default Main;