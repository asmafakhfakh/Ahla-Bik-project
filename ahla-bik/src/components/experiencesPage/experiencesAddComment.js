import React, { Component } from 'react';
import {connect} from 'react-redux'




class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = { name:"",body:"",date:""}
    }

handlechage=(event)=>{
    this.setState({[event.target.name]:event.target.value})
}
add=(e)=> {
    this.props.addcomment({...this.state,_id:Math.random()*1000+'',like:0,isliked:true})
    e.preventDefault();
    console.log(this.state)
  }

    render() { 
        
        return ( 
            <div className="comment-form-wrap pt-5">
                    <h5 className="mb-5">Leave a comment</h5>
                    <form action="#" className="p-5 bg-light">
                     <div className="form-group">
                        <label htmlFor="name">Name *</label>
                        <input type="text" className="form-control" id="name" name="name" onChange={this.handlechage}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea name id="message" cols={30} rows={8} name="body" className="form-control" onChange={this.handlechage} defaultValue={this.state} />
                      </div>
                      <div className="form-group">
                        <input onClick={this.add} type="submit" defaultValue="Post Comment" className="btn py-3 px-4 btn-primary" />
                      </div>
                      
                    </form>
                  </div>
         );
    }
}
const mapDispatchToProps=(dispatch)=>
{
return{addcomment:newcomment=>{dispatch({type:'ADD COMMENT',newcomment})}}  
} 
export default connect(null,mapDispatchToProps)(AddComment)
