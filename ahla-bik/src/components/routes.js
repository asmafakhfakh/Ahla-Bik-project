import React, { Component } from 'react';
import {Route} from 'react-router-dom'

import Home from './homePage'
import Hosts from './hostsPage'
import Experiences from './experiencesPage'
import Guest from './guest'

class Routes extends Component {
    render() { 
        return ( 
            <div className='routes-container'>
             <Route exact path='/' component={Home}/>
             <Route exact path='/hosts' component={Hosts}/>
             <Route exact path='/experiences' component={Experiences}/>
             <Route exact path='/Guest' component={Guest}/>
             {/* render={props=><Guest _id={props.match.params._id}/>}/> */}
             {/* render={props=><EditContact _id={props.match.params._id}/>}/> */}

            </div>
         );
    }
}
 
export default Routes;