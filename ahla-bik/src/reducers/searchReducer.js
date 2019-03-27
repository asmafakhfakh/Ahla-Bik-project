
import hoststab from '../components/hostsPage/dataHosts'


const searchReducer = (state=hoststab, action)=>{
    switch (action.type){

        case 'SEARCH_HOST':
        return (hoststab.filter((el,index)=> (el.activity===action.keyactivity&&el.destination===action.keycity), console.log(state)) 
             
      
        )
      
    
     default :
    return state
}
}

export default searchReducer;