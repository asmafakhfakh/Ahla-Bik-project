import React, { Component } from 'react';
import {connect} from 'react-redux'
import HostCard from './hostCard'
import SideSearch from './sideSearch';
import hoststab from './dataHosts'



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
                                this.props.keysearch.map((el,index)=>
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
const mapStateToProps=(state)=>{
    return{
        keysearch:state.searchReducer
    }
}
export default connect(mapStateToProps)(MainSection);
