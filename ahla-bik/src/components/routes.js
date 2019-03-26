import React, { Component } from 'react';
import {Route} from 'react-router-dom'

import Home from './HomePage/homePage'
import Hosts from './hostsPage/hostsPage'
import Experiences from './experiencesPage/experiencesPage'
import  AuthenticationApp from './authentication/authenticationApp/authentication'
import  AuthenticationPage from './authentication/authenticationPage'



class Routes extends Component {
    render() { 
        return ( 
            <div className='routes-container'>
             <Route exact path='/' component={Home}/>
             <Route exact path='/hosts' component={Hosts}/>
             <Route exact path='/experiences' component={Experiences}/>
             <Route exact path='/authentication' component={AuthenticationPage}/>
                

             {/* render={props=><Guest _id={props.match.params._id}/>}/> */}

             
            </div>
         );
    }
}
 
export default Routes;