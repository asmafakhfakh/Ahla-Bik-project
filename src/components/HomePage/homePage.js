import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import Navbar from './navbar';
import Footer from '../footer'

import './homepage.css';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
         
           <Navbar/>
              
      <div className="sectionvideo">
        <div className="videocontainer">
          <div className="coloroverlay" />
          <video autoPlay loop muted>
            <source src="videoplayback.mp4" type="video/mp4" />
          </video>
          <div className="overlay" />
        </div>
      </div>
        
        {/* <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true" style={{height: '576px'}}>
            <div className="col-md-9 text-center ftco-animate fadeInUp ftco-animated" data-scrollax=" properties: { translateY: '70%' }" style={{transform: 'translateZ(0px) translateY(0%)'}}>
              <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }" style={{opacity: 1, transform: 'translateZ(0px) translateY(0%)'}}><span className="mr-2"><a href="index.html">Home</a></span> <span>Blog</span></p>
              <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }" style={{opacity: 1, transform: 'translateZ(0px) translateY(0%)'}}>Tips &amp; Articles</h1>
            </div>
          </div>
        </div> */}

        <div className="container intro">
        <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-start" data-scrollax-parent="true" style={{height: '319px'}}>
          <div className="col-md-9 ftco-animate mb-5 pb-5 text-center text-md-left fadeInUp ftco-animated" data-scrollax=" properties: { translateY: '70%' }" style={{transform: 'translateZ(0px) translateY(0%)'}}>
            <h1 className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }" style={{opacity: 1, transform: 'translateZ(0px) translateY(0%)'}}>Discover <br />Tunisians</h1>
            <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }" style={{opacity: 1, transform: 'translateZ(0px) translateY(0%)'}}>Find great places to stay, eat, shop, or visit from local experts</p>
          </div>
        </div>
      </div>
      <section class="ftco-section bg-light">
    	<div class="container">
    		<div class="row">
    			<div class="col-md-4">
    				<div class="intro ftco-animate fadeInUp ftco-animated">
    					<h3><span>01</span> Choose destination</h3>
    					<p>Every one of the 24 tunisian governorate has its own charm. Choose the one that you want to discover, and let it submurge you with its authentiw magic</p>
    				</div>
    			</div>
    			<div class="col-md-4">
    				<div class="intro ftco-animate fadeInUp ftco-animated">
    					<h3><span>02</span> Choose an activity</h3>
    					<p>A wide variety of experiences are waiting for you to embrace, hosted and guided by locals, who are willing to show you the real Tunisia culture</p>
    				</div>
    			</div>
    			<div class="col-md-4">
    				<div class="intro ftco-animate fadeInUp ftco-animated">
    					<h3><span>03</span> Live the experience</h3>
    					<p>Enjoy your activity as well as the company, eat home made local food, see unrevealed places, discover non touristic destinations, and enjoy living as a Tunisian for the time of a day.</p>
    				</div>
    			</div>
    		</div>
    	</div>
    </section>

    <section class="ftco-section">
    	<div class="container">
    		<div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
            <h2 class="mb-4">Discover our featured activities</h2>
          </div>
        </div>
        <div class="row">
        	<div class="col-md-3 ftco-animate fadeInUp ftco-animated">
        		<a href="#" class="destination-entry img" style={{backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxahizJhrs403-zJHYcSvGxONIYrcf0Ut2nc5wCEga2i4Xv6-)"}}>
        			<div class="text text-center">
        				<h3>Food</h3>
        			</div>
        		</a>
        	</div>
        	<div class="col-md-3 ftco-animate fadeInUp ftco-animated">
        		<a href="#" class="destination-entry img" style={{backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/T%C3%BCrk_Kahvesi_-_Bakir_Cezve.jpg/1200px-T%C3%BCrk_Kahvesi_-_Bakir_Cezve.jpg)"}}>
        			<div class="text text-center">
        				<h3>Drink</h3>
        			</div>
        		</a>
        	</div>
        	<div class="col-md-3 ftco-animate fadeInUp ftco-animated">
        		<a href="#" class="destination-entry img" style={{backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsGu4EmXy_FxKSDUXn-QksaBzqJRm6_tfWoKuRBVipZXjju4TWgg)"}}>
        			<div class="text text-center">
        				<h3>Tours</h3>
        			</div>
        		</a>
        	</div>
          <div class="col-md-3 ftco-animate fadeInUp ftco-animated">
        		<a href="#" class="destination-entry img" style={{backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOmlAFC5ez9WDTPL1D3JwJqhPaI2jPww5OlVRPUDwBdyUYhLhg)"}}>
        			<div class="text text-center">
        				<h3>Sport</h3>
        			</div>
        		</a>
        	</div>
        </div>
    	</div>
    </section>

    <section className="ftco-section">

    	<div className="container">
				<div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
            <h2 className="mb-4">Most Popular Destination</h2>
          </div>
        </div>    		
    	</div>

      <div className="container">
    	<div className="container-fluid">
    		<div className="row">
    			  {/* card 1 */}
          <div className="col-sm col-md-6 col-lg ftco-animate fadeInUp ftco-animated">
    				<div className="destination">
    					<a href="/hosts" className="img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: `url(https://static.boredpanda.com/blog/wp-content/uploads/2017/01/two-faced-cat-yana-28.jpg)`}} >
    						<div className="icon d-flex justify-content-center align-items-center">
    							<span className="icon-link"></span>
    						</div>
    					</a>
    					<div className="text p-3">
    						<div className="d-flex">
    							<div className="one">
		    						<h3><a href="/hosts">Arabic coffee</a></h3>
		    						<p className="rate">
		    							<i className="icon-star"/>
		    							<i className="icon-star"/>
		    							<i className="icon-star"/>
		    							<i className="icon-star"/>
		    							<i className="icon-star-o"/>
		    						</p>
	    						</div>
	    						<div className="two">
	    							<span className="price">3dt/pers</span>
    							</div>
    						</div>
    						<p>Join the family on a cup of arabic coffee with home-made traditional sweets. We will be chatting about life and cats</p>
    						<p className="days"><span>Asma Fakhfakh</span></p>
    						<hr/>
    						<p className="bottom-area d-flex">
    							<span><i className="icon-map-o"/> Sousse</span> 
    							<span className="ml-auto"><a href="/hosts">Discover</a></span>
    						</p>
    					</div>
    				</div>
    			</div>
          {/* card 2 */}
    			<div className="col-sm col-md-6 col-lg ftco-animate fadeInUp ftco-animated">
    				<div className="destination d-md-flex flex-column-reverse">
    					<a href="/hosts" className="img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: `url(https://steemitimages.com/DQmRpnB8guFd4VkcZgLhtFMbjxqDQeqxzb5r4cYREin64CH/18645915_148001462408917_5174778861115670528_n.jpg)`}}>
    						<div className="icon d-flex justify-content-center align-items-center">
    							<span className="icon-link"></span>
    						</div>
    					</a>
    					<div className="text p-3">
    						<div className="d-flex">
    							<div className="one">
		    						<h3><a href="/hosts">Lablebi</a></h3>
		    						<p className="rate">
		    							<i className="icon-star"/>
		    							<i className="icon-star"/>
		    							<i className="icon-star"/>
		    							<i className="icon-star"/>
		    							<i className="icon-star-o"/>
		    						</p>
	    						</div>
	    						<div className="two">
	    							<span className="price">5dt/pers</span>
    							</div>
    						</div>
    						<p>Lablebi is a famous tunisian food made with chickpeas. Warning: be ready to spice it up</p>
    						<p className="days"><span>Houssem Trabelsi</span></p>
    						<hr/>
    						<p className="bottom-area d-flex">
    							<span><i className="icon-map-o"/> Sousse</span> 
    							<span className="ml-auto"><a href="/hosts">Discover</a></span>
    						</p>
    					</div>
    				</div>
    			</div>
          </div>
          <div className="row">
          {/* card 3 */}
          <div className="col-sm col-md-6 col-lg ftco-animate fadeInUp ftco-animated">
    				<div className="destination">
    					<a href="/hosts" className="img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: `url(https://www.intrepides-jura.com/1409-large_default/initiation-speleo-aquatique.jpg)`}} >
    						<div className="icon d-flex justify-content-center align-items-center">
    							<span className="icon-link"></span>
    						</div>
    					</a>
    					<div className="text p-3">
    						<div className="d-flex">
    							<div className="one">
		    						<h3><a href="/hosts">Spéléologie</a></h3>
		    						<p className="rate">
		    							<i className="icon-star"/>
		    							<i className="icon-star"/>
		    							<i className="icon-star"/>
		    							<i className="icon-star"/>
		    							<i className="icon-star-o"/>
		    						</p>
	    						</div>
	    						<div className="two">
	    							<span className="price">10dt/pers</span>
    							</div>
    						</div>
    						<p>Come and discover the amazing cave of Ain Dhab. Necessary equipment is provided</p>
    						<p className="days"><span>Rabii Ben Brahim</span></p>
    						<hr/>
    						<p className="bottom-area d-flex">
    							<span><i className="icon-map-o"/>Siliana</span> 
    							<span className="ml-auto"><a href="#">Discover</a></span>
    						</p>
    					</div>
    				</div>
    			</div>
          {/* card 4 */}
    			<div className="col-sm col-md-6 col-lg ftco-animate fadeInUp ftco-animated">
    				<div className="destination d-md-flex flex-column-reverse">
    					<a href="/hosts" className="img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: `url(http://tgv.com.tn/tgv/wp-content/uploads/2016/10/guided_tour_tunis_20161-TGV-Medina.jpg)`}}>
    						<div className="icon d-flex justify-content-center align-items-center">
    							<span className="icon-link"></span>
    						</div>
    					</a>
    					<div className="text p-3">
    						<div className="d-flex">
    							<div className="one">
		    						<h3><a href="/hosts">Medina de Tunis</a></h3>
		    						<p className="rate">
		    							<i className="icon-star"/>
		    							<i className="icon-star"/>
		    							<i className="icon-star"/>
		    							<i className="icon-star"/>
		    							<i className="icon-star-o"/>
		    						</p>
	    						</div>
	    						<div className="two">
	    							<span className="price">2dt/pers</span>
    							</div>
    						</div>
    						<p>Discover the unknown magic of the Medina of Tunis, and get lost in its beauty</p>
    						<p className="days"><span>Asma Fakhfakh</span></p>
    						<hr/>
    						<p className="bottom-area d-flex">
    							<span><i className="icon-map-o"/>Tunis</span> 
    							<span className="ml-auto"><a href="/hosts">Discover</a></span>
    						</p>
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
 
export default Home;