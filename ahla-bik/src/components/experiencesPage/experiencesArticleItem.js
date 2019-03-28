import React, { Component } from 'react';
import {connect} from 'react-redux'

import CommentsItem from "./experiencesCommentsItem"
import AddComment from "./experiencesAddComment"





class Article extends Component {
  constructor(props)
  {
      super(props);
      this.state={
          shown:false,
      }
  }

  inputhandler=()=>
  {
    this.setState({shown:!this.state.shown})
  }
  

    render() { 
        const {item}=this.props
        
        return ( 
            <div>
                  <h2 className="mb-3">{item.articlename}</h2>
                  <p>{item.firstbody}</p>
                  <p>
                    <img src={item.photo} alt className="img-fluid" />
                  </p>
                  <p>{item.secondbody}</p>
                  <div className="tagcloud">
                      <a href="#" className="tag-cloud-link">Life</a>
                      <a href="#" className="tag-cloud-link">Sport</a>
                      <a href="#" className="tag-cloud-link">Tech</a>
                      <a href="#" className="tag-cloud-link">Travel</a>
                    </div>
                    <div className="about-author d-flex p-4 bg-light">
                    {/*<div className="bio mr-5">
                      <img src="images/person_1" alt="Image placeholder" className="img-fluid mb-4" />
                    </div>*/}
                    <div className="desc">
                      <h3>{item.authorname}</h3>
                      <p>{item.authordescription}</p>
                    </div>
                  </div>
                  <br/>
                  <h3 className="mb-5">Comments</h3>
                <div className="pt-5 mt-5">   
                  <ul className="comment-list">
                {/*maping items of Comments*/}
                {
                  this.props.comment.map((el,index)=><CommentsItem item={el} key={index}/>)
                }
                  </ul>
                  </div>
                {/* Now Add comment section */}
                <div className="form-group">
                    <button onClick={this.inputhandler} className="btn py-3 px-4 btn-primary" type="button">Add Comment</button>
                    { this.state.shown ? <AddComment/> : null }
                    { Object.values(...this.props.article)[6] ? <button className="btn py-3 px-4 btn-dark delete-button">Edit</button> : null}
                    { !Object.values(...this.props.article)[7] ? <button className="btn py-3 px-4 btn-dark delete-button">Delete</button> : null}
                                 
                 </div>
            </div>
         );
    }
}




const mapStateToProps=(state)=>
{  return {comment:state.experienceCommentReducer,
           article:state.experiencesArticlesReducer}
}
const mapDispatchToProps=(dispatch)=>
{
    return {
        deleteReducer:_id=>
        {
            dispatch({
                type:'DELETE ARTICLE',
                _id 

            })
        }
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Article)