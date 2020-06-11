import React from 'react';
import { GlobalContext} from '../context/GlobalState';
import { useContext } from 'react';


export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0)
    // .toFixed(2)
    ;
    return(
        <div>
            <h1>Your Current Balance</h1>
    <h1 >Rs {total}</h1>
            </div>
    )
    }