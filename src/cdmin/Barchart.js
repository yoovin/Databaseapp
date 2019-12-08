import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Ticketing', Ticketing:4
  },
  {
    name: 'Cafeteria', Cafeteria:8
  },
  {
    name: 'Maintenance', Maintenance:6
  },
  {
    name: 'Offline', Offline:2
  }
];

export default class Barchart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';

  render() {
    return (
      <BarChart
        width={500}
        height={300}
        data={data}
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
        <Bar dataKey="Offline" stackId="a" fill="#9F9F9F" />
      </BarChart>
    );
  }  
}
