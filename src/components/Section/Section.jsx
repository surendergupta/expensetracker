import React from 'react'

import styles from './Section.module.css';
import Card from '../Card/Card';
const Section = ({title}) => {
  return (
    <>
    <h1>{title}</h1>
    <section className={styles.section}>
        <div className={styles.cardContainer}>
            <Card label="Wallet Balance:" amount="4500" btnLablel='+ Add Income' mybtnClass="wb" />
            <Card label="Expenses:" amount="500" btnLablel='+ Add Expense' mybtnClass="ex" />
        </div>
        <div className={styles.chartContainer}>

        </div>
    </section>
    </>
  )
}

export default Section