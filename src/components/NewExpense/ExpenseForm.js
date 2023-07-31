import React,{useState} from 'react'
import './ExpenseForm.css'
const ExpenseForm = () => {
 
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  // all states in one state
  // const [userInput, setUserInput] = useState({
  //   enteredTitle:'',
  //   enteredAmount:'',
  //   enteredDate:'',
  // });

  const titleEventHandler=(event)=>{
    setEnteredTitle(event.target.value)

    // setUserInput({
    //   ...userInput,
    //   enteredTitle:event.target.value,
    // })
    // better approach would be
    // setUserInput((prevState)=>{
    // return  {...prevState,
    //   enteredTitle:event.target.value,
    // }

    // })
  }
  const amountEventHandler=(event)=>{
    setEnteredAmount(event.target.value)

    // setUserInput({
    //   ...userInput,
    //  enteredAmount:event.target.value,
    // })
    // setUserInput((prevState)=>{
    //   return  {...prevState,
    //     enteredAmount:event.target.value,
    //   }
  
    //   })
  }
  const dateEventHandler=(event)=>{
    setEnteredDate(event.target.value)

    // setUserInput({
    //   ...userInput,
    //   enteredDate:event.target.value,
    // })
    // setUserInput((prevState)=>{
    //   return  {...prevState,
    //     enteredDate:event.target.value,
    //   }
  
    //   })
  }

  const addExpense=(e)=>{
    e.preventDefault()
   const newExpense={
    title:enteredTitle,
    amount:enteredAmount,
    date:enteredDate
   }
   console.log(newExpense)
  }

  return (
    <div>
      <form action={addExpense}>
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
            <button type="submit" >Add</button>
          </div>
      </form>
    </div>
  )
}

export default ExpenseForm
