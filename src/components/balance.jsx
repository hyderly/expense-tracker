import React from "react";



const Balance = ({balance}) => (
  <>
    <h4>Your Balance</h4>
    <h1 >${balance.toFixed(2)}</h1>
  </>
);

export default Balance;
