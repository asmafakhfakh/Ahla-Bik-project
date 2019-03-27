import React, { Component } from 'react';
import axios from 'axios'
import {connect} from 'react-redux'

import Navbar from '../navbar';
import Footer from '../footer';

class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = { email:"" }
    }

    handleChange=(event)=>{
      this.setState({ email:event.target.value })
    }
    handleClick=()=>{
      axios.post('/contact',this.state.email)
       .then(()=>this.props.addemailReducer(this.state.email))
       .catch((err)=>alert(err))
    }

    render() { 
        return ( <div>
            <Navbar/>
            <div className="hero-wrap js-fullheight" style={{backgroundImage: 'url("http://tgv.com.tn/tgv/wp-content/uploads/2016/10/guided_tour_tunis_20161-TGV-Medina.jpg")', height: '625px'}}>
                <div className="overlay" />
                <div className="container">
                <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true" style={{height: '625px'}}>
                    <div className="col-md-9 text-center ftco-animate fadeInUp ftco-animated" data-scrollax=" properties: { translateY: '70%' }" style={{transform: 'translateZ(0px) translateY(4.256%)'}}>
                    <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }" style={{opacity: '0.90272', transform: 'translateZ(0px) translateY(1.824%)'}}><span className="mr-2"><a href="index.html">Home</a></span> <span>Contact</span></p>
                    <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }" style={{opacity: '0.90272', transform: 'translateZ(0px) translateY(1.824%)'}}>Contact</h1>
                    </div>
                </div>
                </div>
            </div>



      <section className="ftco-section contact-section ftco-degree-bg">
        <div className="container">
          <div className="row d-flex mb-5 contact-info">
            <div className="col-md-12 mb-4">
              <h2 className="h4">Contact Information</h2>
            </div>
            <div className="w-100" />
            <div className="col-md-3">
              <p><span>Address:</span>App xx, Empire State Building, Sousse - Tunisia</p>
            </div>
            <div className="col-md-3">
              <p><span>Phone:</span> <a href="tel://1234567920">+216 55 666 777</a></p>
            </div>
            <div className="col-md-3">
              <p><span>Email:</span> <a href="mailto:info@yoursite.com">contact@ahlabik.tn</a></p>
            </div>
            <div className="col-md-3">
              <p><span>Website</span> <a href="/">ahlabik.tn</a></p>
            </div>
          </div>

          <div className='row'>
            <div className="col-md-2"></div>
            <div className="col-md-6">
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.6420387816306!2d10.606086114610672!3d35.85778002787788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8b9d84cd62d3%3A0x191d2eb9076c13fe!2sgomycode+sousse!5e0!3m2!1sen!2stn!4v1553506286462" width={700} height={400} frameBorder={0} style={{border: 0}} allowFullScreen />
            </div>
        </div>

          <div className="row block-9">
            <div className="col-md-12 mb-4">
              <h2 className="h4">Send us a message</h2>
            </div>
            <div className='col-md-3'></div>
            <div className="col-md-6 order-md-last pr-md-5">
              <form action="#">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <textarea name id cols={30} rows={7} className="form-control" placeholder="Message" defaultValue={""} />
                </div>
                <div className="form-group">
                  <input type="submit" defaultValue="Send Message" className="btn btn-primary py-3 px-5" />
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>

          {/* ------------Newsletters------------- */}
      <section className="ftco-section-parallax">
        <div className="parallax-img d-flex align-items-center">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-md-7 text-center heading-section heading-section-white ftco-animate fadeInUp ftco-animated">
                <h2>Subcribe to our Newsletter</h2>
                <p>To get our newest features and hottest adventures, subscribe to our Newsletter</p>
                <div className="row d-flex justify-content-center mt-5">
                  <div className="col-md-8">
                    <form action="#" className="subscribe-form">
                      <div className="form-group d-flex">
                        <input type="text" className="form-control" placeholder="Enter email address" onChange={this.handleChange}/>
                        <input type="submit" defaultValue="Subscribe" className="submit px-3" onClick={this.handleClick}/>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            <Footer/>
        </div> );
    }
}
const mapDispatchToProps=(dispatch)=>
{
    return {
        addemailReducer:newemail=>
        {
            dispatch({
                type:'ADD_EMAIL',
                newemail
            })
        }
    }
}
export default connect(null,mapDispatchToProps)(ContactPage);
