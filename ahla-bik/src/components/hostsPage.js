import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Hosts extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            {/* <Link to='/'><span>Home </span></Link>
            <Link to='/hosts'><span>Hosts </span></Link>
            <Link to='/experiences'><span>Experiences </span></Link>
            <h1>Hosts propositions page</h1> */}

            {/* nav */}
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <a className="navbar-brand" href="index.html">Adventure</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu" /> Menu
                    </button>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <Link to='/'><li className="nav-item"><a href="index.html" className="nav-link">Home</a></li></Link>
                            <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
                            <Link to='/hosts'><li className="nav-item active"><a href="places.html" className="nav-link">Places</a></li></Link>
                            <li className="nav-item"><a href="hotel.html" className="nav-link">Hotels</a></li>
                            <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
                            <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* END nav */}

            {/* -----------hero----------- */}
            <div className="hero-wrap js-fullheight" style={{backgroundImage: 'url("https://www.tripsavvy.com/thmb/IRoUh_IFwct0b6vHNiWpSAJys7o=/3072x1728/filters:fill(auto,1)/IMG_2281-56a374413df78cf7727d7124.JPG'}}>
                <div className="overlay" />
                {/* <div className="container"> */}
                    <div className=" no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true">
                        <div className="col-md-9 text-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                            <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><a href="index.html">Home</a></span> <span>Hosts</span></p>
                            <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Search for a host</h1>
                        </div>
                    </div>
                {/* </div> */}
            </div>
            {/* -----------hero end----------- */}

            <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 sidebar order-md-last ftco-animate">
              <div className="sidebar-wrap ftco-animate">
                <h3 className="heading mb-4">Find City</h3>
                <form action="#">
                  <div className="fields">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Destination, City" />
                    </div>
                    <div className="form-group">
                      <div className="select-wrap one-third">
                        <div className="icon"><span className="ion-ios-arrow-down" /></div>
                        <select name id className="form-control" placeholder="Keyword search">
                          <option value>Select Location</option>
                          <option value>San Francisco USA</option>
                          <option value>Berlin Germany</option>
                          <option value>Lodon United Kingdom</option>
                          <option value>Paris Italy</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <input type="text" id="checkin_date" className="form-control checkin_date" placeholder="Date from" />
                    </div>
                    <div className="form-group">
                      <input type="text" id="checkout_date" className="form-control checkout_date" placeholder="Date to" />
                    </div>
                    <div className="form-group">
                      <div className="range-slider">
                        <span>
                          <input type="number" defaultValue={25000} min={0} max={120000} />	-
                          <input type="number" defaultValue={50000} min={0} max={120000} />
                        </span>
                        <input defaultValue={1000} min={0} max={120000} step={500} type="range" />
                        <input defaultValue={50000} min={0} max={120000} step={500} type="range" />
                      </div>
                    </div>
                    <div className="form-group">
                      <input type="submit" defaultValue="Search" className="btn btn-primary py-3 px-5" />
                    </div>
                  </div>
                </form>
              </div>
              <div className="sidebar-wrap ftco-animate">
                <h3 className="heading mb-4">Star Rating</h3>
                <form method="post" className="star-rating">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      <p className="rate"><span><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /></span></p>
                    </label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      <p className="rate"><span><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star-o" /></span></p>
                    </label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      <p className="rate"><span><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star-o" /><i className="icon-star-o" /></span></p>
                    </label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      <p className="rate"><span><i className="icon-star" /><i className="icon-star" /><i className="icon-star-o" /><i className="icon-star-o" /><i className="icon-star-o" /></span></p>
                    </label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      <p className="rate"><span><i className="icon-star" /><i className="icon-star-o" /><i className="icon-star-o" /><i className="icon-star-o" /><i className="icon-star-o" /></span></p>
                    </label>
                  </div>
                </form>
              </div>
            </div>{/* END*/}
            <div className="col-lg-9">
              <div className="row">
                <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                  <div className="destination">
                    <a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(https://scontent-frx5-1.cdninstagram.com/vp/e06f731d5e2f173bf0c6c7ab0941279e/5CA30574/t51.2885-15/e35/45644899_119541779075846_4497841803438038221_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&se=7&ig_cache_key=MTkzNDkwNDQ2Mzg0OTkxNzcxNQ%3D%3D.2)'}}>
                      <div >
                        <span className="icon-link" />
                      </div>
                    </a>
                    <div className="text p-3">
                      <div className="d-flex">
                        <div className="one">
                          <h3><a href="#">Paris, Italy</a></h3>
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
                          <span className="price">$200</span>
                        </div>
                      </div>
                      <p>Far far away, behind the word mountains, far from the countries</p>
                      <p className="days"><span>2 days 3 nights</span></p>
                      <hr />
                      <p className="bottom-area d-flex">
                        <span><i className="icon-map-o" /> San Franciso, CA</span> 
                        <span className="ml-auto"><a href="#">Discover</a></span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                  <div className="destination">
                    <a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(images/destination-4.jpg)'}}>
                      <div className="icon d-flex justify-content-center align-items-center">
                        <span className="icon-link" />
                      </div>
                    </a>
                    <div className="text p-3">
                      <div className="d-flex">
                        <div className="one">
                          <h3><a href="#">Paris, Italy</a></h3>
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
                          <span className="price">$200</span>
                        </div>
                      </div>
                      <p>Far far away, behind the word mountains, far from the countries</p>
                      <p className="days"><span>2 days 3 nights</span></p>
                      <hr />
                      <p className="bottom-area d-flex">
                        <span><i className="icon-map-o" /> San Franciso, CA</span> 
                        <span className="ml-auto"><a href="#">Discover</a></span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                  <div className="destination">
                    <a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(images/destination-1.jpg)'}}>
                      <div className="icon d-flex justify-content-center align-items-center">
                        <span className="icon-link" />
                      </div>
                    </a>
                    <div className="text p-3">
                      <div className="d-flex">
                        <div className="one">
                          <h3><a href="#">Paris, Italy</a></h3>
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
                          <span className="price">$200</span>
                        </div>
                      </div>
                      <p>Far far away, behind the word mountains, far from the countries</p>
                      <p className="days"><span>2 days 3 nights</span></p>
                      <hr />
                      <p className="bottom-area d-flex">
                        <span><i className="icon-map-o" /> San Franciso, CA</span> 
                        <span className="ml-auto"><a href="#">Discover</a></span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                  <div className="destination">
                    <a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(images/destination-2.jpg)'}}>
                      <div className="icon d-flex justify-content-center align-items-center">
                        <span className="icon-link" />
                      </div>
                    </a>
                    <div className="text p-3">
                      <div className="d-flex">
                        <div className="one">
                          <h3><a href="#">Paris, Italy</a></h3>
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
                          <span className="price">$200</span>
                        </div>
                      </div>
                      <p>Far far away, behind the word mountains, far from the countries</p>
                      <p className="days"><span>2 days 3 nights</span></p>
                      <hr />
                      <p className="bottom-area d-flex">
                        <span><i className="icon-map-o" /> San Franciso, CA</span> 
                        <span className="ml-auto"><a href="#">Discover</a></span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                  <div className="destination">
                    <a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(images/destination-5.jpg)'}}>
                      <div className="icon d-flex justify-content-center align-items-center">
                        <span className="icon-link" />
                      </div>
                    </a>
                    <div className="text p-3">
                      <div className="d-flex">
                        <div className="one">
                          <h3><a href="#">Paris, Italy</a></h3>
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
                          <span className="price">$200</span>
                        </div>
                      </div>
                      <p>Far far away, behind the word mountains, far from the countries</p>
                      <p className="days"><span>2 days 3 nights</span></p>
                      <hr />
                      <p className="bottom-area d-flex">
                        <span><i className="icon-map-o" /> San Franciso, CA</span> 
                        <span className="ml-auto"><a href="#">Discover</a></span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                  <div className="destination">
                    <a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(images/destination-6.jpg)'}}>
                      <div className="icon d-flex justify-content-center align-items-center">
                        <span className="icon-link" />
                      </div>
                    </a>
                    <div className="text p-3">
                      <div className="d-flex">
                        <div className="one">
                          <h3><a href="#">Paris, Italy</a></h3>
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
                          <span className="price">$200</span>
                        </div>
                      </div>
                      <p>Far far away, behind the word mountains, far from the countries</p>
                      <p className="days"><span>2 days 3 nights</span></p>
                      <hr />
                      <p className="bottom-area d-flex">
                        <span><i className="icon-map-o" /> San Franciso, CA</span> 
                        <span className="ml-auto"><a href="#">Discover</a></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col text-center">
                  <div className="block-27">
                    <ul>
                      <li><a href="#">&lt;</a></li>
                      <li className="active"><span>1</span></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#">5</a></li>
                      <li><a href="#">&gt;</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> {/* .col-md-8 */}
          </div>
        </div>
      </section> {/* .section */}



            
        </div> );
    }
}
 
export default Hosts;