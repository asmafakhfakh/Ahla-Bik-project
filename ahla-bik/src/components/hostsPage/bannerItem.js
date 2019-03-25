import React, { Component } from 'react';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <div className="hero-wrap js-fullheight" style={{backgroundImage: 'url("https://www.tripsavvy.com/thmb/IRoUh_IFwct0b6vHNiWpSAJys7o=/3072x1728/filters:fill(auto,1)/IMG_2281-56a374413df78cf7727d7124.JPG")', height: '625px'}}>
                <div className="overlay" />
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true" style={{height: '625px'}}>
                        <div className="col-md-9 text-center ftco-animate fadeInUp ftco-animated" data-scrollax=" properties: { translateY: '70%' }" style={{transform: 'translateZ(0px) translateY(4.256%)'}}>
                            <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }" style={{opacity: '0.90272', transform: 'translateZ(0px) translateY(1.824%)'}}><span className="mr-2"><a href="/">Home</a></span> <span>Hosts</span></p>
                            <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }" style={{opacity: '0.90272', transform: 'translateZ(0px) translateY(1.824%)'}}>Find your host</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div> );
    }
}
 
export default Banner;
