import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import Banner from './bannerItem';
import MainSection from'./mainSectionItem';
import Footer from 'C:/Users/HP/Desktop/ahla bik/ahla-bik/src/components/footer'
import Navbar from 'C:/Users/HP/Desktop/ahla bik/ahla-bik/src/components/navbar'

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