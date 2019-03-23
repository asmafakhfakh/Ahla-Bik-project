import React, { Component } from 'react';
class CommentsItem extends Component {
    state = {  }
    render() { 
       const {item}=this.props
        return ( 
            
                    <li className="comment">
                      <div className="comment-body">
                        <h3>{item.name}</h3>
                        <div className="meta">{item.date}</div>
                        <p>{item.body}</p>
                        <p><a href="#" className="reply">Like</a></p>
                      </div>
                    </li>
                   
         );
    }
}
 
export default CommentsItem;