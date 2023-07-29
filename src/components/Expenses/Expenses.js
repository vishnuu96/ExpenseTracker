import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css';
import Cardd from '../UI/Cardd';


export default function Expenses(props) {
  return (
    <Cardd className='expenses'>
       {props.items.map((exp)=>{
      return <ExpenseItem title={exp.title} amount={exp.amount} date={exp.date} location={exp.location} />
    
    })}
    </Cardd>
  )
}