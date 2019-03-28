const addemailReducer = (state="", action)=>{
    switch (action.type){
        case 'ADD_EMAIL':
        return (state.concat(action.newemail)) 
     default :
     return state
    }
}

export default addemailReducer;