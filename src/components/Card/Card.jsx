import React, { useState } from 'react'
import { BsCurrencyRupee } from "react-icons/bs";


import styles from './Card.module.css';
import Model from '../Model/Model';


const Card = ({ label, expenses, balance, setBalance, setExpenses, btnLablel, mybtnClass}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }    
    function closeModal() {
        setIsOpen(false);
    }
    const totalExpenses = expenses.reduce((acc, curr) => acc + curr.price, 0);
  return (
    <div className={styles.card}>
        <div className={styles.label}>
          {label}
          <span className={mybtnClass === 'wb' ? styles.wbamount : styles.examount}>
            <BsCurrencyRupee />
            {mybtnClass === 'wb' ? balance : totalExpenses}
          </span>
        </div>
        <button 
          onClick={openModal} 
          className={`${styles.btn} ${mybtnClass === 'wb' ? styles.income : styles.expense} `}>{btnLablel}</button>
        <Model 
          modalIsOpen={modalIsOpen} 
          closeModal={closeModal}
          expenses={expenses} 
          balance={balance}
          setBalance={setBalance}
          setExpenses={setExpenses}
          modalName={mybtnClass === 'wb' ? 'addIncome' : 'addExpense'} 
        />
    </div>
  )
}

export default Card