import React, {useState, useEffect, createContext} from 'react';

import {addItems, removeItems, getBalance, getIncome, getExpense} from './utilities';


export const BudgetContext = createContext({
    transactions : [],

    addItem : () => {},
    removeItem : () => {},
    changeText: () => {},
    changeAmount : () => {},

    balance : 0,
    income: 0,
    expense: 0,
    text: '',
    amount: 0
})

const BudegetProvider = ({children}) => {

    const [transactions, setTransactions] = useState([]);
    const [balance, setBalance] = useState(0);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);


    const addItem = (item) => setTransactions(addItems(transactions, item));

    const removeItem = (item) => setTransactions(removeItems(transactions, item));
    
    useEffect(() => {
        setBalance(getBalance(transactions));

        setIncome(getIncome(transactions));

        setExpense(getExpense(transactions));

    }, [transactions])


    return (
        <BudgetContext.Provider 
            value={{
                transactions,
                addItem,
                removeItem,
                balance,
                income,
                expense,
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}

export default BudegetProvider;