import React from 'react'
import { useSnackbar } from 'notistack';
import { saveToLocalStorage } from '../../utils/localStorage';

import styles from './DeleteExpenseModel.module.css'
const DeleteExpenseModel = ({closeModal, expenseID, expenses, setExpenses, balance, setBalance}) => {
    const { enqueueSnackbar } = useSnackbar();
    const expense = expenses.find((expense) => expense.id === expenseID);
    if (!expense) {
        return (
            <div>
                <h2>Error</h2>
                <p>Expense not found.</p>
                <button onClick={closeModal}>Close</button>
            </div>
        );
    }
    const { title, price } = expense;
    const parsedPrice = parseFloat(price);
    
    const handleSubmitForm = (e) => {
        e.preventDefault();
        
        const newExpenses = expenses.filter((expense) => expense.id !== expenseID);
        
        if(parsedPrice > balance) {
            enqueueSnackbar('Insufficient balance', {variant: 'error'});
            return;
        }

        try {
            
            setExpenses(newExpenses);
            saveToLocalStorage('expenses', newExpenses);

            const updateBalance = (balance + parsedPrice);
            setBalance(updateBalance);
            saveToLocalStorage('balance', updateBalance);

            enqueueSnackbar('Expense Deleted successfully', {variant: 'success'});
            closeModal();

        } catch(error) {
            console.log(error);
            enqueueSnackbar('Opps! Failed to delete expense', {variant: 'error'});
        }
    }
    return (
    <>
        <h2>Are you sure you want to delete this expense?</h2>
        <p>{ `${title}, ${price}` }</p>
        <form className={styles.form} onSubmit={handleSubmitForm}>
            <button type='submit'>Delete</button>
            <button type='button' onClick={closeModal}>Cancel</button>
        </form>
    </>
  )
}

export default DeleteExpenseModel