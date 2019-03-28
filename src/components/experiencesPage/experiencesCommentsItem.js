import React, { Component } from 'react';
import {connect} from 'react-redux'
import './experienceCSS.css'


class CommentsItem extends Component {
  constructor(props)
  {
      super(props);
      this.state={
        showndeletebutton:true,
      }
  }


    add=(e)=>{
      this.props.dispatch({ type: 'ADD LIKE' });
      e.preventDefault();
    }
    render() { 
       const {item,deleteReducer}=this.props
        return ( 
            
                    <li className="comment">
                      <div className="comment-body">
                        <h3>{item.name}</h3>
                        <div className="meta">{item.date}</div>
                        <p>{item.body}</p>
                        <div className="like-block">
                        <span className="like-number">{item.like}</span>
                        <p><a onClick={this.add} href="#" className="like">Like</a></p>
                        { item.showndeletebutton ? <button onClick={()=>deleteReducer(item._id)} className="btn py-2 px-2 btn-dark delete-button">Delete</button> : null }
                        </div>
                      </div>
                    </li>
                   
         );
    }
}
const mapStateToProps=(state)=> {
  return {
    like:state.like
  };
}
const mapDispatchToProps=(dispatch)=>
{
    return {
        deleteReducer:_id=>
        {
            dispatch({
                type:'DELETE COMMENT',
                _id 

            })
        }
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CommentsItem) 