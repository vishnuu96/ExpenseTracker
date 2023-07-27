// import React from "react";
import './ExpenseItem.css';

export default function ExpenseItem() {
 const expenseDate=new Date(2023, 2, 27);
 const expenseTitle='car Insurance';
 const exportAmount=3000;
 const locationOfExpenditure="mumbai"

  return (
    <div className='expense-item'>
     <div>{expenseDate.toISOString()}</div>
     <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <h2>{locationOfExpenditure}</h2>
        <div className='expense-item__price'>Rs {exportAmount}</div>
     </div>
    </div>
  );
}