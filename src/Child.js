import React, { useContext, useState } from 'react';
import { TransactionConext } from './transContext';

function Child() {
    let { transactions, addTransaction } = useContext(TransactionConext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);

    const handleAddition = (event) => {
        event.preventDefault();
        if (Number(newAmount) === 0) {
            alert('Please enter correct value')
            return false;
        }

        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        })
    }



    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income += transactions[i].amount
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }

    return (
        <div className="container">
            <h1 className='text-center'>
                Expense Tracker
        </h1>
            <h3>
                Your Balance
            <br />
            ${getIncome() + getExpense()}
            </h3>
            <div className="expense-container">
                <h3>
                    INCOME <br />${getIncome()}
                </h3>
                <h3>
                    EXPENSE <br />${getExpense()}
                </h3>
            </div>
            <h3>
                History
            </h3>
            <hr />
            <ul className='transaction-list'>
                {transactions.map((transObj, ind) => {
                    return (<li key={ind}>
                        <span>{transObj.desc}</span>
                        <span>${transObj.amount}</span>
                    </li>
                    )
                }

                )}
            </ul>
            <h3>
                Add new transaction
            </h3>
            <hr />
            <form className='transaction-form' onSubmit={handleAddition}>
                <label>
                    Text <br />
                    <input type='text' value={newDesc} placeholder='Enter Description' onChange={(ev) => setDesc(ev.target.value)} required />
                </label>
                <br></br>
                <label>
                    Amount<br />
                </label>
                Positive value for deposit money and negative value for expenses
                    <input type='number' value={newAmount} placeholder='Enter Amount' onChange={(ev) => setAmount(ev.target.value)} required />
                
                <br />
                <input type='submit' id='submit' value='Add Transaction' />
            </form>
        </div>
    );
}

export default Child;