


import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () =>{
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location:'Bengaluru',
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12),location:'chennai', },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location:'hyderabd',
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      location:'vijayawada',
    },
  ];
  const [expenseArray, setExpenseArray] = useState(expenses)
  const addingExpenseHandler=(expenseData)=>{
    setExpenseArray((prevArray)=>[...prevArray,expenseData])
    // console.log(expenseData)
    // console.log('in app.js')
    
  }
  return (
    <div>
      <NewExpense onaddingExpense={addingExpenseHandler}/>
       <Expenses items={expenseArray}/>
       
    </div>
  );
}

export default App;
