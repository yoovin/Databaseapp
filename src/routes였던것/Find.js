import React, { Component } from 'react'

const registerButton = require('../img/regibutton.png')

export default class Find extends Component {
    render() {
        return (
            <div className="sign">
                <div id="in">
                    <span>email : </span><input type="text"/><br/><br/>
                    <span>ID : </span><input type="text"/><br/><br/>
                    <span id="rb"><img src={registerButton} alt="등록버튼"/></span>
                </div>
            </div>
        )
    }
}
