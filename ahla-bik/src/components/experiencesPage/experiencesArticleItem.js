import React, { Component } from 'react';

import CommentsItem from "./experiencesCommentsItem"


const listOfComments=[
    {
    id:1, 
    img:"images/person_1.jpg", 
    name:"John Doe",
    date:"October 03, 2018 at 2:21pm",
    body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?"
    },
    {
      id:2, 
      img:"images/person_1.jpg",
      name:"John Doe",
      date:"October 03, 2018 at 2:21pm",
      body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?"
    },
    {
      id:3, 
      img:"images/person_1.jpg",
      name:"John Doe",
      date:"October 03, 2018 at 2:21pm", 
      body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?"
    }
    ]





class Article extends Component {
    state = {  }
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
                    <div className="bio mr-5">
                      <img src="images/person_1" alt="Image placeholder" className="img-fluid mb-4" />
                    </div>
                    <div className="desc">
                      <h3>{item.authorname}</h3>
                      <p>{item.authordescription}</p>
                    </div>
                  </div>
                  <h3 className="mb-5">Comments</h3>
                <div className="pt-5 mt-5">   
                  <ul className="comment-list">
                {/*maping items*/}
                {
                  listOfComments.map((el,index)=><CommentsItem item={el} key={index}/>)
                }
                  </ul>
                  </div>

                  {/* END comment-list */}
            </div>
         );
    }
}
 
export default Article;