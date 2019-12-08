import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';

const data = [
  {
    name: '2019.4', Animation: 30122425, Action: 0, Comedy: 0,
  },
  {
    name: '2019.5', Animation: 1130284, Action: 872613, Comedy: 11002823,
  },
  {
    name: '2019.6', Animation: 324245, Action: 0, Comedy: 12425763,
  },
  {
    name: '2019.7', Animation: 1526811, Action: 3410284, Comedy: 170000,
  },
  {
    name: '2019.8', Animation: 2693498, Action: 4006555, Comedy: 0,
  },
  {
    name: '2019.9', Animation: 1242563, Action: 3786732, Comedy: 0,
  },
  {
    name: '2019.10', Animation: 8529100, Action: 0, Comedy: 9249231,
  },
  {
    name: '2019.11', Animation: 0, Action: 0, Comedy: 0,
  },
  {
    name: '2019.12', Animation: 519231, Action: 6024241, Comedy: 0,
  }
];

export default class Genrechart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/g03265a4/';

  render() {
    return (
      <LineChart width={800} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Animation" stroke="#8884d8"/>
        <Line type="monotone" dataKey="Action" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Comedy" stroke="#ff5f5f" />
      </LineChart>
    );
  }
}
