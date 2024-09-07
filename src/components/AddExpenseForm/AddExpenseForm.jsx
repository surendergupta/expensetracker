import React, { useState } from 'react'
import { saveToLocalStorage } from '../../utils/localStorage';
import { useSnackbar } from 'notistack';


import styles from './addexpenseform.module.css';



const AddExpenseForm = ({closeModal, expenses, setExpenses, balance, setBalance}) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');

    const { enqueueSnackbar } = useSnackbar();

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if(!title || !price || !category || !date) {
            enqueueSnackbar('Please fill all the fields', {variant: 'error'});
            return;
        }        

        if(price > balance)
        {
            enqueueSnackbar('Insufficient balance', {variant: 'error'});
            return;            
        }

        const newExpense = {
            id: new Date().getTime().toString(),
            title,
            price: parseFloat(price),
            category,
            date
        }
        
        try
        {
            const updateExpenses = [...expenses, newExpense];
            setExpenses(updateExpenses);
            saveToLocalStorage('expenses', updateExpenses);
            
            const newBalance = balance - parseFloat(price);
            setBalance(newBalance);
            saveToLocalStorage('balance', newBalance);

            enqueueSnackbar('Added expense successfully', {variant: 'success'});
            
            closeModal();
            setTitle('');
            setPrice('');
            setCategory('');
            setDate('');
        }    
        catch(error)
        {
            console.log(error);
            enqueueSnackbar('Opps! Failed to add expense successfully', {variant: 'error'});
        }
        
    }
  return (
    <>
        <h2>Add Expenses</h2>
        <form className={styles.form} onSubmit={handleSubmitForm}>
            <input 
                type='text' 
                placeholder='Title' 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input 
                type='number' 
                placeholder='Price' 
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value=''>Select Category</option>
                <option value='Food'>Food</option>
                <option value='Travel'>Travel</option>
                <option value='Entertainment'>Entertainment</option>
            </select>
            <input 
                type='date' 
                placeholder='dd/mm/yyyy' 
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <button type='submit'>Add Expense</button>
            <button type='button' onClick={closeModal}>Cancel</button>
        </form>
    </>
  )
}

export default AddExpenseForm