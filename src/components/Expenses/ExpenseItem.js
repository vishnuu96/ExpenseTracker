// import React from "react";
import Cardd from '../UI/Cardd';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';

const ExpenseItem = (props)=> {
  const clickHandler=()=>{
   console.log('clicked!!!')
  }
  const deleteItem =()=>{
   console.log('expense deleted') 
 }
  

  return (
    <Cardd className='expense-item'>
        <ExpenseDate date={props.date} />
       <ExpenseDetails title={props.title} location={props.location} amount={props.amount} />
       <button onClick={clickHandler}>change Title</button>
       <button onClick={deleteItem}>Delete</button>
    </Cardd>
  );
}
export default ExpenseItem