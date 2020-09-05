export const balanceAmount = list => {
  const amounts = list.map(item => item.amount);
  const balance = amounts.reduce((acc, amount) => acc + amount, 0);

  return balance;
};

export const expense = list => {
  const amounts = list.map(item => item.amount);

  const expense = amounts.filter(amount => amount < 0)
  .reduce((acc, amount) => acc + amount, 0);

  return expense;
};

export const income = list => {
  const amounts = list.map(item => item.amount);

  const income = amounts.filter(amount => amount > 0)
  .reduce((acc, amount) => acc + amount, 0);

  return income;
};
