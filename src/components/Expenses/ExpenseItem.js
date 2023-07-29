import React, {useState }from "react";
import Cardd from '../UI/Cardd';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';

const ExpenseItem = (props)=> {

  const [title, setTitle] = useState(props.title)

  const [expense, setExpense] = useState(props.amount)

  const clickHandler=()=>{
    setTitle('updated')
   console.log(title)
  }
  const deleteItem =()=>{
   console.log('expense deleted') 
 }
  const updateExpense =()=>{
   setExpense(`100`)
 }
  

  return (
    <Cardd className='expense-item'>
        <ExpenseDate date={props.date} />
       <ExpenseDetails title={title} location={props.location} amount={expense} />
       <button onClick={clickHandler}>change Title</button>
       <button onClick={deleteItem}>Delete</button>
       <button onClick={updateExpense}>update</button>
    </Cardd>
  );
}
export default ExpenseItem