import React, { useState } from 'react'
import { MdOutlineCancel } from "react-icons/md";
import { CiRollingSuitcase } from "react-icons/ci";
import { PiPizzaLight } from "react-icons/pi";
import { PiGift } from "react-icons/pi";
import { PiCurrencyInr } from "react-icons/pi";
import { BsPencil } from "react-icons/bs";
import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";

import EditExpenseFrom from '../EditExpenseForm/EditExpenseForm';
import DeleteExpenseModel from '../DeleteExpenseModel/DeleteExpenseModel';

import Modal from 'react-modal';
import styles from './ExpenseList.module.css'


Modal.setAppElement('#root');

const ExpenseList = ({ expenses, setExpenses, balance, setBalance }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [deleteModalIsOpen, setDeleteModelIsOpen] = useState(false);
    const [selectedExpense, setSelectedExpense] = useState(null);
    const [selectedExpenseDelete, setSelectedExpenseDelete] = useState(null);

    
    const openModal = (expense) => {
        setSelectedExpense(expense);
        setIsOpen(true);
    };
    
    const closeModal = () => {
        setSelectedExpense(null);
        setIsOpen(false);
    };

    const openDeleteModal = (expense) => {
        setSelectedExpenseDelete(expense);
        setDeleteModelIsOpen(true);
    };
    
    const closeDeleteModal = () => {
        setSelectedExpenseDelete(null);
        setDeleteModelIsOpen(false);
    };
    console.log(expenses);
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const option = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };

        return date.toLocaleDateString('en-US', option);
    }
  return (
    <div className={styles.expenseList}>
     <h1>Recent Transactions</h1>
     <div className={styles.card}>
        <ul className={ styles.listBoxWrapper}>
            {expenses.length > 0 && expenses.map((expense) => (
                <li className={styles.listBox} key={expense.id}>
                    <div className={styles.expenseIcon}>
                        { expense.category === 'Food' && <PiPizzaLight />}
                        { expense.category === 'Travel' && <CiRollingSuitcase />}
                        { expense.category === 'Entertainment' && <PiGift />}
                    </div>
                    <div className={styles.itemDetails}>
                        <div className={styles.itemContent}>
                            <span className={styles.itemName}>{expense.title}</span>
                            <span className={styles.itemDate}>{formatDate(expense.date)}</span>
                        </div>
                        <div className={styles.itemPrice}><PiCurrencyInr /> {expense.price}</div>
                    </div>
                    <div className={styles.itemAction}>
                        <button onClick={() => openDeleteModal(expense)}>
                            <MdOutlineCancel />
                        </button>
                        <button onClick={() => openModal(expense)} >
                            <BsPencil />
                        </button>                        
                    </div>
                </li>
            ))}                        
        </ul>
        <div className={styles.paginationWrapper}>
            <div className={styles.paginationLeft}><BiLeftArrowAlt /></div>
            <div className={styles.paginationCenter}>1</div>
            <div className={styles.paginationRight}><BiRightArrowAlt /></div>
        </div>
        {selectedExpense && (
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className={styles.modalContent}
                contentLabel={`Update Modal ${selectedExpense.id}`}
                ariaHideApp={false}
            >
                <EditExpenseFrom 
                    closeModal={closeModal} 
                    expenseID={selectedExpense.id} 
                    expenses={expenses} 
                    setExpenses={setExpenses} 
                    balance={balance} 
                    setBalance={setBalance}
                />
            </Modal>
        )}

        { 
            selectedExpenseDelete && (
                <Modal
                isOpen={deleteModalIsOpen}
                onRequestClose={closeModal}
                className={styles.modalContent}
                contentLabel={`Delete Modal ${selectedExpenseDelete.id}`}
                ariaHideApp={false}
            >
                <DeleteExpenseModel 
                    closeModal={closeDeleteModal} 
                    expenseID={selectedExpenseDelete.id} 
                    expenses={expenses} 
                    setExpenses={setExpenses} 
                    balance={balance} 
                    setBalance={setBalance}
                />
            </Modal>
            )
        }
     </div>
    </div>
  )
}

export default ExpenseList