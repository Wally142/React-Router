import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Sport from './Sport';
import Finance from './Finance';
import World from './World';
import Tech from './Tech';

const Main = (props) => (
    <div>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/sports' component={Sport} />
            <Route path='/finance' component={Finance} />
            <Route path='/world' component={World} />
            <Route path='/tech' component={Tech} />
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