import React, { useState } from 'react'

export default function Row({account, setValueById, deleteById}) {

    const [accType, setAccType] = useState("");
    const [debit, setDebit] = useState(0);
    const [credit, setCredit] = useState(0);

    const handleAccountChange = (e) => {
        setAccType(e.target.value);
        setValueById(account.id,e.target.value,"ACCOUNT");
    }
    const handleDebitChange = (e) => {
        setDebit(parseInt(e.target.value));
        setValueById(account.id,e.target.value,"DEBIT");
    }
    const handleCreditChange = (e) => {
        setCredit(parseInt(e.target.value));
        setValueById(account.id,e.target.value,"CREDIT");
    }

    const handleDelete = () => {
        setDebit(0);
        setCredit(0);
        deleteById(account.id)
    };
  return (
    <div className="row-wrapper">
        <select className='accType input' value={accType} onChange={handleAccountChange}>
            <option value="saving">Saving</option>
            <option value="current">Current</option>
        </select>
      <input className='input' type="number" value={debit} onChange={handleDebitChange} name="debit" id="" />
      <input className='input' type="number" value={credit} onChange={handleCreditChange} name="credit" id="" />
      <button className='input' onClick={handleDelete}>Delete</button>
    </div>
  )
}
