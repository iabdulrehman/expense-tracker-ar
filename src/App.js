import React from 'react';
import './App.css';
import {Header} from './components/header'
import DevelopedBy from './DevelopInfo'
import {Balance} from './components/balance'
import {AccountSummary} from './components/accountsummary'
import {TransactionHistory} from './components/transactionhistory'
import {AddTransaction} from './components/addtransaction'

import {GlobalProvider} from './context/GlobalState'

function App() {
  return (  
    <div className="App bgImg">
      <header className="bg">
        <Header/>
      </header>

      <body>
      <GlobalProvider>
        <div className="container">
          <Balance/>
          <AccountSummary/>
          <TransactionHistory/>
          <AddTransaction/>
        </div>
      </GlobalProvider>
      </body>
      <footer className="bg">
      <DevelopedBy/>
    </footer>
    </div>
  );
}

export default App;
