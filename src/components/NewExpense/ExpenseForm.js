import React,{useState} from 'react'
import './ExpenseForm.css'
const ExpenseForm = () => {
 
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')
  const titleEventHandler=(event)=>{
    setEnteredTitle(event.target.value)
  }
  const amountEventHandler=(event)=>{
    setEnteredAmount(event.target.value)
  }
  const dateEventHandler=(event)=>{
    setEnteredDate(event.target.value)
  }
  return (
    <div>
      <form>
        <div className='expense-new__controls'>
          <div className='expense-new__control'>
            <label htmlFor="title">Expense title</label>
            <input type="text" id="title" value={enteredTitle} onChange={titleEventHandler}/>
          </div>
          <div className='expense-new__control'>
            <label htmlFor="amount">Expense amount</label>
            <input type="number" id="amount" value={enteredAmount} onChange={amountEventHandler}/>
          </div>
          <div className='expense-new__control'>
            <label htmlFor="date">date</label>
            <input type="date" id="date" value={enteredDate} onChange={dateEventHandler} />
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
