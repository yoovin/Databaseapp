import React, { Component } from 'react'
import Reactcalendar from 'react-calendar';

export default class Calendar extends Component {

    state = {
        date:new Date()
    }

    day = ["일", "월", "화", "수", "목", "금", "토"]

    handleChangeDate = date => this.setState({ date })

    render() {
        const {date} = this.state
        return (
            <div className="out">
                <div className="in">
                    <Reactcalendar
                    onChange={this.handleChangeDate}
                    value={date}
                    />
                    <br/>
                    {date.toDateString()}<br/>
                    <span>
                        {date.getFullYear()}년
                        {date.getMonth()+1}월
                        {date.getDate()}일
                        {this.day[date.getDay()]}요일
                    </span>
                </div>
            </div>
        )
    }
}
