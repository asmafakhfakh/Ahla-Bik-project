import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            {/* <Link to='/'><span>Home </span></Link>
            <Link to='/hosts'><span>Hosts </span></Link>
            <Link to='/experiences'><span>Experiences </span></Link>
            <Link to='/Guest'><span>Guest Page</span></Link>
            <Link to='/host'><span>Host Profile</span></Link> */}
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


      <div className="hero-wrap js-fullheight" style={{ height: '576px'}}>
      <div className="section">

        <div className="video-container">
          <div className="color-overlay" />
          <video autoPlay loop muted>
            <source src="videoplayback.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
        <div className="overlay" />
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true" style={{height: '576px'}}>
            <div className="col-md-9 text-center ftco-animate fadeInUp ftco-animated" data-scrollax=" properties: { translateY: '70%' }" style={{transform: 'translateZ(0px) translateY(0%)'}}>
              <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }" style={{opacity: 1, transform: 'translateZ(0px) translateY(0%)'}}><span className="mr-2"><a href="index.html">Home</a></span> <span>Blog</span></p>
              <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }" style={{opacity: 1, transform: 'translateZ(0px) translateY(0%)'}}>Tips &amp; Articles</h1>
            </div>
          </div>
        </div>
      </div> 

      
        </div> );
    }
}
 
export default Home;