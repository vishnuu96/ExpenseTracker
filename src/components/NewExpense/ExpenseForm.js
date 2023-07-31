import React from 'react'
import './ExpenseForm.css'
const ExpenseForm = () => {
  return (
    <div>
      <form>
        <div className='expense-new__controls'>
          <div className='expense-new__control'>
            <label htmlFor="title">Expense title</label>
            <input type="text" id="title" />
          </div>
          <div className='expense-new__control'>
            <label htmlFor="amount">Expense amount</label>
            <input type="number" id="amount" />
          </div>
          <div className='expense-new__control'>
            <label htmlFor="date">date</label>
            <input type="date" id="date" />
          </div>
         
        </div>
        <div className='expense-new__actions'>
            <button type="submit">Add</button>
          </div>
      </form>
    </div>
  )
}

export default ExpenseForm
