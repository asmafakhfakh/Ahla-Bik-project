import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Banner from './bannerItem';
import MainSection from'./mainSectionItem';

class Hosts extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>

            {/* nav start*/}
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <a className="navbar-brand" href="index.html">AHLA BIK</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu" /> Menu
                    </button>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active"><Link to='/'><a  className="nav-link">Home</a></Link></li>
                            <li className="nav-item"><Link to='/hosts'><a className="nav-link">Hosts</a></Link></li>
                            <li className="nav-item"><Link to='/guests'><a className="nav-link">Experiences</a></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* nav end */}


            <Banner/>
            <MainSection/>
            
            





            
        </div> );
    }
}
 
export default Hosts;