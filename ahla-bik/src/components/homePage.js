import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Link to='/'><span>Home </span></Link>
            <Link to='/hosts'><span>Hosts </span></Link>
            <Link to='/experiences'><span>Experiences </span></Link>

            <h1>Home Page ...</h1>
        </div> );
    }
}
 
export default Home;