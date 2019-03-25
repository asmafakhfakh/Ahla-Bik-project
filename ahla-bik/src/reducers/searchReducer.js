
import hoststab from '../components/hostsPage/dataHosts'


const searchReducer = (state=hoststab, action)=>{
    switch (action.type){

        case 'SEARCH_HOST':
        return ( state.filter((el,index)=>(el.activity===action.keyactivity),console.log(state))
             
      
        )
      
    
     default :
    return state
}
}

export default searchReducer;