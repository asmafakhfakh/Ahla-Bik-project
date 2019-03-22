import React, { Component } from 'react';
import {Link} from 'react-router-dom'


import photoNum1 from "./photos (temporary)/first-photo.jpg"
import photoNum2 from "./photos (temporary)/second-photo.jpg"

import Article from "./experiencesArticleItem"


const listOfArticles=[
{
id:1, 
articlename:'Name of Article',
firstbody:'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.',
photo:{photoNum1},
secondbody:'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.',
authorname:'Name of Author',
authordescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
}, 
{
  id:2, 
  articlename:'Name of Article',
  firstbody:'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.',
  photo:{photoNum2},
  secondbody:'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.',
  authorname:'Name of Author',
  authordescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
}, 
{
    id:3, 
    articlename:'Name of Article',
    firstbody:'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.',
    photo:{photoNum2},
    secondbody:'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.',
    authorname:'Name of Author',
    authordescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
},   
]









class Experiences extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return ( 
          <div>
            <div>
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light scrolled awake" id="ftco-navbar">
          <div className="container">
            <a className="navbar-brand" href="index.html">Adventure</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="oi oi-menu" /> Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item"><a href="index.html" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
                <li className="nav-item"><a href="places.html" className="nav-link">Places</a></li>
                <li className="nav-item"><a href="hotel.html" className="nav-link">Hotels</a></li>
                <li className="nav-item active"><a href="blog.html" className="nav-link">Blog</a></li>
                <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
        {/* END nav */}
        <div className="hero-wrap js-fullheight" style={{backgroundImage: 'url("images/bg_1.jpg")', height: '576px'}}>
          <div className="overlay" />
          <div className="container">
            <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true" style={{height: '576px'}}>
              <div className="col-md-9 text-center ftco-animate fadeInUp ftco-animated" data-scrollax=" properties: { translateY: '70%' }" style={{transform: 'translateZ(0px) translateY(70%)'}}>
                <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }" style={{opacity: 0, transform: 'translateZ(0px) translateY(30%)'}}><span className="mr-2"><a href="index.html">Home</a></span> <span>Blog</span></p>
                <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }" style={{opacity: 0, transform: 'translateZ(0px) translateY(30%)'}}>Tips &amp; Articles</h1>
              </div>
            </div>
          </div>
        </div>   



         <section className="ftco-section ftco-degree-bg">
            <div className="container">
              <div className="row">
                <div className="col-md-8 ftco-animate fadeInUp ftco-animated">
                {/*maping articles*/}
                {
                  listOfArticles.map((el,index)=><Article item={el} key={index}/>)
                }
                
                  <div className="comment-form-wrap pt-5">
                    <h3 className="mb-5">Leave a comment</h3>
                    <form action="#" className="p-5 bg-light">
                      <div className="form-group">
                        <label htmlFor="name">Name *</label>
                        <input type="text" className="form-control" id="name" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input type="email" className="form-control" id="email" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="website">Website</label>
                        <input type="url" className="form-control" id="website" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea name id="message" cols={30} rows={10} className="form-control" defaultValue={""} />
                      </div>
                      <div className="form-group">
                        <input type="submit" defaultValue="Post Comment" className="btn py-3 px-4 btn-primary" />
                      </div>
                    </form>
                  </div>
                </div>
              </div> {/* .col-md-8 */}
              <div className="col-md-4 sidebar ftco-animate fadeInUp ftco-animated">
                <div className="sidebar-box">
                  <form action="#" className="search-form">
                    <div className="form-group">
                      <span className="icon icon-search" />
                      <input type="text" className="form-control" placeholder="Type a keyword and hit enter" />
                    </div>
                  </form>
                </div>
                <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
                  <div className="categories">
                    <h3>Categories</h3>
                    <li><a href="#">Tour <span>(12)</span></a></li>
                    <li><a href="#">Hotel <span>(22)</span></a></li>
                    <li><a href="#">Coffee <span>(37)</span></a></li>
                    <li><a href="#">Drinks <span>(42)</span></a></li>
                    <li><a href="#">Foods <span>(14)</span></a></li>
                    <li><a href="#">Travel <span>(140)</span></a></li>
                  </div>
                </div>
                <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
                  <h3>Recent Blog</h3>
                  <div className="block-21 mb-4 d-flex">
                    <a className="blog-img mr-4" style={{backgroundImage: 'url(images/image_1.jpg)'}} />
                    <div className="text">
                      <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                      <div className="meta">
                        <div><a href="#"><span className="icon-calendar" /> July 12, 2018</a></div>
                        <div><a href="#"><span className="icon-person" /> Admin</a></div>
                        <div><a href="#"><span className="icon-chat" /> 19</a></div>
                      </div>
                    </div>
                  </div>
                  <div className="block-21 mb-4 d-flex">
                    <a className="blog-img mr-4" style={{backgroundImage: 'url(images/image_2.jpg)'}} />
                    <div className="text">
                      <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                      <div className="meta">
                        <div><a href="#"><span className="icon-calendar" /> July 12, 2018</a></div>
                        <div><a href="#"><span className="icon-person" /> Admin</a></div>
                        <div><a href="#"><span className="icon-chat" /> 19</a></div>
                      </div>
                    </div>
                  </div>
                  <div className="block-21 mb-4 d-flex">
                    <a className="blog-img mr-4" style={{backgroundImage: 'url(images/image_3.jpg)'}} />
                    <div className="text">
                      <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                      <div className="meta">
                        <div><a href="#"><span className="icon-calendar" /> July 12, 2018</a></div>
                        <div><a href="#"><span className="icon-person" /> Admin</a></div>
                        <div><a href="#"><span className="icon-chat" /> 19</a></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
                  <h3>Tag Cloud</h3>
                  <div className="tagcloud">
                    <a href="#" className="tag-cloud-link">dish</a>
                    <a href="#" className="tag-cloud-link">menu</a>
                    <a href="#" className="tag-cloud-link">food</a>
                    <a href="#" className="tag-cloud-link">sweet</a>
                    <a href="#" className="tag-cloud-link">tasty</a>
                    <a href="#" className="tag-cloud-link">delicious</a>
                    <a href="#" className="tag-cloud-link">desserts</a>
                    <a href="#" className="tag-cloud-link">drinks</a>
                  </div>
                </div>
                <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
                  <h3>Paragraph</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                </div>
              </div>
            </div>
         
        </section>
         {/* .section */}


        <section className="ftco-section-parallax">
          <div className="parallax-img d-flex align-items-center">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
                  <h2>Subcribe to our Newsletter</h2>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
                  <div className="row d-flex justify-content-center mt-5">
                    <div className="col-md-8">
                      <form action="#" className="subscribe-form">
                        <div className="form-group d-flex">
                          <input type="text" className="form-control" placeholder="Enter email address" />
                          <input type="submit" defaultValue="Subscribe" className="submit px-3" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        <footer className="ftco-footer ftco-bg-dark ftco-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Adventure</h2>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                    <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
                    <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
                    <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4 ml-md-4">
                  <h2 className="ftco-heading-2">Information</h2>
                  <ul className="list-unstyled">
                    <li><a href="#" className="py-2 d-block">About Us</a></li>
                    <li><a href="#" className="py-2 d-block">Online enquiry</a></li>
                    <li><a href="#" className="py-2 d-block">Call Us</a></li>
                    <li><a href="#" className="py-2 d-block">General enquiries</a></li>
                    <li><a href="#" className="py-2 d-block">Booking Conditions</a></li>
                    <li><a href="#" className="py-2 d-block">Privacy and Policy</a></li>
                    <li><a href="#" className="py-2 d-block">Refund policy</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Experience</h2>
                  <ul className="list-unstyled">
                    <li><a href="#" className="py-2 d-block">Beach</a></li>
                    <li><a href="#" className="py-2 d-block">Adventure</a></li>
                    <li><a href="#" className="py-2 d-block">Wildlife</a></li>
                    <li><a href="#" className="py-2 d-block">Honeymoon</a></li>
                    <li><a href="#" className="py-2 d-block">Nature</a></li>
                    <li><a href="#" className="py-2 d-block">Party</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Have a Questions?</h2>
                  <div className="block-23 mb-3">
                    <ul>
                      <li><span className="icon icon-map-marker" /><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                      <li><a href="#"><span className="icon icon-phone" /><span className="text">+2 392 3929 210</span></a></li>
                      <li><a href="#"><span className="icon icon-envelope" /><span className="text">info@yourdomain.com</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright ©2019 All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
              </div>
            </div>
          </div>
        </footer>
        {/* loader */}
        <div id="ftco-loader" className="fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx={24} cy={24} r={22} fill="none" strokeWidth={4} stroke="#eeeeee" /><circle className="path" cx={24} cy={24} r={22} fill="none" strokeWidth={4} strokeMiterlimit={10} stroke="#F96D00" /></svg></div>
      </div>
            
            <h1>Previous Experiences page</h1>
        </div> );
    }
}
 
export default Experiences;