import React, { useState } from 'react'
import { BsCurrencyRupee } from "react-icons/bs";


import styles from './Card.module.css';
import Model from '../Model/Model';


const Card = ({ label, amount, btnLablel, mybtnClass}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }    
    function closeModal() {
        setIsOpen(false);
    }

  return (
    <div className={styles.card}>
        <div className={styles.label}>{label}<span className={mybtnClass === 'wb' ? styles.wbamount : styles.examount}><BsCurrencyRupee />{amount}</span></div>
        <button onClick={openModal} className={`${styles.btn} ${mybtnClass === 'wb' ? styles.income : styles.expense} `}>{btnLablel}</button>
        <Model modalIsOpen={modalIsOpen} closeModal={closeModal} modalName={mybtnClass === 'wb' ? 'addIncome' : 'addExpense'} />
    </div>
  )
}

export default Card