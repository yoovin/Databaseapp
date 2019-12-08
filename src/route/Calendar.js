import React, { Component } from 'react'
import Reactcalendar from 'react-calendar';
import axios from 'axios'
import {ListGroup} from 'react-bootstrap'

export default class Calendar extends Component {

    state = {
        date:new Date(),
        movies:[]
        // selectedMili:0
    }

    day = ["일", "월", "화", "수", "목", "금", "토"]

    componentDidMount(){
        axios.get('/crew/getmovieschedule')
        .then((res)=>{
            console.log(res.data)
            this.setState({movies:res.data})
        })
        .catch(err=>console.log(err))
    }

    handleChangeDate = (date) => {
        this.setState({ date })
    }

    render() {
        const {date, movies} = this.state
        return (
            <div className="out">
                <div className="in">
                    <Reactcalendar
                    onChange={this.handleChangeDate}
                    value={date}
                    />
                    <br/>
                    {/* {date.toDateString()}<br/> */}
                    <span>
                        {date.getFullYear()}년 {date.getMonth()+1}월 {date.getDate()}일 {this.day[date.getDay()]}요일
                    </span><br/>
                    <hr/>
                    <span>
                        {Date.parse(date)}
                    </span>
                    <ListGroup variant="flush">
                        {movies ? movies.map(movie => {
                            if(movie.onScreen <= Date.parse(date) && 
                                Date.parse(date) <= movie.offScreen){
                                    return <ListGroup.Item>{movie.title}</ListGroup.Item>
                                }
                        }) :''}
                    </ListGroup>
                </div>
            </div>
        )
    }
}
