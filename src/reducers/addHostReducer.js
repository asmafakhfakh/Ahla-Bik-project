const addHostReducer = (state={}, action)=>{
    switch (action.type){
        case 'ADD_HOST':
        return (state.concat(action.newhost)) 
     default :
     return state
    }
}

export default addHostReducer;