import React, { Component } from 'react';
import { connect } from 'react-redux';


class SideSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            keyactivity: "",
            keycity: "",
            keynumber: 1,
            fivestar: false,
            fourstar: false,
            threestar: false,
            twostar: false,
            onestar: false,
         }
    }


    handleActivityChange=(event)=>{
        this.setState({keyactivity: event.target.value})
    }
    // handleCityChange=(event)=>{
    //     this.setState({keycity: event.target.value})
    // }
    // handleNumberChange=(event)=>{
    //     this.setState({keynumber: event.target.value})
    // }
    handleClick=()=>{
      console.log(this.state.keyactivity)
        this.props.searchReducer(this.state.keyactivity)
    }

    render() { 
      console.log(this.props.keysearch)
      console.log(this.props.searchReducer)

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
                          <option value="">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="select-wrap one-third">
                        <div className="icon"><span className="ion-ios-arrow-down" /></div>
                        <select name id className="form-control" placeholder="Keyword search" onChange={this.handleCityChange}>
                          <option value="">City</option>
                          <option value="tunis">Tunis</option>
                          <option value="sousse">Sousse</option>
                          <option value="ariana">Ariana</option>
                          <option value="beja">Beja</option>
                          <option value="ben arous">Ben Arous</option>
                          <option value="bizerte">Bizerte</option>
                          <option value="gabes">Gabes</option>
                          <option value="gafsa">Gafsa</option>
                          <option value="jendouba">Jendouba</option>
                          <option value="kairouan">Kairouan</option>
                          <option value="kasserine">Kasserine</option>
                          <option value="kebili">Kebili</option>
                          <option value="kef">Kef</option>
                          <option value="mahdia">Mahdia</option>
                          <option value="manouba">Manouba</option>
                          <option value="medenine">Medenine</option>
                          <option value="monastir">Monastir</option>
                          <option value="nabeul">Nabeul</option>
                          <option value="sfax">Sfax</option>
                          <option value="sidi bouzid">Sidi Bouzid</option>
                          <option value="siliana">Siliana</option>
                          <option value="tataouine">Tataouine</option>
                          <option value="tozeur">Tozeur</option>
                          <option value="zaghouan">Zaghouan</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <input type="number" id="guests_number" className="form-control" placeholder="Guests number" onChange={this.handleNumberChange}/>
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
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      <p className="rate"><span><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /></span></p>
                    </label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      <p className="rate"><span><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star-o" /></span></p>
                    </label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      <p className="rate"><span><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star-o" /><i className="icon-star-o" /></span></p>
                    </label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      <p className="rate"><span><i className="icon-star" /><i className="icon-star" /><i className="icon-star-o" /><i className="icon-star-o" /><i className="icon-star-o" /></span></p>
                    </label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
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


const mapStateToProps=(state)=>{
    return{
        keysearch:state.searchReducer
    }
}


const mapDispatchToProps=(dispatch)=>{
    return{
        searchReducer:keyactivity=>{
            dispatch({
                type:'SEARCH_HOST',
                keyactivity
            })
        }
    }
}
 
// export default connect(mapStateToProps, mapDispatchToProps) (SideSearch);



export default connect(mapStateToProps,mapDispatchToProps)(SideSearch);