import React, { Component } from 'react'
import axios from 'axios'

import {Dropdown, DropdownButton} from 'react-bootstrap'

export default class Salary extends Component {

    state = {
        accuTime:0,
        todayTime:0,
        money:0,
        hangleMoney:'',
        unit:'won',
        userName: window.sessionStorage.getItem('name'),
        howUnit:""
    }

    componentWillMount(){
        axios.get('/crew/getsalarytime',{
            params:{
                id:window.sessionStorage.getItem('employId')
            }
        })
        .then((res)=>{
            this.setState({accuTime:res.data.time})
        })
        .catch(err=>console.log(err))
    }

    componentDidMount(){
        this.printSalary()
    }

    handleSelectChange = (unit) =>{
        this.setState({unit:unit})
    }

    msToTime = (s) =>{
        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;
        var hrs = (s - mins) / 60;

        let time = {
            hour:hrs,
            minute:mins,
            second:secs
        }
      
        return time
      }
    printSalary = () => {
        const todayStartTime = new Date(2019, 11, 8, 14)
        const thisTime = new Date()
        const todayStartSecond = Date.parse(todayStartTime)
        const thisSecond = Date.parse(thisTime)

        // let gookMili = thisSecond - hiredSecond
        let gookMili = this.state.accuTime + (thisSecond - todayStartSecond)
        let gookMinute = gookMili / 60000
        let gookMoney = gookMinute * 139.17

        this.setState({
            money:Math.round(gookMoney),
            workTime:gookMili
        })

        setTimeout(this.printSalary, 1000)
    }

    selectBox = () =>{
        return(
            <DropdownButton id="dropdown-variants-secondary" variant="secondary" title="환율 선택">
                <Dropdown.Item onClick={()=>{
                    this.handleSelectChange("won")
                    this.setState({howUnit:""})
                    }}>원</Dropdown.Item>
                <Dropdown.Item onClick={()=>{
                    this.handleSelectChange("ubd")
                    this.setState({howUnit:"1UBD = 170000₩"})
                }}>UBD</Dropdown.Item>
                <Dropdown.Item onClick={()=>{
                    this.handleSelectChange("gookbob")
                    this.setState({howUnit:"1국밥 = 6000₩"})
                    }}>국밥</Dropdown.Item>
            </DropdownButton>
        )
    }

    renderEachUnit = (unit) => {
        var Money = ''
        if(unit === 'won'){
            let krStrMoney = this.state.money.toString()
            let krMoney = krStrMoney.substring(0, krStrMoney.length -4) +'만 ' + krStrMoney.substring(krStrMoney.length -4) + '원'
            Money = krMoney
        }else if(unit === 'ubd'){
            Money = (this.state.money / 170000).toFixed(6) + ' UBD'
        }else if(unit === 'gookbob'){
            Money = (this.state.money / 6000).toFixed(4) + ' 그릇'
        }

        let workingTime = this.msToTime(this.state.workTime)

        return(
            <div>
                <h1>{this.state.userName}의</h1>
                <h1>이번 달 근무시간은</h1>
                <span className="hour">{workingTime.hour}</span><span className="hangle">시간</span><br/>
                <span className="minute">{workingTime.minute}</span><span className="hangle">분 </span>
                <span className="second">{workingTime.second}</span><span className="hangle">초</span>
                <br/>
                <h2>이번 달 총 수입은</h2>
                <span className="hangle-money">{Money}</span><br/>
                <span className="howunit">{this.state.howUnit}</span>
                <br/><br/>
                {this.selectBox()}
            </div>
        )
    }
    render() {
        return(
            <div className="out">
                <div className="in">
                    {this.renderEachUnit(this.state.unit)}
                </div>
            </div>
        )
    }
}
