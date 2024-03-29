import React,{useState} from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css';
import Cardd from '../UI/Cardd';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';


const Expenses=(props)=> {

  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler=(selectedYear)=>{
      setFilteredYear(selectedYear)
  }
  
  const filteredItems=props.items.filter((expense)=>{
    return expense.date.getFullYear().toString()===filteredYear
  })

  let expensesContent = <p className='content'>No expenses found</p>

  if(filteredItems.length === 1){
    expensesContent =  filteredItems.map((exp)=>{
      return <><ExpenseItem key={exp.id}title={exp.title} amount={exp.amount} date={exp.date} location={exp.location} />
      <p className='content'>Only single Expense here Please add more</p>
      </> 
     })
  }
  else if(filteredItems.length > 1) {
    expensesContent =  filteredItems.map((exp)=>{
      return <ExpenseItem key={exp.id}title={exp.title} amount={exp.amount} date={exp.date} location={exp.location} />
     })
  }

  
  return (
    <Cardd className='expenses'>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {/* {filteredItems.length===0 && <p>No expenses   found</p> }
      { filteredItems.length > 0 &&
        filteredItems.map((exp)=>{
          return <ExpenseItem key={exp.id}title={exp.title} amount={exp.amount} date={exp.date} location={exp.location} />
         })
      } */}
       
       <ExpensesChart expenses={filteredItems} />
      {expensesContent}
      
    </Cardd>
  )
}
export default Expenses
