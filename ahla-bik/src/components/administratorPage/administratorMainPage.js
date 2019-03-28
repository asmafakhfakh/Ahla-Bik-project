import React, { Component } from 'react';
import {connect} from "react-redux"
import {Helmet} from 'react-helmet';

import "./Administrator.css"

import CommentsItem from "../experiencesPage/experiencesCommentsItem"
import Article from "../experiencesPage/experiencesArticleItem"
import Navbar from "../navbar"



class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showncomments:false,
            shownarticles:false,
         }
    }

    inputcommentshandler=()=>
    {(this.state.shownarticles===true)?
      this.setState({showncomments:!this.state.showncomments,shownarticles:!this.state.shownarticles}):
      this.setState({showncomments:!this.state.showncomments,shownarticles:this.state.shownarticles})

    }
    inputarticleshandler=()=>
    {(this.state.showncomments===true)?
      this.setState({shownarticles:!this.state.shownarticles,showncomments:!this.state.showncomments}):
      this.setState({shownarticles:!this.state.shownarticles,showncomments:this.state.showncomments})

    }
    showdeletebutton=()=>{this.props.dispatch({type:'SHOW DELETE BUTTON'});
      }
    showarticleadminbutton=()=>{this.props.dispatch({type:'SHOW ARTICLE ADMIN BUTTONS'});
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
            <button onClick={()=>{this.showarticleadminbutton();this.inputarticleshandler()}} className="btn py-3 px-4 btn-primary" type="button">Manage Articles</button>
            <section className="ftco-degree-bg test-articles">
                {/*maping articles*/}
                { this.state.shownarticles? this.props.articles.map((el,index)=><Article item={el} key={index}/>):null}
            </section>
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
      articles:state.experiencesArticlesReducer, 
    };
  }

  

export default connect(mapStateToProps)(Admin)