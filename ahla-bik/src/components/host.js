import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';

const sampleGest = {
    _id: 1010,
    name: "Asma Fakhfakh",
    location: "Chatt Mariem",
    activity: "Arabic coffee",
    description: "You are welcome to join the family on a cup of arabic coffee with home-made traditional sweets. We will be chatting about life and cats",
    imgsrc:'https://static.boredpanda.com/blog/wp-content/uploads/2017/01/two-faced-cat-yana-28.jpg',
    duration: '3-4 hours',
    cost: 4,

}

class Host extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user: sampleGest
         }
    }
    render() { 
        const {user}=this.state
        return ( <div>
            <Link to='/'><span>Home </span></Link>
            <Link to='/hosts'><span>Hosts </span></Link>
            <Link to='/experiences'><span>Experiences </span></Link>
            <Link to='/Guest'><span>Guest Page</span></Link>
            <Link to='/host'><span>Host Profile</span></Link>
            
            <Container>
                <Row>
                    <Col lg={4}>
                        <img src={user.imgsrc} alt={user.name} />
                    </Col>
                    <Col lg={8}>
                        <h1>{user.activity}</h1>
                        <h1>At {user.name}'s house</h1>
                        <h3>{user.description}</h3>
                        <h2>Location: {user.location}</h2>
                        <h3>Duraction: {user.duration}</h3>
                        <h3>cost: {user.cost}dt per person</h3>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <h4>Experiences with this host</h4>
                </Row>
            </Container>
        </div> );
    }
}
 
export default Host;