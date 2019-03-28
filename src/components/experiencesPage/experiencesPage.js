import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Navbar from '../HomePage/navbar'
import Footer from '../footer'
import Banner from './banner'


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
              <Navbar/>
              <div>
                <Banner/>
        {/* <div className="hero-wrap js-fullheight" style={{backgroundImage: 'url("images/bg_1.jpg")', height: '576px'}}>
          <div className="overlay" />
          <div className="container">
            <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true" style={{height: '576px'}}>
              <div className="col-md-9 text-center ftco-animate fadeInUp ftco-animated" data-scrollax=" properties: { translateY: '70%' }" style={{transform: 'translateZ(0px) translateY(70%)'}}>
                <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }" style={{opacity: 0, transform: 'translateZ(0px) translateY(30%)'}}><span className="mr-2"><a href="/">Home</a></span> <span>Experiences</span></p>
                <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }" style={{opacity: 0, transform: 'translateZ(0px) translateY(30%)'}}>Tips &amp; Articles</h1>
              </div>
            </div>
          </div>
        </div>    */}



         <section className="ftco-section ftco-degree-bg">
            <div className="container">
              <div className="row">
                <div className="col-md-8 ftco-animate fadeInUp ftco-animated">
                    {/*maping articles*/}
                    {
                      listOfArticles.map((el,index)=><Article item={el} key={index}/>)
                    }
                </div>
              </div> 

              {/* .col-md-8 */}
              {/* <div className="col-md-4 sidebar ftco-animate fadeInUp ftco-animated">
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
              </div> */}
            </div>
         
        </section>
         {/* .section */}


        {/* <section className="ftco-section-parallax">
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
        </section> */}



                {/* loader */}
        <div id="ftco-loader" className="fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx={24} cy={24} r={22} fill="none" strokeWidth={4} stroke="#eeeeee" /><circle className="path" cx={24} cy={24} r={22} fill="none" strokeWidth={4} strokeMiterlimit={10} stroke="#F96D00" /></svg></div>
      </div>
      <Footer/>
        </div> );
    }
}
 
export default Experiences;