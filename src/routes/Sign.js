import React, { Component } from 'react'

const registerButton = require('../img/regibutton.png')

export default class Sign extends Component {

    state = {
        number:'',
        code:'',
        email:'',
        id:'',
        pw:'',
    }

    render() {
        return (
            <div className="sign">
                <div className="in">
                    <span>사원번호 : </span><input type="text"/><br/><br/>
                    <span>지점코드 : </span><input type="text"/><br/><br/>
                    <span>email : </span><input type="text"/><br/><br/>
                    <span>ID : </span><input type="text"/><br/><br/>
                    <span>PW : </span><input type="text"/><br/><br/>
                    <span id="rb"><img src={registerButton} alt="등록버튼"/></span>
                </div>
            </div>
        )
    }
}
