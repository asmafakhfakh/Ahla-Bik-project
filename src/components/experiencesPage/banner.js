import React, { Component } from 'react';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div>
            <div className="hero-wrap js-fullheight" style={{backgroundImage: 'url("https://i.pinimg.com/originals/c1/2a/19/c12a1921198660567c458fc60a1ee245.jpg")', height: '625px'}}>
                <div className="overlay" />
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true" style={{height: '625px'}}>
                        <div className="col-md-9 text-center ftco-animate fadeInUp ftco-animated" data-scrollax=" properties: { translateY: '70%' }" style={{transform: 'translateZ(0px) translateY(4.256%)'}}>
                            <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }" style={{opacity: '0.90272', transform: 'translateZ(0px) translateY(1.824%)'}}><span className="mr-2"><a href="/">Home</a></span> <span>Experiences</span></p>
                            <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }" style={{opacity: '0.90272', transform: 'translateZ(0px) translateY(1.824%)'}}>Tips &amp; Articles</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div> );
    }
}
 
export default Banner;