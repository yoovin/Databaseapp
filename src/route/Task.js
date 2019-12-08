import React, { Component } from 'react'
import {DropdownButton, Dropdown, ButtonGroup} from 'react-bootstrap'
import axios from 'axios'

export default class Task extends Component {

    state = {
        today:"",
        task:"Select Your Task"
    }

    day = ["일", "월", "화", "수", "목", "금", "토"]

    componentWillMount(){
        this.setState({today:new Date()})
        if(window.sessionStorage.getItem('task') !== null){
            this.setState({task:window.sessionStorage.getItem('task')})
        }
    }

    handleDropdownChange = (value) =>{
        this.setState({task:value})
        window.sessionStorage.setItem('task', value)
        axios({
            method:'post',
            url:'/post/addcrewtask',
            data:{
                id:window.sessionStorage.getItem('employId'),
                task:value
            }
        })
    }

    render() {
        const {today, task} = this.state
        console.log(task)
        console.log(window.sessionStorage.getItem('task'))
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
                    <span className="hangle">의 현재 업무</span><br/><br/>
                    <DropdownButton as={ButtonGroup} title={task} id="bg-nested-dropdown">
                        <Dropdown.Item onClick={()=>this.handleDropdownChange("Ticketing")}>Ticketing</Dropdown.Item>
                        <Dropdown.Item onClick={()=>this.handleDropdownChange("Cafeteria")}>Cafeteria</Dropdown.Item>
                        <Dropdown.Item onClick={()=>this.handleDropdownChange("Maintenance")}>Maintenance</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
        )
    }
}
