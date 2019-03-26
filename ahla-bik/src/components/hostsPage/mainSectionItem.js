import React, { Component } from 'react';
import HostCard from './hostCard'
import SideSearch from './sideSearch';

const hoststab=[
    {
        _id: 2020,
        title: "Arabic coffee",
        host: "Asma FAKHFAKH",
        activity: "Drink",
        destination: "Chatt Mariem - Sousse",
        price: 4,
        rating: 7,
        description: "Join the family on a cup of arabic coffee with home-made traditional sweets. We will be chatting about life and cats",
        imgsrc:'https://static.boredpanda.com/blog/wp-content/uploads/2017/01/two-faced-cat-yana-28.jpg',
    },
    {
        _id: 3030,
        title: "Lablebi",
        host: "Houssem Trabelsi",
        activity: "Food",
        destination: "Sahloul - Sousse",
        price: 3,
        rating: 5,
        description: "Lablebi is a famous tunisian food made with chickpeas. Warning: be ready to spice it up",
        imgsrc:'https://steemitimages.com/DQmRpnB8guFd4VkcZgLhtFMbjxqDQeqxzb5r4cYREin64CH/18645915_148001462408917_5174778861115670528_n.jpg',
    },
    {
        _id: 4040,
        title: "Spéléologie",
        host: "Rabii Ben Brahim",
        activity: "Sport",
        destination: "Ain Dhab - Jendouba",
        price: 10,
        rating: 8,
        description: "Come and discover the amazing cave of Ain Dhab",
        imgsrc:'https://www.intrepides-jura.com/1409-large_default/initiation-speleo-aquatique.jpg',
    },
    {
        _id: 3030,
        title: "Lablebi",
        host: "Houssem Trabelsi",
        activity: "Food",
        destination: "Sahloul - Sousse",
        price: 3,
        rating: 5,
        description: "Lablebi is a famous tunisian food made with chickpeas. Warning: be ready to spice it up",
        imgsrc:'https://steemitimages.com/DQmRpnB8guFd4VkcZgLhtFMbjxqDQeqxzb5r4cYREin64CH/18645915_148001462408917_5174778861115670528_n.jpg',
    },
    {
        _id: 4040,
        title: "Spéléologie",
        host: "Rabii Ben Brahim",
        activity: "Sport",
        destination: "Ain Dhab - Jendouba",
        price: 10,
        rating: 8,
        description: "Come and discover the amazing cave of Ain Dhab",
        imgsrc:'https://www.intrepides-jura.com/1409-large_default/initiation-speleo-aquatique.jpg',
    },
    {
        _id: 2020,
        title: "Arabic coffee",
        host: "Asma FAKHFAKH",
        activity: "Drink",
        destination: "Chatt Mariem - Sousse",
        price: 4,
        rating: 7,
        description: "Join the family on a cup of arabic coffee with home-made traditional sweets. We will be chatting about life and cats",
        imgsrc:'https://static.boredpanda.com/blog/wp-content/uploads/2017/01/two-faced-cat-yana-28.jpg',
    }
]

class MainSection extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <section className="ftco-section">
                <div className="container">
                    <div className="row">
                    <SideSearch/>
            <div className="col-lg-9">
                <div className="row">

                {
                    hoststab.map((el,index)=>
                        <div className="col-sm col-md-6 col-lg-4 ftco-animate fadeInUp ftco-animated">
                            <HostCard key={index} item={el}/>
                        </div>)
                }

                    
                </div>
                {/* <div className="row mt-5">
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
              </div> */}
            </div>
          </div>
        </div>
      </section>
        );
    }
}
 
export default MainSection;