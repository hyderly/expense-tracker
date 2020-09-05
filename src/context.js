import { createContext } from "react";

const GlobalContext = createContext({
  transactionList: [
    { id: 1, text: "test1", amount: -1000 },
    { id: 2, text: "test2", amount: 2000 },
    { id: 3, text: "test3", amount: 3000 },
    { id: 4, text: "test4", amount: 4000 },
  ],
});




export default GlobalContext;