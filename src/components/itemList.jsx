import React from "react";
import Item from './item'


const ItemList = ({items}) => {
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {
          items.map(item => <Item key={item.id} item={item}/>)
        }
        
      </ul>
    </>
  );
};


export default ItemList;