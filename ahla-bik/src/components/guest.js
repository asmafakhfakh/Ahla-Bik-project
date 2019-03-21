import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'




class Guest extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            shown:false,
            name:'James Bond',
            age:27,
            adress:'Tokyo',
            aboutme:'Description about yourself'


        }
    }
    inputhandler=()=>{
        this.setState({shown:!this.state.shown})
    }

editguest=()=>{
    this.props.editReducer({...this.state})
}



    render() { 
        return ( <div>
            <Link to='/'><span>Home </span></Link>
            <Link to='/hosts'><span>Hosts </span></Link>
            <Link to='/experiences'><span>Experiences </span></Link>
            <Link to='/host'><span>Host Profile</span></Link>
            


<h4>Name :</h4>
{ this.state.shown ? <input type='text' value={this.state.name} /> : null }
<h4>Age :</h4>
{ this.state.shown ? <input type='number' value={this.state.age} /> : null }
<h4>Adress :</h4>
{ this.state.shown ? <input type='text' value={this.state.adress} /> : null }
<h4>About Me :</h4>
{ this.state.shown ? <input type='text' value={this.state.aboutme} /> : null }
<br/>
<br/>
<button onClick={this.inputhandler}>Edit Profile</button>
<h4>Comments</h4>
<p>This is a comment</p>
<p>This is a comment</p>
<p>This is a comment</p>




            
        </div> );
    }
}
const mapStateToProps=(state)=>
{  return {
    guest:state.guestReducer
}
}
const mapDispatchToProps=(dispatch)=>
{
     return {
         editReducer:editguest=>
         {
             dispatch({
                 type:'EDIT_GUEST',
                 editguest
             })

         }
     }
}


 
export default connect(mapStateToProps,mapDispatchToProps)(Guest); 
