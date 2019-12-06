import React, { Component } from 'react'

const sbg = require('../img/sbg.png')
const homeButton = require('../img/homebutton.png')
const ps = require('../img/ps.jpg')
const cinema = require('../img/Cinema.png')
const saveButton = require('../img/SAVEBUTTON.png')

export default class Sarary extends Component {
    render() {
        return (
            <div id="bg"><img src={sbg}/>
                <div><button id="hb" onclick="location.href = 'crew.html'"><img src={homeButton}/></button></div>
                <div id="cl"><img src={cinema}/></div>
                <div><button id="ps" onclick="location.href = 'info.html'"><img src={ps} id="pss"/></button></div>
                <div id="un"><select id="unb">
                    <option>WON</option>
                    <option>SDKB</option>
                    <option>UBD</option>
                </select></div>
                <div id="ba">
                    <select id="bs">
                        <option>우리</option>
                        <option>국민</option>
                        <option>신한</option>
                        <option>카카오</option>
                    </select>
                </div>
                <div><input type="text" name="bat" id="bt"/></div>
                <div><button id="svb"><img src={saveButton}/></button></div>
                <div><label id="hl">528</label></div>
                <div><label id="ml">37</label></div>
                <div><label id="sl">16.80</label></div>
                <div><label id="mol">691.26</label></div>
            </div>
        )
    }
}
