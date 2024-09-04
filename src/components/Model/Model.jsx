import React from 'react'
import Modal from 'react-modal';
import styles from './Model.module.css';

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




const Model = ({modalIsOpen,  closeModal, modalName = 'addExpense'}) => {
    
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
                <h2>Add Expenses</h2>
                <form className={styles.form}>
                    <input type='text' placeholder='Title' />
                    <input type='number' placeholder='Price' />
                    <select>
                        <option value='Food'>Food</option>
                        <option value='Travel'>Travel</option>
                        <option value='Entertainment'>Entertainment</option>
                    </select>
                    <input type='date' placeholder='dd/mm/yyyy' />
                    <button type='submit'>Add Expense</button>
                    <button type='button' onClick={closeModal}>Cancel</button>
                </form>
            </>
        ) : (modalName === 'editExpense' ? (
            <>
                <h2>Edit Expenses</h2>
                <form className={styles.form}>
                    <input type='text' placeholder='Title' />
                    <input type='number' placeholder='Price' />
                    <select>
                        <option value='Food'>Food</option>
                        <option value='Travel'>Travel</option>
                        <option value='Entertainment'>Entertainment</option>
                    </select>
                    <input type='date' placeholder='dd/mm/yyyy' />
                    <button type='submit'>Add Expense</button>
                    <button type='button' onClick={closeModal}>Cancel</button>
                </form>
            </>
            ) : (
            <>
                <h2>Add Balance</h2>
                <form className={styles.form}>
                    <input type='number' placeholder='Income Amount' style={{ width: '193px' }} />
                    <button type='submit' style={{ width: '145px' }}>Add Balance</button>
                    <button type='button' onClick={closeModal}>Cancel</button>
                </form>
            </>
            )
        )}

        
      </Modal>
    </>
    
  )
}

export default Model