import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const IncomeExpenses = () => {
const { Transaction } = useContext(GlobalContext);
const amounts = Transaction.map(transaction => transaction.amount);
const income = amounts
.filter(item => item > 0)
.reduce((acc, item) => (acc += item), 0)
// .toFixed(2)
;
 
const expense = (amounts.filter(item => item < 0)
.reduce((acc, item) => (acc += item), 0) * -1)
// .toFixed(2)
;
    return(
        <div className="in-ex-con">
            <div>
                <h4>Income</h4>
                <p  className="moneyadd">{income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p  className="moneysub">{expense}</p>
            </div>

        </div>
    )
}