import React, { Component } from 'react'
import {Card} from 'react-bootstrap'

import ps from '../img/ps.jpg'

export default class Profile extends Component {

    state = {
        name:""
    }
    componentWillMount(){
        this.setState({name:window.sessionStorage.getItem('name')})
    }

    render() {
        console.log(this.state)
        return (
            <div className="out">
                <div className="in">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ps}/>
                <Card.Body>
                    <Card.Title>{window.sessionStorage.getItem('name')}</Card.Title>
                    <Card.Text>
                    <span>Emp No. {window.sessionStorage.getItem('employId')}</span><br/>
                    <span>Job : {window.sessionStorage.getItem('class')}</span><br/>
                    <span>Email : {window.sessionStorage.getItem('email')}</span><br/>
                    <span>Tel : {window.sessionStorage.getItem('tel')}</span><br/>
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                </Card>
                </div>
            </div>
        )
    }
}
