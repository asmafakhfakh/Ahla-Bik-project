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
          <Banner/>
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
            </div>
        </section>
        <Footer/>
        </div> );
    }
}
 
export default Experiences;