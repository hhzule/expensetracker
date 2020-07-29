import React, { useContext } from 'react';
import { TransactionD} from './Transaction';
import { GlobalContext } from '../context/GlobalState';
import { TransactionType } from "../Types";

export const TransactionList = () => {
    const { Transaction } = useContext(GlobalContext );
    return(
        <div>
            <h2>History</h2>
            <ul className="list">
                {Transaction.map( (Trans: TransactionType) => (<TransactionD key={Trans.id} trans={Trans} />))}

            </ul>
        </div>
    )
}