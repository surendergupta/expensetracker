import React, { useState } from 'react'
import { useSnackbar } from 'notistack';
import { saveToLocalStorage } from '../../utils/localStorage';

import styles from './EditExpenseFrom.module.css';
const EditExpenseForm = ({closeModal, expenseID, expenses, setExpenses, balance, setBalance}) => {
    const expense = expenses.find((expense) => expense.id === expenseID);
    
    const { title: oldTitle, price: oldPrice, category: oldCategory, date: oldDate } = expense;

    const [title, setTitle] = useState(oldTitle);
    const [price, setPrice] = useState(oldPrice);
    const [category, setCategory] = useState(oldCategory);
    const [date, setDate] = useState(oldDate);

    const { enqueueSnackbar } = useSnackbar();

    const handleUpdateExpenseFrom = (e) => {
        e.preventDefault();

        if(!title || !price || !category || !date) {
            enqueueSnackbar('Please fill all the fields', {variant: 'error'});
            return;
        }
        const parsedPrice = parseFloat(price);

        if(parsedPrice > (balance + oldPrice)) {
            enqueueSnackbar('Insufficient balance', {variant: 'error'});
            return;
        }

        const newExpense = {
            id: expenseID,
            title,
            price: parsedPrice,
            category,
            date
        }
        try {
            const updateExpenses = expenses.map((expense) => 
                expense.id === expenseID ? newExpense : expense
            );

            setExpenses(updateExpenses);
            saveToLocalStorage('expenses', updateExpenses);

            const updateBalance = ((balance + oldPrice) - parsedPrice);
            setBalance(updateBalance);
            saveToLocalStorage('balance', updateBalance);

            enqueueSnackbar('Expense updated successfully', {variant: 'success'});
            closeModal();

        } catch(error) {
            console.log(error);
            enqueueSnackbar('Opps! Failed to update expense successfully', {variant: 'error'});
        }
    }
  return (
    <>
        <h2>Edit Expenses</h2>
        <form className={styles.form} onSubmit={handleUpdateExpenseFrom}>
            <input 
                type='text' 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Title' 
            />
            <input 
                type='number' 
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder='Price' 
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value=''>Select Category</option>
                <option value='Food'>Food</option>
                <option value='Travel'>Travel</option>
                <option value='Entertainment'>Entertainment</option>
            </select>
            <input 
                type='date' 
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder='dd/mm/yyyy' 
            />
            <button type='submit'>Update Expense</button>
            <button type='button' onClick={closeModal}>Cancel</button>
        </form>
    </>
  )
}

export default EditExpenseForm