
const listOfComments=[
    {
    _id:1, 
    name:"John Doe",
    date:"October 03, 2018 at 2:21pm",
    body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?"
    },
    {
      _id:2, 
      name:"John Doe",
      date:"October 03, 2018 at 2:21pm",
      body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?"
    },
    {
      _id:3, 
      name:"John Doe",
      date:"October 03, 2018 at 2:21pm", 
      body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?"
    }
    ]


const experienceCommentReducer=(state=listOfComments,action)=>
{
switch(action.type)
{
    case 'ADD COMMENT':
    return (state.concat(action.newcomment))
    default :
    return state
}

}
export default experienceCommentReducer

