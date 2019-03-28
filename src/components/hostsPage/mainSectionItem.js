import React, { Component } from 'react';
import {connect} from 'react-redux'
import HostCard from './hostCard'
import SideSearch from './sideSearch';
//import hoststab from './dataHosts'
import axios from 'axios'



class MainSection extends Component {

    componentDidMount=()=>{
        axios.get('/get-host').then((res)=>this.props.updateHostsReducer(res.data))
    }

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

const mapDispatchToProps=(dispatch)=>{
    return {
        updateHostsReducer:hoststab=>{
            dispatch({
                type:'UPDATE_HOSTS',
                hoststab
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MainSection);