import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios'
import Modal from "react-responsive-modal";
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux'

import "./hosts.css"


class HostCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            day:"",
            number: 0,
            email:"",
            open: false,
        }
    }

    onOpenModal = () => {
        this.setState({ open: true });
      };
    
    onCloseModal = () => {
        this.setState({ open: false });
      };
    handleModalChange=(event)=>{
        this.setState({[event.target.name]:event.target.value});
    }
    handleClick=()=>{
        axios.post('/send-request',{...this.state})
       .then(()=>this.props.sendRequestReducer({...this.state}))
       .catch((err)=>alert(err))
       this.setState({ open: false })    
    }
    

    render() {
        const { open } = this.state;
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
                                <StarRatingComponent name="rate1" starCount={item.rating} />
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
                    <Button className="ml-auto" variant="success" onClick={this.onOpenModal}>Book</Button>

                        <Modal open={open} onClose={this.onCloseModal} center>
                            <h2>Booking for {item.title}</h2>
                            <h5>Host: {item.host}</h5>
                            <p>{item.description}</p>
                            <div className="modalForm">
                                <h5>Day of visit</h5>
                                <input type='text' name="day" placeholder="Day" onChange={this.handleModalChange}/>
                                <h5>Number of visitors</h5>
                                <input type='number' name="number" placeholder="Number" onChange={this.handleModalChange}/>
                                <h5>Your email</h5>
                                <input type='email' name="email" placeholder="Your email" onChange={this.handleModalChange}/>
                                <br/>
                                <br/>
                                <Button variant="outline-success" className="ml-auto" onClick={this.handleClick}>Send request</Button>
                            </div>
                        </Modal>

                    </p>
                </div>
            </div>
        </div> );
    }
}

const mapDispatchToProps=(dispatch)=>
{
    return {
        sendRequestReducer:(newrequest)=>
        {
            dispatch({
                type:'SEND_REQUEST',
                newrequest
            })
        }
    }
}

export default connect(null,mapDispatchToProps)(HostCard);