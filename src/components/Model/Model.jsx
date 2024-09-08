import React from 'react'
import Modal from 'react-modal';
import AddExpenseForm from '../AddExpenseForm/AddExpenseForm';
import AddIncomeForm from '../AddIncomeForm/AddIncomeForm';
import styles from './Model.module.css';
Modal.setAppElement('#root');


const Model = ({modalIsOpen, closeModal, expenses, balance, setBalance, setExpenses, modalName = 'addExpense'}) => {
    
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className={styles.modalContent}
        contentLabel="Example Modal"
      >
      {modalName === 'addExpense' ? (
        <>
          <AddExpenseForm closeModal={closeModal} expenses={expenses} setExpenses={setExpenses} balance={balance} setBalance={setBalance} />                
        </>
      ) : (
        <>
          <AddIncomeForm closeModal={closeModal} balance={balance} setBalance={setBalance} />
        </>
      )}        
      </Modal>
    </>    
  )
}

export default Model