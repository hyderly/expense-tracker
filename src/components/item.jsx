import React from "react";

const Item = ({item}) => {
  const {text, amount} = item;
  const sign = amount > 0 ? '+' : '-';
  const sign2 = amount > 0 ? 'plus' : 'minus';
  return (
    <li className={sign2}>
      {text} <span>{sign}${Math.abs(amount).toFixed(2)}</span>
      <button className="delete-btn">x</button>
    </li>
  );
};

export default Item;
