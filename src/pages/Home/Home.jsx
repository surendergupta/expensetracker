import React, { useEffect, useState } from 'react'
import { saveToLocalStorage, getFromLocalStorage } from '../../utils/localStorage';
import { SnackbarProvider } from 'notistack';

import styles from './Home.module.css';
import Section from '../../components/Section/Section';
import ExpenseList from '../../components/ExpenseList/ExpenseList';
import ExpenseTrends from '../../components/ExpenseTrends/ExpenseTrends';
const Home = () => {
  const [balance, setBalance] = useState(getFromLocalStorage('balance') || 5000);
  const [expenses, setExpenses] = useState(getFromLocalStorage('expenses') || []);  

  useEffect(() => {
    saveToLocalStorage('balance', balance);
    saveToLocalStorage('expenses', expenses);
  }, [balance, expenses]);
  return (
    <SnackbarProvider maxSnack={3}>
      <div className={styles.main}>
        <Section title={'Expense Tracker'} expenses={expenses} balance={balance} setBalance={setBalance} setExpenses={setExpenses} />
        <section className={styles.section}>
          <ExpenseList expenses={expenses} setExpenses={setExpenses} balance={balance} setBalance={setBalance}  />
          <ExpenseTrends expenses={expenses} />
        </section>
      </div>
    </SnackbarProvider>
  )
}

export default Home