import React from 'react';
import { BarChart, Bar, YAxis, ResponsiveContainer } from 'recharts';

import styles from './ExpenseTrends.module.css';
const ExpenseTrends = ({ expenses }) => {
    const data = expenses.reduce((acc, curr) => {
        const { category, price } = curr;
        if (acc[category]) {
            acc[category] += price;
        } else {
            acc[category] = price;
        }
        return acc
    }, {});

    const dataArr = Object.entries(data).map(([key, value]) => ({ name: key, amount: value }));
    const sortedData = dataArr.sort((a, b) => b.amount - a.amount);
    const topExpenses = sortedData.slice(0, 5);
  return (
    <div className={styles.expenseTrends}>
        <h1>Top Expenses</h1>
        <div className={styles.card}>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={topExpenses} layout='vertical'>
                    <YAxis 
                        type="category" 
                        dataKey="name" 
                        stroke='#000' 
                        tickLine={false} 
                        tick={{
                            fontSize: '12px', 
                            fontWeight: 400, 
                            fontFamily: 'Open Sans', 
                            lineHeight: '16px'
                        }} 
                        tickMargin={1}
                        axisLine={false}
                    />
                    <Bar dataKey="amount" barSize={25} fill="#8784D2" radius={[0, 15, 15, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default ExpenseTrends