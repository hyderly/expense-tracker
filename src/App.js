import React, {useContext} from "react";

// import components
import Header from "./components/header";
import Balance from "./components/balance";
import ExpenseIncome from "./components/expenseIncome";
import ItemList from "./components/itemList";
import Form from "./components/form";

// providers

import {BudgetContext} from './providers/budegt.provider';

import "./App.css";

function App() {
  const {balance, income, expense, transactions} = useContext(BudgetContext)
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Balance balance={balance}/>
        <ExpenseIncome income={income.toFixed(2)} expense={expense.toFixed(2)}/>
        <ItemList items={transactions}/>
        <Form />
      </div>
    </div>
  );
}

export default App;
