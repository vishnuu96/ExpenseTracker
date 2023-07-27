// import React from "react";
import './ExpenseItem.css';

export default function ExpenseItem(props) {
//  const expenseDate=new Date(2023, 2, 27);
//  const expenseTitle='car Insurance';
//  const exportAmount=3000;
//  const locationOfExpenditure="mumbai"

  return (
    <div className='expense-item'>
     <div>{props.date.toISOString()}</div>
     <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <h2>{props.location}</h2>
        <div className='expense-item__price'>Rs {props.amount}</div>
     </div>
    </div>
  );
}