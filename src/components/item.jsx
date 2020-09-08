import React, {useContext} from "react";

import {BudgetContext} from '../providers/budegt.provider'

const Item = ({item}) => {

  const {removeItem} = useContext(BudgetContext);

  const removeItems = () => {
    removeItem(item);
  }

  const {text, amount} = item;
  const sign = amount > 0 ? '+' : '-';
  const sign2 = amount > 0 ? 'plus' : 'minus';
  return (
    <li className={sign2}>
      {text} <span>{sign}${Math.abs(amount).toFixed(2)}</span>
      <button className="delete-btn" onClick ={removeItems}>x</button>
    </li>
  );
};

export default Item;
