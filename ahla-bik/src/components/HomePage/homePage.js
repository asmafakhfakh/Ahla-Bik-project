import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Navbar from './navbar';

import './homepage.css';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
         
           <Navbar/>
              
      <div className="sectionvideo">
        <div className="videocontainer">
          <div className="coloroverlay" />
          <video autoPlay loop muted>
            <source src="videoplayback.mp4" type="video/mp4" />
          </video>
          <div className="overlay" />
        </div>
      </div>
        
        {/* <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true" style={{height: '576px'}}>
            <div className="col-md-9 text-center ftco-animate fadeInUp ftco-animated" data-scrollax=" properties: { translateY: '70%' }" style={{transform: 'translateZ(0px) translateY(0%)'}}>
              <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }" style={{opacity: 1, transform: 'translateZ(0px) translateY(0%)'}}><span className="mr-2"><a href="index.html">Home</a></span> <span>Blog</span></p>
              <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }" style={{opacity: 1, transform: 'translateZ(0px) translateY(0%)'}}>Tips &amp; Articles</h1>
            </div>
          </div>
        </div> */}

        <div className="container intro">
        <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-start" data-scrollax-parent="true" style={{height: '319px'}}>
          <div className="col-md-9 ftco-animate mb-5 pb-5 text-center text-md-left fadeInUp ftco-animated" data-scrollax=" properties: { translateY: '70%' }" style={{transform: 'translateZ(0px) translateY(0%)'}}>
            <h1 className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }" style={{opacity: 1, transform: 'translateZ(0px) translateY(0%)'}}>Discover <br />Tunisians</h1>
            <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }" style={{opacity: 1, transform: 'translateZ(0px) translateY(0%)'}}>Find great places to stay, eat, shop, or visit from local experts</p>
          </div>
        </div>
      </div>





    

      
        </div> );
    }
}
 
export default Home;