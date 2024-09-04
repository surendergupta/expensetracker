import React from 'react'

import styles from './Home.module.css';
import Section from '../../components/Section/Section';
const Home = () => {
  return (
    <div className={styles.main}>
      <Section title={'Expense Tracker'} />
    </div>
  )
}

export default Home