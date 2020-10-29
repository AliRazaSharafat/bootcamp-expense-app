import React from 'react';
import { createContext, useReducer } from 'react';
import TransactionReducer from './transReducer';

const initialTransactions = [
   {amount: 0,desc:"Name of transaction"}
]

export const TransactionConext = createContext(initialTransactions);


export const TransactionProvider = ({children}) => {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);
    
    function addTransaction(transobj2) {
        dispatch({
            type: "ADD TRANSACTION",
            payload: {
                amount: transobj2.amount,
                desc: transobj2.desc
            }
        })
    }

    return (
        <TransactionConext.Provider value={{
            transactions: state,
            addTransaction: addTransaction
        }
        }>
            {children}
        </TransactionConext.Provider>

    )
}