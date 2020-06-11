import React, {useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const  {addTransaction} = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount
        }
addTransaction(newTransaction);

    }

    return(
        <div>
            <h2>Add New Transaction</h2>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text here ..."></input>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount<br/>
                    (negative - expense, positive - income</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount here ..."></input>
                </div>
                <button className="button">Add Transaction</button>
            </form>
        </div>
    )
}