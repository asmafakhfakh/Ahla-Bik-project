import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './_helpers';

import AuthenticationApp from './authenticationApp/authentication'


// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

class AuthenticationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

         
           <div>
           <Provider store={store}>
           <AuthenticationApp/>
           </Provider>
           </div>
  



    

      
       
    }
}
 
export default AuthenticationPage;