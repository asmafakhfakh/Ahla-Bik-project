import React, { Component } from 'react';
import {connect} from 'react-redux'
import './experienceCSS.css'


class CommentsItem extends Component {

    add=(e)=>{
      this.props.dispatch({ type: 'ADD LIKE' });
      e.preventDefault();
      console.log(this.props)
    }
    render() { 
       const {item}=this.props
        return ( 
            
                    <li className="comment">
                      <div className="comment-body">
                        <h3>{item.name}</h3>
                        <div className="meta">{item.date}</div>
                        <p>{item.body}</p>
                        <div className="like-block">
                        <span className="like-number">{item.like}</span>
                        <p><a onClick={this.add} href="#" className="like">Like</a></p>
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

export default connect(mapStateToProps)(CommentsItem) 