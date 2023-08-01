import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const savingExpenseHandler=(newExpense)=>{
  const expenseData={
    ...newExpense,
    id:Math.random().toString()
  }
  props.onaddingExpense(expenseData)
  }
  
  return (
    <div className='new-expense'>
      <ExpenseForm onsavingExpense={savingExpenseHandler}/>
    </div>
  )
  }

export default NewExpense
