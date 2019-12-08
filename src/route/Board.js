import React, { Component } from 'react'
// import {Animated} from "react-animated-css";
import {Accordion, Card, Button} from 'react-bootstrap'
import axios from 'axios'
// import {InputGroup, FormControl, Button, Dropdown, DropdownButton} from 'react-bootstrap'

export default class Board extends Component {

    state = {
        // boardTag:"태그 선택",
        notice:[]
    }

    handleTagChange = (tag) =>{
        this.setState({boardTag:tag})
    }

    // handlePostChange = (e) => {
    //     this.setState({post:e.target.value})
    // }

    componentWillMount(){
        axios.get('/crew/getnotice')
        .then((res)=>this.setState({notice:res.data}))
        .catch(err=>console.log(err))
    }

    render() {
        return (
            <div className="out">
                    <table className="table">
                    <thead className="thead-light">
                        <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {this.state.notice ? this.state.notice.map(row => {
                            let notiDate = new Date(row.date)
                                return (
                                    <tr>
                                        <th>
                                        <Accordion defaultActiveKey="1">
                                        <Card>
                                            <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                {row.title}
                                            </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                            <Card.Body>{row.desc}</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        </Accordion>
                                        </th>
                                        <td>{
                                        notiDate.getFullYear() + ' / ' +
                                        (notiDate.getMonth() + 1) + ' / ' +
                                        (notiDate.getDate())
                                        }</td>
                                    </tr>
                            )
                        }) : 'Loading'}
                    </tbody>
                    </table>
            </div>
        )
    }
}
