import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './components/Home'
import CustomerPage from'./containers/CustomerPage'
import Navbar from './components/Navbar'
import About from './components/About'

import './App.css';

class App extends Component {

  state = {
    customers: {
      1: {id: 1, name: 'Ben'},
      2: {id: 2, name: 'Meghan'},
      3: {id: 3, name: 'Mason'},
      4: {id: 4, name: 'Olivia'},
      5: {id: 5, name: 'Will'}
    }
  }

  render() {
    return (
    <div>
      <Router>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/customers' render={routerProps => <CustomerPage {...routerProps} customers={this.state.customers}/>} />

        {/* <Route path='/bike' component={Home} /> */}
        <Route exact path='/about' component={About} />
      </Router>
    </div>
    )
  }
}

export default App;
