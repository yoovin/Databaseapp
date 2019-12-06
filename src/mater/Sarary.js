import React, { Component } from 'react'

// import {select, Button} from 'react-bootstrap'

export default class Sarary extends Component {

    state = {
        workTime:0,
        money:0,
        hangleMoney:'',
        unit:'won',
        userName: window.sessionStorage.getItem('userName')
    }

    componentDidMount(){
        this.printSalary()
    }

    // printNow = () =>{
    //     const today = new Date()
    //     const year = today.getFullYear();
    //     const month = today.getMonth() + 1;
    //     const date = today.getDate();
    //     let hour = today.getHours();
    //     let minute = today.getMinutes();
    //     let second = today.getSeconds();
    //     const ampm = hour >= 12 ? 'PM' : 'AM';
    //      // 12시간제로 변경
    //     hour %= 12;
    //     hour = hour || 12; // 0 => 12

    //     // 10미만인 분과 초를 2자리로 변경
    //     minute = minute < 10 ? '0' + minute : minute;
    //     second = second < 10 ? '0' + second : second;
    //     const now = `${year}년 ${month}월 ${date}일 ${hour}:${minute}:${second} ${ampm}`;
    //     this.setState({time:now})
    //     setTimeout(this.printNow, 1000)
    // }

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
        const hiredTime = new Date(2019, 1, 23, 8)
        const thisTime = new Date()
        const hiredSecond = Date.parse(hiredTime)
        const thisSecond = Date.parse(thisTime)

        let gookMili = thisSecond - hiredSecond
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
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" onClick={()=>this.handleSelectChange("won")} className="btn btn-secondary">원</button>
                <button type="button" onClick={()=>this.handleSelectChange("ubd")} className="btn btn-secondary">UBD</button>
                <button type="button" onClick={()=>this.handleSelectChange("gookbob")} className="btn btn-secondary">국밥</button>
            </div>
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
                <span className="hour">{workingTime.hour}</span> <span className="hangle">시간</span><br/>
                <span className="minute">{workingTime.minute}</span> <span className="hangle">분 </span>
                <span className="second">{workingTime.second}</span> <span className="hangle">초</span>
                <br/>
                <h2>이번 달 총 수입은</h2>
                <span className="hangle-money">{Money}</span>
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
