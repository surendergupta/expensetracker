import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import { saveToLocalStorage } from '../../utils/localStorage';

import styles from './AddIncomeForm.module.css'

const AddIncomeForm = ({ closeModal, balance, setBalance}) => {
    const [income, setIncome] = useState(0);

    const { enqueueSnackbar } = useSnackbar();

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if(!income) {
            enqueueSnackbar('Please fill Add Income the fields', {variant: 'error'});
            return;
        }
        const newBalance = balance + parseFloat(income);
        setBalance(newBalance);
        saveToLocalStorage('balance', newBalance);
        setIncome(0);
        enqueueSnackbar('New Income Amount Added Successfully', {variant: 'success'});
        closeModal(); 
    }
  return (
    <>
        <h2>Add Balance</h2>
        <form onSubmit={handleSubmitForm} className={styles.form}>
            <input 
                type='number' 
                placeholder='Add Income Amount' 
                value={income} 
                onChange={(e) => setIncome(e.target.value)}                
            />
            <button type='submit'>Add Balance</button>
            <button type='button' onClick={closeModal}>Cancel</button>
        </form>
    </>
  )
}

export default AddIncomeForm