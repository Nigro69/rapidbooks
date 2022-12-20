import "./App.css";
import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { MdDelete } from "react-icons/md";
import Row from "./components/Row";

function App() {
  const getAcc = () => {
    return { id: nanoid(), accType: "", debit: 0, credit: 0 };
  };
  const [accounts, setAccounts] = useState([getAcc(), getAcc(), getAcc()]);

  const [totalDebit, setTotalDebit] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);
  console.log(accounts);

  const setValueById = (id, value, type) => {
    const accCopy = [...accounts];

    let currIndex = accCopy.findIndex((acc) => acc.id === id);
    console.log(currIndex);

    switch (type) {
      case "ACCOUNT":
        accCopy[currIndex].accType = value;
        break;
      case "DEBIT":
        accCopy[currIndex].debit = parseInt(value);
        break;
      case "CREDIT":
        accCopy[currIndex].credit = parseInt(value);
        break;
      default:
        break;
    }
    setAccounts([...accCopy]);
  };

  const handleAddRow = () => {
    setAccounts([...accounts, getAcc()]);
  };
  const deleteById = (id) => {
    let accCopy = accounts.filter((acc) => acc.id != id);
    // console.log(accCopy);
    setAccounts([...accCopy]);
  };

  useEffect(() => {
    let totDeb = accounts.reduce(
      (tot, acc) => (tot = tot + parseInt(acc.debit)),
      0
    );
    let totCre = accounts.reduce(
      (tot, acc) => (tot = tot + parseInt(acc.credit)),
      0
    );

    setTotalCredit(totCre);
    setTotalDebit(totDeb);
  }, [accounts]);

  // console.log(values);
  return (
    <div className="App">
      <div className="top-wrapper">
        <p className="heading acc">Account Type</p>
        <p className="heading">Debit</p>
        <p className="heading">Credit</p>
      </div>
      <div className="mid-wrapper">
        {accounts &&
          accounts.map((account) => (
            <Row
              key={account.id}
              deleteById={deleteById}
              setValueById={setValueById}
              account={account}
            />
          ))}
      </div>

      <div className="below-wrapper">
        <button onClick={handleAddRow}>Add Row</button>
        <p className="totalDebit">Total Debit : {totalDebit}</p>
        <p className="totalCredit">Total Credit : {totalCredit}</p>
      </div>
    </div>
  );
}

export default App;
