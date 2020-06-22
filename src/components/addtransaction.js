import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [description,setDescription] = useState('')
    const [transactionAmount,setTransactionAmount] = useState('')

    const { addTransaction } = useContext(GlobalContext);
    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }

        addTransaction(newTransaction);
    }
    return(
        <div>
            <h3 className="bgCenter">Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control bgCenter">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input type="text" 
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Detail of Transaction"/>
                </div>

                <div className="form-control bgCenter">
                    <label htmlFor="transactionamount">
                        Transaction Amount
                    </label>
                    <input type="text" 
                    id="transactionamount"
                    onChange={(e) => setTransactionAmount(e.target.value)}
                    value={transactionAmount}
                    placeholder="Dollar value of Transaction"/>
                </div>
                <button className="btn btnStyle">Add Transaction</button>
            </form>
        </div>
    )
}