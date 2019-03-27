import hoststab from '../components/hostsPage/dataHosts'


const searchReducer = (state=hoststab, action)=>{
    switch (action.type){
        case 'SEARCH_HOST':
        return (hoststab.filter((el,index)=> (el.activity.indexOf(action.keyactivity)!==-1 && el.destination.indexOf(action.keycity)!==-1 )) 
        )
     default :
    return state
}
}

export default searchReducer;
