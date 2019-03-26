import React, { Component } from 'react';
class HostCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const {item}=this.props
        return ( <div>
            <div className="destination">
                <a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: `url(${item.imgsrc})`}}>
                    <div className="icon d-flex justify-content-center align-items-center">
                        <span className="icon-link" />
                    </div>
                </a>
                <div className="text p-3">
                    <div className="d-flex">
                        <div className="one">
                            <h3><a href="#">{item.title}</a></h3>
                            <p className="rate">
                            <i className="icon-star" />
                            <i className="icon-star" />
                            <i className="icon-star" />
                            <i className="icon-star" />
                            <i className="icon-star-o" />
                            <span>8 Rating</span>
                            </p>
                        </div>
                        <div className="two">
                            <span className="price">{item.price}dt/pers</span>
                        </div>
                    </div>
                    <p>{item.description}</p>
                    <p className="days"><span>{item.host}</span></p>
                    <hr />
                    <p className="bottom-area d-flex">
                    <span><i className="icon-map-o" />{item.destination}</span> 
                    <span className="ml-auto"><a href="#">Book</a></span>
                    </p>
                </div>
            </div>
        </div> );
    }
}
 
export default HostCard;