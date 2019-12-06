import React, { Component } from 'react'

const homeButton = require('../img/homebutton.png');
const cinema = require('../img/Cinema.png')
const ps = require('../img/ps.jpg');
const salary = require('../img/salary.png');
const task = require('../img/task.png');
const calen = require('../img/calen.png');
const commu = require('../img/commu.png');
const bg = require('../img/BG.png')

export default class Crew extends Component {
    render() {
        return (
            <div className="in">
                <div id="bg"><img alt="background" src={bg}/>
                    <div><button id="hb"><img alt="menu" src={homeButton}/></button></div>
                    <div id="cl"><img alt="menu" src={cinema}/></div>
                    <div><button id="ps"><img alt="menu" src={ps} id="pss"/></button></div>
                    <div><button id="sb"><img alt="menu" src={salary}/></button></div>
                    <div><button id="tb"><img alt="menu" src={task}/></button></div>
                    <div><button id="cb"><img alt="menu" src={calen}/></button></div>
                    <div><button id="cob"><img alt="menu" src={commu}/></button></div>
                </div>
            </div>
        )
    }
}
