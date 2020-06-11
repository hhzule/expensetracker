import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions:[
        { id: 1, text: 'item1', amount: -20},
        { id: 1, text: 'Salary', amount: 52000},
         { id: 1, text: 'item2', amount: -200},
         { id: 1, text: 'item3', amount: -3320},
         { id: 1, text: 'item4', amount: -33320},        ]

}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch ] = useReducer(AppReducer, initialState);

    return(<GlobalContext.Provider value={{
        transactions: state.transactions
    }}>
        {children}
    </GlobalContext.Provider>);
}