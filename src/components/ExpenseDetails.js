import React from 'react'
// import './ExpenseItem.css';

export default function ExpenseDetails(props) {
  return (
    <>
     <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <h2>{props.location}</h2>
        <div className='expense-item__price'>Rs {props.amount}</div>
     </div>
    </>
  )
}
