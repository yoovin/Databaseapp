import React, { Component } from 'react'

// png
const loginw = require('../img/loginw.png')
const loginButton = require('../img/loginbutton.png')

export default class Main extends Component {

    state = {
        id:'',
        password:''
    }

    handleIdChange = (e) =>{
        this.setState({id:e.target.value})
    }

    handlePwChange = (e) =>{
        this.setState({password:e.target.value})
    }

    render() {
        return (
            <div id="center">
                <h3 id="title">CINEMA</h3>
                <div id="loginw" class="dong"><img src={loginw} alt="background"/>
                    <div id="idpw" class="dong">
                        <div><input onChange={this.handleIdChange} value={this.state.id} type="text" name="id" id="idw" placeholder="ID"/></div>
                        <div><input onChange={this.handlePwChange} value={this.state.password} type="password" name="pw" id="pdw" placeholder="PassWord"/></div>
                    </div>
                    <div id="lbw">
                        <button id="lb" type="button" value="login" onClick={()=>this.props.history.push('/crew')}>
                        <img src={loginButton}/></button>
                    </div>
                    <div id="checkb">
                        <input type="checkbox" name="chk_info" value="Remember"/>
                    </div>
                    <div id="su"><span className="orange" onClick={()=>this.props.history.push("/sign")}> Sign Up </span></div>
                    <div id="fp"><span className="orange" onClick={()=>this.props.history.push("/find")}> Forgot Your Password? </span></div>
                </div>
            </div>
        )
    }
}
