import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';

import Login from './pages/login/index';
import HaveHeader from './components/haveHeader/index';
import EditAddress from './components/checkOut/editAddress';
import Payment from './pages/payment/index';

import './assets/css/reset.css';

class App extends Component {
  render() {
    return (
      <div>
          <Switch>
              <Route path='/login' component={Login} />
              <Route path='/editAddress/:index' component={EditAddress} />
              <Route path='/payment' component={Payment} />
              <Route component={HaveHeader}/>
          </Switch>


      </div>
    );
  }
}

export default App;
