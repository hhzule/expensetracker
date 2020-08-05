import React from 'react';
import logo from './graphic.gif';
import logo2 from './save.gif';
import './App.css';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpenses} from './components/IncomeExpenses';
import {TransactionList} from './components/TransactionList';
import {AddTransaction} from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import { configureNotification } from './services/firebaseService';


function App() {
  return (
    <GlobalProvider>
    <div>
        <img src={logo} className="applog1" alt="logo" /><p id="font">Made By: Zule Huma</p>
        </div>
        <hr/>
        <Header />
        <br />
        <div className="container">
        <Balance />
        <br />
        <IncomeExpenses />
        <br />
        <TransactionList />
        <br />
        <AddTransaction />
        <br />
        <hr />
        <img src={logo2} className="applog2"  alt="logo" />
        </div>
        </GlobalProvider>
       
     
    
  );
}

export default App;
