import React, { Component } from 'react';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <footer className="ftco-footer ftco-bg-dark ftco-section">
        <div className="container">
          <div className="row mb-5">

            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Ahla Bik</h2>
                <p>Discover the real depth of Tunisia through a breathtaking adventure. Live a day as lived by a real Tunisian, dicover their culture and their everyday life.</p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                  <li className="ftco-animate fadeInUp ftco-animated"><a href="https://www.twitter.com/"><span className="icon-twitter" /></a></li>
                  <li className="ftco-animate fadeInUp ftco-animated"><a href="https://www.facebook.com/"><span className="icon-facebook" /></a></li>
                  <li className="ftco-animate fadeInUp ftco-animated"><a href="https://www.instagram.com/"><span className="icon-instagram" /></a></li>
                </ul>
              </div>
            </div>

            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-4">
                <h2 className="ftco-heading-2">Information</h2>
                <ul className="list-unstyled">
                  <li><a href="/contact" className="py-2 d-block">About Us</a></li>
                  <li><a href="/contact" className="py-2 d-block">Privacy and Policy</a></li>
                  <li><a href="/contact" className="py-2 d-block">Booking Conditions</a></li>
                  <li><a href="/contact" className="py-2 d-block">Become a host</a></li>
                </ul>
              </div>
            </div>

            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Activities</h2>
                <ul className="list-unstyled">
                  <li><a href="/hosts" className="py-2 d-block">Lunch</a></li>
                  <li><a href="/hosts" className="py-2 d-block">Drink</a></li>
                  <li><a href="/hosts" className="py-2 d-block">Brunch</a></li>
                  <li><a href="/hosts" className="py-2 d-block">Guided tour</a></li>
                  <li><a href="/hosts" className="py-2 d-block">Sport</a></li>
                </ul>
              </div>
            </div>
            
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li><span className="icon icon-map-marker" /><span className="text">App xx, Empire State Building, Sousse - Tunisia</span></li>
                    <li><a href="/contact"><span className="icon icon-phone" /><span className="text">+216 55 666 777</span></a></li>
                    <li><a href="/contact"><span className="icon icon-envelope" /><span className="text">contact@ahlabik.tn</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>Copyright ©2019 All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
        </div> );
    }
}
 
export default Footer;