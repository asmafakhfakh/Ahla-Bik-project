import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            {/* nav start*/}
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <a className="navbar-brand" href="/">AHLA BIK</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu" /> Menu
                    </button>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active"><Link to='/'><a  className="nav-link">Home</a></Link></li>
                            <li className="nav-item"><Link to='/hosts'><a className="nav-link">Hosts</a></Link></li>
                            <li className="nav-item"><Link to='/experiences'><a className="nav-link">Experiences</a></Link></li>
                            <li className="nav-item"><Link to='/contact'><a className="nav-link">Contact</a></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* nav end */}
        </div> );
    }
}
 
export default Navbar;