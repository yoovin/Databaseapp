import React, { Component } from 'react'
import Reactcalendar from 'react-calendar';

export default class Calendar extends Component {
    state = {
        date:new Date()
    }

    onChange = date => this.setState({ date })

    render() {
        return (
            <div className="out">
                <div className="in">
                    <Reactcalendar
                    onChange={this.onChange}
                    value={this.state.date}
                    />
                    <br/>
                    {this.state.date.toString()}
                </div>
            </div>
        )
    }
}
