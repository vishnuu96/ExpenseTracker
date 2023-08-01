import React,{useState} from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css';
import Cardd from '../UI/Cardd';
import ExpenseFilter from './ExpenseFilter';


const Expenses=(props)=> {

  const [filteredYear, setFilteredYear] = useState('2021');
  const filterChangeHandler=(selectedYear)=>{
      setFilteredYear(selectedYear)
  }
  return (
    <Cardd className='expenses'>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
       {props.items.map((exp)=>{
      return <ExpenseItem id={exp.id}title={exp.title} amount={exp.amount} date={exp.date} location={exp.location} />
    
    })}
    </Cardd>
  )
}
export default Expenses
