import React, { Component } from 'react';
import {connect} from "react-redux"
import {Helmet} from 'react-helmet';

import "./Administrator.css"

import CommentsItem from "../experiencesPage/experiencesCommentsItem"
import Navbar from "../navbarUser"



class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showncomments:false,
            shownarticles:false,
         }
    }

    inputcommentshandler=()=>
    {
      this.setState({showncomments:!this.state.showncomments})
    }
    inputarticleshandler=()=>
    {
      this.setState({shownarticles:!this.state.shownarticles})
    }
    showdeletebutton=()=>{
        this.props.dispatch({type:'SHOW DELETE BUTTON'});
      }
    render() { 
        
        return ( 
        <div>
            <Navbar/>

            <div className="Admin-container">
            <button onClick={()=>{this.showdeletebutton();this.inputcommentshandler()}} className="btn py-3 px-4 btn-primary" type="button">Manage Comments</button>
            <ul className="comment-list test">
            { this.state.showncomments ?  this.props.comment.map((el,index)=><CommentsItem item={el} key={index}/>)  : null }
            </ul>
            <button onClick={this.inputarticleshandler} className="btn py-3 px-4 btn-primary" type="button">Manage Articles</button>
            {}
            <button onClick={this.inputhandler} className="btn py-3 px-4 btn-primary" type="button">Manage Hosts</button>
            {}
            <button onClick={this.inputhandler} className="btn py-3 px-4 btn-primary" type="button">Manage Users</button>
            {}
            <button onClick={this.inputhandler} className="btn py-3 px-4 btn-primary" type="button">Add Administrator</button>
            {}
            </div>
            

            <Helmet>
                <title>Administrator</title>
                <style>{'body { background-color: grey; }'}</style>
            </Helmet>
        </div> );
    }
}

const mapStateToProps=(state)=> {
    return {
      comment:state.experienceCommentReducer, 
      like:state.like
    };
  }

export default connect(mapStateToProps)(Admin)