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

    handlePostChange = (e) => {
        this.setState({post:e.target.value})
    }

    componentWillMount(){
        axios.get('/crew/getnotice')
        .then((res)=>this.setState({notice:res.data}))
        .catch(err=>console.log(err))
    }

    render() {
        return (
            <div className="out">
                {/* <div className="in"> */}
                    {/* <table className="table"> */}
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
                                // <tr>
                                //     <th scope="row">{row.title}</th>
                                    // <td>{
                                    //     notiDate.getFullYear() + ' / ' +
                                    //     (notiDate.getMonth() + 1) + ' / ' +
                                    //     (notiDate.getDate())
                                    //     }</td>
                                // </tr>
                            )
                        }) : 'Loading'}
                        
                        {/* <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        </tr> */}
                    </tbody>
                    </table>
                {/* </div> */}
                {/* <InputGroup className="mb-3">
                <DropdownButton
                    as={InputGroup.Prepend}
                    variant="outline-secondary"
                    title={this.state.boardTag}
                    id="input-group-dropdown-1"
                    >
                    <Dropdown.Item onClick={()=>this.handleTagChange("공지사항")}>공지사항</Dropdown.Item>
                    <Dropdown.Item onClick={()=>this.handleTagChange("대타구함")}>대타구함</Dropdown.Item>
                    <Dropdown.Item onClick={()=>this.handleTagChange("자유")}>자유</Dropdown.Item>
                </DropdownButton>
                    <FormControl
                    placeholder="새로운 글 내용"
                    aria-label="글쓰기"
                    aria-describedby="basic-addon2"
                    onChange = {this.handlePostChange}
                    value = {this.state.post}
                    />
                    <InputGroup.Append>
                    <Button variant="outline-secondary">글쓰기</Button>
                    </InputGroup.Append>
                </InputGroup> */}
            </div>
        )
    }
}
