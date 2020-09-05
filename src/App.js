import React, {useContext} from "react";

// import components
import Header from "./components/header";
import Balance from "./components/balance";
import ExpenseIncome from "./components/expenseIncome";
import ItemList from "./components/itemList";
import Form from "./components/form";

// context
import GlobalContext from './context';

// utilities
import {balanceAmount} from './utilities';
import {expense} from './utilities'
import {income} from './utilities'

import "./App.css";

function App() {
  const {transactionList} = useContext(GlobalContext);
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Balance balance={balanceAmount(transactionList)}/>
        <ExpenseIncome income={income(transactionList)} expense={expense(transactionList)}/>
        <ItemList items={transactionList}/>
        <Form />
      </div>
    </div>
  );
}

export default App;
