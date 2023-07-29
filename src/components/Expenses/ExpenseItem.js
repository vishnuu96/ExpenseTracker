// import React from "react";
import Cardd from '../UI/Cardd';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';

export default function ExpenseItem(props) {

  return (
    <Cardd className='expense-item'>
        <ExpenseDate date={props.date} />
       <ExpenseDetails title={props.title} location={props.location} amount={props.amount} />
    </Cardd>
  );
}