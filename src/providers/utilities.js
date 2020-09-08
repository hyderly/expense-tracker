
export const addItems = (list, item) => [...list, item];

export const removeItems = (list, item) => list.filter(listItem => listItem.id !== item.id);

export const getBalance = list => {
    const amounts = list.map(item => item.amount);
    const balance = amounts.reduce((acc, amount) => acc + amount, 0);
  
    return balance;
  };
  
  export const getExpense = list => {
    const amounts = list.map(item => item.amount);
  
    const expense = amounts.filter(amount => amount < 0)
    .reduce((acc, amount) => acc + amount, 0);
  
    return expense;
  };
  
  export const getIncome = list => {
    const amounts = list.map(item => item.amount);
  
    const income = amounts.filter(amount => amount > 0)
    .reduce((acc, amount) => acc + amount, 0);
  
    return income;
  };