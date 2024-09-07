import React from 'react'

import styles from './Section.module.css';
import Card from '../Card/Card';
import ExpenseSummary from '../ExpenseSummary/ExpenseSummary';
const Section = ({title, expenses, balance, setBalance, setExpenses}) => {
  return (
    <>
    <h1>{title}</h1>
    <section className={styles.section}>
        <div className={styles.cardContainer}>
            <Card 
              label="Wallet Balance:" 
              expenses={expenses}
              balance={balance}
              setBalance={setBalance}
              setExpenses={setExpenses}
              btnLablel='+ Add Income' 
              mybtnClass="wb" 
            />
            <Card 
              label="Expenses:" 
              expenses={expenses}
              balance={balance}
              setBalance={setBalance}
              setExpenses={setExpenses}
              btnLablel='+ Add Expense' 
              mybtnClass="ex" 
            />
        </div>
        <div className={styles.chartContainer}>
          <ExpenseSummary expenses={expenses} />
        </div>
    </section>
    </>
  )
}

export default Section