import React, { Component } from 'react';
import Footer from '../footer.js'
//import {Link} from 'react-router-dom';
import Banner from './bannerItem';
import MainSection from'./mainSectionItem';
import Navbar from '../HomePage/navbar'

class Hosts extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Navbar/>
            <Banner/>
            <MainSection/>
            <Footer/>           
        </div> );
    }
}
 
export default Hosts;