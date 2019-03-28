import photoNum1 from "../components/experiencesPage/photos (temporary)/first-photo.jpg"
import photoNum2 from "../components/experiencesPage/photos (temporary)/second-photo.jpg"

const listOfArticles=[
    {
    id:1, 
    articlename:'Name of Article',
    firstbody:'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.',
    photo:{photoNum1},
    secondbody:'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.',
    authorname:'Name of Author',
    authordescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    showneditbutton:false,
    showndeletebutton:false
    }, 
    {
      id:2, 
      articlename:'Name of Article',
      firstbody:'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.',
      photo:{photoNum2},
      secondbody:'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.',
      authorname:'Name of Author',
      authordescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      showneditbutton:false,
      showndeletebutton:false
    }, 
    {
        id:3, 
        articlename:'Name of Article',
        firstbody:'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.',
        photo:{photoNum2},
        secondbody:'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.',
        authorname:'Name of Author',
        authordescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        showneditbutton:false,
        showndeletebutton:false
    },   
    ]
    const experiencesArticlesReducer=(state=listOfArticles,action)=>
  {
  switch(action.type)
  {
      case 'ADD COMMENT':
      return (state.concat(action.newcomment))
      case 'SHOW ARTICLE ADMIN BUTTONS':
      return (state.map((el,index)=>((el.showndeletebutton===false&&el.showneditbutton===false)?{id:el.id,articlename:el.articlename,firstbody:el.firstbody,photo:el.photo,secondbody:el.secondbody,authorname:el.authorname,authordescription:el.authordescription,showneditbutton:el.showneditbutton,showndeletebutton:!el.showndeletebutton}:el)))
      default :
      return state
  }
  
  }
  export default experiencesArticlesReducer