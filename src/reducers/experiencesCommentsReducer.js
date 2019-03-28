
const listOfComments=[
    {
    _id:1, 
    name:"John Doe",
    date:"October 03, 2018 at 2:21pm",
    body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
    like:3,
    isliked:true,
    showndeletebutton:false
  },
    {
      _id:2, 
      name:"John Doe",
      date:"October 03, 2018 at 2:21pm",
      body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
      like:7,
      isliked:true,
      showndeletebutton:false
    },
    {
      _id:3, 
      name:"John Doe",
      date:"October 03, 2018 at 2:21pm", 
      body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
      like:2,
      isliked:true,
      showndeletebutton:false
    }
    ]


const experienceCommentReducer=(state=listOfComments,action)=>
{
switch(action.type)
{
    case 'ADD COMMENT':
    return (state.concat(action.newcomment))
    case 'ADD LIKE':
    return (state.map((el,index)=>((el.isliked===true)?{_id:el._id,name:el.name,date:el.date,body:el.body,like:el.like+1,isliked:!el.isliked,showndeletebutton:el.showndeletebutton}:el)))
    case 'DELETE COMMENT':
    return (state.filter((el,index)=>el._id!==action._id))
    case 'SHOW DELETE BUTTON':
    return (state.map((el,index)=>((el.showndeletebutton===false)?{_id:el._id,name:el.name,date:el.date,body:el.body,like:el.like,isliked:el.isliked,showndeletebutton:!el.showndeletebutton}:el)))
    default :
    return state
}

}
export default experienceCommentReducer

