import React, { useContext } from 'react';
import {Transaction} from './transaction'

import {GlobalContext} from '../context/GlobalState';

export const TransactionHistory = () => {
    const { transactions } = useContext(GlobalContext);
    return(
        <div>
            <h3 className="bgCenter">Transaction History</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction}/>
                ))}
            </ul>
        </div>
    )
}