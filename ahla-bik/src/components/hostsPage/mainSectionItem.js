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
                                this.props.filtredTab.map((el,index)=>
                                    <div className="col-sm col-md-6 col-lg-4 ftco-animate fadeInUp ftco-animated">
                                        <HostCard key={index} item={el}/>
                                    </div>)
                            }
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        filtredTab:state.searchReducer
    }
}
export default connect(mapStateToProps)(MainSection);