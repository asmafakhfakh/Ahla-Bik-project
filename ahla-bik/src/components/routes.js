import React, { Component } from 'react';
import {Route} from 'react-router-dom'

import Home from './HomePage/homePage'
import Hosts from './hostsPage/hostsPage'
import Experiences from './experiencesPage/experiencesPage'
import ContactPage from './contactPage/contactPage';
import  AuthenticationPage from './authentication/authenticationPage'
import { AuthenticationApp } from './authentication/authenticationApp/authentication';
//import  AuthenticationApp from './authentication/authenticationApp/authentication'
//import  AuthenticationPage from './authentication/authenticationPage'
import Admin from './administratorPage/administratorMainPage'



class Routes extends Component {
    render() { 
        return ( 
            <div className='routes-container'>
             <Route exact path='/' component={Home}/>
             <Route exact path='/hosts' component={Hosts}/>
             <Route exact path='/experiences' component={Experiences}/>
             <Route exact path='/contact' component={ContactPage}/>
             <Route exact path='/login' component={AuthenticationApp}/>
            {/* <Route exact path='/authentication' component={AuthenticationApp}/> */}
             <Route exact path='/Administrator' component={Admin}/>
             
            </div>
         );
    }
}
 
export default Routes;