import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Experiences extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Link to='/'><span>Home </span></Link>
            <Link to='/hosts'><span>Hosts </span></Link>
            <Link to='/experiences'><span>Experiences </span></Link>
            <Link to='/Guest'><span>Guest Page</span></Link>
            
            <h1>Previous Experiences page</h1>
        </div> );
    }
}
 
export default Experiences;