import React, {useState, useContext} from "react";

import {BudgetContext} from '../providers/budegt.provider';
import uuid from 'react-uuid';

const Form = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0)
  const {addItem} = useContext(BudgetContext);

  
    const submitForm = e => {
      e.preventDefault();
      if(+amount !== 0 && text.length > 0) {
        addItem({id: uuid(), text: text, amount: +amount});
        setText('');
        setAmount(0);
      }
      else alert('please enter values')
  }
  


  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label forhtml="text">Text</label>
          <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)} 
          placeholder="Enter text..."
          />

        </div>
        <div className="form-control">
          <label forhtml="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
          type="number" 
          value={amount} 
          onChange={e => setAmount(e.target.value)} 
          placeholder="Enter amount..." 
          />

        </div>
          <button className="btn" onClick={submitForm}>Add transaction</button>
        
      </form>
    </>
  );
};

export default Form;
