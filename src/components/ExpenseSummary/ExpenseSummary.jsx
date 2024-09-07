import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

import './styles.css';

const ExpenseSummary = ({ expenses }) => {
    const categories = [...new Set(expenses.map((item) => item.category))];

    const data = categories.map((category) => ({
        name: category,
        value: expenses
            .filter((item) => item.category === category)
            .reduce((acc, curr) => acc + curr.price, 0),
    }));
    
    const COLORS =['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'middle' : 'middle'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };    

  return (
    <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400} >
            <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                fill="#8884d8"
                outerRadius={80}
                label={renderCustomizedLabel}                
                labelLine={false}                
            >
                { data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Legend 
                layout="horizontal" 
                align="center" 
                verticalAlign="bottom" 
                wrapperStyle={{ color: '#FFFFFF' }} 
            />            
        </PieChart>
    </ResponsiveContainer>
  )
}

export default ExpenseSummary