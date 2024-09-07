import React from 'react'
import Modal from 'react-modal';
import AddExpenseForm from '../AddExpenseForm/AddExpenseForm';
import AddIncomeForm from '../AddIncomeForm/AddIncomeForm';


const customStyles = {
    content: {
      width: '538px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      background: '#EFEFEFD9',
      borderRadius: '15px',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  Modal.setAppElement('#root');




const Model = ({modalIsOpen, closeModal, expenses, balance, setBalance, setExpenses, modalName = 'addExpense'}) => {
    
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
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