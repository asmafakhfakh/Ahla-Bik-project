var initialguestvalues=[{
    _id:'2',
    name:'James Bond',
    age:27,
    adress:'Tokyo',
    aboutme:'Description about yourself'
}]

const guestReducer=(state=initialguestvalues,action)=>
{
  switch(action.type)
  {  

    case 'EDIT_GUEST':
    return (
        state.map(el=>(el._id===action.editguest._id)?el=action.editguest:el)
    )
      default :
      return state
  }
  
}

export default guestReducer