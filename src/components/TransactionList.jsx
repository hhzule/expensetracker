import React from 'react';

export const TransactionList = () => {
    return(
        <div>
            <h2>History</h2>
            <ul id="list" className="list">
                <li class="minus">Cash<span>- Rs 400</span><button class="delete-btn">x</button></li>

            </ul>
        </div>
    )
}