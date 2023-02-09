import React, { useState } from 'react';

//import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.data.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  // way 3 of conditional content

  // let expensesContent = <p>No Expense found.</p>;

  // if(filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((expense) => 
  //       <ExpenseItem 
  //         key={expense.id}
  //         title={expense.title} 
  //         amount={expense.amount} 
  //         date={expense.date} 
  //       />)
  // }

  //

  return (
    <li>
      <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

        <ExpensesChart expenses={filteredExpenses}/>

        <ExpensesList items={filteredExpenses}/>

        {/* conditional content */}
        {/* way 3 */}
        {/* {expensesContent} */}


        {/* Way 2 */}
        {/* {filteredExpenses.length === 0 && <p>No Expense found.</p>}
        {filteredExpenses.length > 0 && (filteredExpenses.map((expense) => 
        <ExpenseItem 
          key={expense.id}
          title={expense.title} 
          amount={expense.amount} 
          date={expense.date} 
        />))} */}
        
        {/* Way 1  */}

        {/* {filteredExpenses.length === 0 ? <p>No Expense found.</p> : (filteredExpenses.map((expense) => 
        <ExpenseItem 
          key={expense.id}
          title={expense.title} 
          amount={expense.amount} 
          date={expense.date} 
        />))} */}


        {/* <ExpenseItem
          title={props.data[0].title}
          amount={props.data[0].amount}
          date={props.data[0].date}
        />
        <ExpenseItem
          title={props.data[1].title}
          amount={props.data[1].amount}
          date={props.data[1].date}
        />
        <ExpenseItem
          title={props.data[2].title}
          amount={props.data[2].amount}
          date={props.data[2].date}
        />
        <ExpenseItem
          title={props.data[3].title}
          amount={props.data[3].amount}
          date={props.data[3].date}
        /> */}
      </Card>
    </div>
    </li>
    
  );
};

export default Expenses;