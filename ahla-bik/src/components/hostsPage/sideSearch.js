import React, { Component } from 'react';
class SideSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="col-lg-3 sidebar order-md-last ftco-animate fadeInUp ftco-animated">
              <div className="sidebar-wrap ftco-animate fadeInUp ftco-animated">
                <h3 className="heading mb-4">Find City</h3>
                <form action="#">
                  <div className="fields">

                    <div className="form-group">
                      <div className="select-wrap one-third">
                        <div className="icon"><span className="ion-ios-arrow-down" /></div>
                        <select name id className="form-control" placeholder="Keyword search">
                          <option value>Activity</option>
                          <option value>Lunch</option>
                          <option value>Drink</option>
                          <option value>Brunch</option>
                          <option value>Guided tour</option>
                          <option value>Sport</option>
                          <option value>Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="select-wrap one-third">
                        <div className="icon"><span className="ion-ios-arrow-down" /></div>
                        <select name id className="form-control" placeholder="Keyword search">
                          <option value>City</option>
                          <option value>Tunis</option>
                          <option value>Sousse</option>
                          <option value>Ariana</option>
                          <option value>Beja</option>
                          <option value>Ben Arous</option>
                          <option value>Bizerte</option>
                          <option value>Gabes</option>
                          <option value>Gafsa</option>
                          <option value>Jendouba</option>
                          <option value>Kairouan</option>
                          <option value>Kasserine</option>
                          <option value>Kebili</option>
                          <option value>Kef</option>
                          <option value>Mahdia</option>
                          <option value>Manouba</option>
                          <option value>Medenine</option>
                          <option value>Monastir</option>
                          <option value>Nabeul</option>
                          <option value>Sfax</option>
                          <option value>Sidi Bouzid</option>
                          <option value>Siliana</option>
                          <option value>Tataouine</option>
                          <option value>Tozeur</option>
                          <option value>Zaghouan</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <input type="text" id="guests_number" className="form-control" placeholder="Number of guests" />
                    </div>

                    <div className="form-group">
                      <input type="submit" defaultValue="Search" className="btn btn-primary py-3 px-5" />
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
 
export default SideSearch;