import React, { Component } from 'react';
import {Route} from 'react-router-dom'

import Home from './HomePage/homePage'
import Hosts from './hostsPage/hostsPage'
import Experiences from './experiencesPage/experiencesPage'


class Routes extends Component {
    render() { 
        return ( 
            <div className='routes-container'>
             <Route exact path='/' component={Home}/>
             <Route exact path='/hosts' component={Hosts}/>
             <Route exact path='/experiences' component={Experiences}/>

             {/* render={props=><Guest _id={props.match.params._id}/>}/> */}

             
            </div>
         );
    }
}
 
export default Routes;