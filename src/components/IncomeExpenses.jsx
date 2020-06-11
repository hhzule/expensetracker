import React from 'react';

export const IncomeExpenses = () => {
    return(
        <div className="in-ex-con">
            <div>
                <h4>Income</h4>
                <p id="money-add" className="moneyadd">+00.00</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-sub" className="moneysub">+00.00</p>
            </div>

        </div>
    )
}