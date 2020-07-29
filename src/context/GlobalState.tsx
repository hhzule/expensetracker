import React, { createContext, useReducer, ReactChildren } from 'react';
import AppReducer from './AppReducer';
import { TransactionType, initialStateType } from "../Types";


const initialState : initialStateType = {
    Transaction:  [{ id: 1, text: "Cash", amount: 200 }],
    deleteTransaction: () => {},
    addTransaction: () => {},

};

export const GlobalContext = createContext(initialState);
// eslint-disable-next-line
export const GlobalProvider: React.FC = ({ children }) => {
    const [state, dispatch ] = useReducer(AppReducer, initialState);
    
function deleteTransaction(id: number){
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    });
}
function addTransaction(transaction: TransactionType){
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    });
}


    return(<GlobalContext.Provider value={{
        Transaction: state.Transaction,
        deleteTransaction,
        addTransaction
    }}>

        {children}
    </GlobalContext.Provider>);
}