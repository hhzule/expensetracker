import React, {useState} from 'react';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);


    return(
        <div>
            <h2>Add New Transaction</h2>
            <form>
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