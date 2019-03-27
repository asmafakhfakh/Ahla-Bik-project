import React, { Component } from 'react';
import {Route} from 'react-router-dom'

import Home from './homePage'
import Hosts from './hostsPage/hostsPage'
import Experiences from './experiencesPage/experiencesPage'
import ContactPage from './contactPage/contactPage';

class Routes extends Component {
    render() { 
        return ( 
            <div className='routes-container'>
             <Route exact path='/' component={Home}/>
             <Route exact path='/hosts' component={Hosts}/>
             <Route exact path='/experiences' component={Experiences}/>
             <Route exact path='/contact' component={ContactPage}/>
             
            </div>
         );
    }
}
 
export default Routes;