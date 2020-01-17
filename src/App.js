import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './comp/common/navbar/navbar';
import Market from './comp/pages/market/market';
import Account from './comp/pages/account/account/Account'
import Security from './comp/pages/account/security/security';

function App() {
  return (
    <div className="App light">
            <Navbar/>

      <Router>
        <Route path="/market" component={Market}>
          <Market/>
        </Route>
        <Route path="/account" component={Market}>
          <Account/>
        </Route>
        <Route exact path="/security" component={Security}>
          <Security/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
