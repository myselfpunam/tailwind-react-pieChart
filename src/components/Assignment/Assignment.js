import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Assignment = () => {
  const data = [
    {
      "name": "Punam",
      "article": 4000,
      "spelling": 2400
    },
    {
      "name": "Priam",
      "article": 3000,
      "spelling": 1398
    },
    {
      "name": "Pritom",
      "article": 2000,
      "spelling": 9800
    },
    {
      "name": "Mitul",
      "article": 2780,
      "spelling": 3908
    },
    {
      "name": "Ratul",
      "article": 1890,
      "spelling": 4800
    },
    {
      "name": "Barna",
      "article": 2390,
      "spelling": 3800
    },
    {
      "name": "Monisha",
      "article": 3490,
      "spelling": 4300
    }
  ]
  
  return (
    <div className='mt-10'>
      
      <BarChart width={1700} height={700} data={data} margin={{   top: 5,   right: 30,   left: 20,   bottom: 5,}} >
      <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="spelling" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        <Bar dataKey="article" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
      </BarChart>
      
    </div>
  );
};

export default Assignment;