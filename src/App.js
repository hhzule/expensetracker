import React from 'react';
import logo from './graphic.gif';
import logo2 from './save.gif';
import styles from './App.css';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpenses} from './components/IncomeExpenses';
import {TransactionList} from './components/TransactionList';
import {AddTransaction} from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
    
        <img src={logo} className={styles.applog1} alt="logo" />
        <Header />
        <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
        <img src={logo2} className={styles.applog2}  alt="logo" />
        </div>
        </GlobalProvider>
       
     
    
  );
}

export default App;
