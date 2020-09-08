import React from "react";



const Balance = ({balance}) => {
  const sign = balance >= 0 ? 'green' : 'red';
  return(
  <>
    <h4>Your Balance</h4>
    <h1 className={sign}>${(balance).toFixed(2)}</h1>
  </>
);}

export default Balance;
