import React from 'react';
import logo from './graphic.gif';
import logo2 from './save.gif';
import styles from './App.css';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpenses} from './components/IncomeExpenses';
import {TransactionList} from './components/TransactionList';


function App() {
  return (
    <div>
     <div className="header">
        <img src={logo} className={styles.applog1} alt="logo" />
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        </div>
        <img src={logo2} className={styles.applog2}  alt="logo" />
        
     
    </div>
  );
}

export default App;
