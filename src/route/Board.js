import React, { Component } from 'react'
import {InputGroup, FormControl, Button} from 'react-bootstrap'

export default class Board extends Component {
    render() {
        return (
            <div className="out">
                {/* <div className="in"> */}
                    <table className="table">
                    <thead className="thead-light">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
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
                        </tr>
                    </tbody>
                    </table>
                {/* </div> */}
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="새로운 글 내용"
                    aria-label="글쓰기"
                    aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                    <Button variant="outline-secondary">글쓰기</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        )
    }
}
