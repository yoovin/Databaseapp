import React, { Component } from 'react'
import {Card} from 'react-bootstrap'

import ps from '../img/ps.jpg'

export default class Profile extends Component {
    render() {
        return (
            <div className="out">
                <div className="in">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ps} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    <span>Emp No. </span><br/>
                    <span>Job</span><br/>
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                </Card>
                </div>
            </div>
        )
    }
}
