import React, { Component } from 'react';
import { connect } from 'react-redux';


class SideSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            keyactivity: "",
            keycity: "",
            fivestar: 0,
            fourstar: 0,
            threestar: 0,
            twostar: 0,
            onestar: 0,
         }
    }


    handleActivityChange=(event)=>{
        this.setState({keyactivity: event.target.value})
    }
    handleCityChange=(event)=>{
       this.setState({keycity: event.target.value})
    }
    handle5star=(event)=>{
      if (this.state.fivestar===5)
      {this.setState({fivestar:0})}
      else {this.setState({fivestar:5})}
    }
    handle4star=(event)=>{
      if (this.state.fourstar===4)
      {this.setState({fourstar:0})}
      else {this.setState({fourstar:4})}
    }
    handle3star=(event)=>{
      if (this.state.threestar===3)
      {this.setState({threestar:0})}
      else {this.setState({threestar:3})}
    }
    handle2star=(event)=>{
      if (this.state.twostar===2)
      {this.setState({twostar:0})}
      else {this.setState({twostar:2})}
    }
    handle1star=(event)=>{
      if (this.state.onestar===1)
      {this.setState({onestar:0})}
      else {this.setState({onestar:1})}
    }
    handleClick=()=>{
        this.props.searchReducer(this.state.keyactivity,this.state.keycity)
    }

    render() { 
      
        return ( 
            <div className="col-lg-3 sidebar order-md-last ftco-animate fadeInUp ftco-animated">
              <div className="sidebar-wrap ftco-animate fadeInUp ftco-animated">
                <h3 className="heading mb-4">Search</h3>
                <form action="#">
                  <div className="fields">

                    <div className="form-group">
                      <div className="select-wrap one-third">
                        <div className="icon"><span className="ion-ios-arrow-down" /></div>
                        <select name id className="form-control" placeholder="Keyword search" onChange={this.handleActivityChange}>
                          <option value="">Activity</option>
                          <option value="Food">Food</option>
                          <option value="Drink">Drink</option>
                          <option value="Brunch">Brunch</option>
                          <option value="Guided tour">Guided tour</option>
                          <option value="Sport">Sport</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="select-wrap one-third">
                        <div className="icon"><span className="ion-ios-arrow-down" /></div>
                        <select name id className="form-control" placeholder="Keyword search" onChange={this.handleCityChange}>
                          <option value="">City</option>
                          <option value="Ariana">Ariana</option>
                          <option value="Beja">Beja</option>
                          <option value="Ben arous">Ben Arous</option>
                          <option value="Bizerte">Bizerte</option>
                          <option value="Gabes">Gabes</option>
                          <option value="Gafsa">Gafsa</option>
                          <option value="Jendouba">Jendouba</option>
                          <option value="Kairouan">Kairouan</option>
                          <option value="Kasserine">Kasserine</option>
                          <option value="Kebili">Kebili</option>
                          <option value="Kef">Kef</option>
                          <option value="Mahdia">Mahdia</option>
                          <option value="Manouba">Manouba</option>
                          <option value="Medenine">Medenine</option>
                          <option value="Monastir">Monastir</option>
                          <option value="Nabeul">Nabeul</option>
                          <option value="Sfax">Sfax</option>
                          <option value="Sidi bouzid">Sidi Bouzid</option>
                          <option value="Siliana">Siliana</option>
                          <option value="Sousse">Sousse</option>
                          <option value="Tataouine">Tataouine</option>
                          <option value="Tozeur">Tozeur</option>
                          <option value="Tunis">Tunis</option>
                          <option value="Zaghouan">Zaghouan</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <input type="button" defaultValue="Search" className="btn btn-primary py-3 px-5" onClick={this.handleClick} />
                    </div>

                  </div>
                </form>
              </div>

              <div className="sidebar-wrap ftco-animate fadeInUp ftco-animated">
                <h3 className="heading mb-4">Star Rating</h3>
                <form method="post" className="star-rating">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={this.handle5star} />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      <p className="rate"><span><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /></span></p>
                    </label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={this.handle4star}/>
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      <p className="rate"><span><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star-o" /></span></p>
                    </label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={this.handle3star}/>
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      <p className="rate"><span><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star-o" /><i className="icon-star-o" /></span></p>
                    </label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={this.handle2star}/>
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      <p className="rate"><span><i className="icon-star" /><i className="icon-star" /><i className="icon-star-o" /><i className="icon-star-o" /><i className="icon-star-o" /></span></p>
                    </label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={this.handle1star}/>
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      <p className="rate"><span><i className="icon-star" /><i className="icon-star-o" /><i className="icon-star-o" /><i className="icon-star-o" /><i className="icon-star-o" /></span></p>
                    </label>
                  </div>
                </form>
              </div>
            </div>
         );
    }
}


//  const mapStateToProps=(state)=>{
//      return{
//          keysearch:state.searchReducer
//      }
//  }


const mapDispatchToProps=(dispatch)=>{
    return{
        searchReducer:(keyactivity,keycity,fivestar,fourstar,threestar,twostar,onestar)=>{
            dispatch({
                type:'SEARCH_HOST',
                keyactivity,
                keycity,
                fivestar,
                fourstar,
                threestar,
                twostar,
                onestar
            })
        }
    }
}

export default connect(null,mapDispatchToProps)(SideSearch);
