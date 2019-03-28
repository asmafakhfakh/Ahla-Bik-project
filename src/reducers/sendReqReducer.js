const sendRequestReducer = (state={}, action)=>{
    switch (action.type){
        case 'SEND_REQUEST':
        return (state.concat(action.newrequest)) 
     default :
     return state
    }
}

export default sendRequestReducer;