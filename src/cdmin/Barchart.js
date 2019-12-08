import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import axios from 'axios'

export default class Barchart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';

  state = {
      taskData:[],
      offNum:0
  }
  

  componentWillMount(){
    axios.get('/crew/gettasknum')
    .then((res)=>{
        this.setState({taskData:res.data})
    })
    .then(res => this.setState({data:[
        {
          name: 'Ticketing',Ticketing:this.state.taskData[0]
        },
        {
          name: 'Cafeteria', Cafeteria:this.state.taskData[1]
        },
        {
          name: 'Maintenance', Maintenance:this.state.taskData[2]
        }
      ]}))
    .catch(err=>console.log(err))
    
}

  render() {
      console.log(this.state)
    return (
      <BarChart
        width={500}
        height={300}
        data={this.state.data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Ticketing" stackId="a" fill="#6570FF" />
        <Bar dataKey="Cafeteria" stackId="a" fill="#72C7D7" />
        <Bar dataKey="Maintenance" stackId="a" fill="#9383E1" />
      </BarChart>
    );
  }  
}
