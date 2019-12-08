import React, { Component } from 'react'

export default class Task extends Component {

    state = {
        today:"",
        startTime:""
    }

    day = ["일", "월", "화", "수", "목", "금", "토"]

    componentWillMount(){
        this.setState({today:new Date()})
    }

    render() {
        const {today} = this.state
        return (
            <div className="out">
                <div className="in">
                    <span className="date">{today.getFullYear()}</span>
                    <span className="hangle-date">년</span>
                    <span className="date">{today.getMonth()+1}</span>
                    <span className="hangle-date">월</span>
                    <span className="date">{today.getDate()}</span>
                    <span className="hangle-date">일</span><br/>
                    <span className="date">{this.day[today.getDay()]}</span>
                    <span className="hangle-date">요일</span>
                    <br/>
                    <span className="name">{window.sessionStorage.getItem('name')}</span>
                    <span className="hangle">의 현재 업무</span>
                </div>
            </div>
        )
    }
}
