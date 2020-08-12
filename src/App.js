import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './containers/Home'
import CustomersContainer from './containers/CustomersContainer'
import CustomerContainer from './containers/CustomerContainer'


import Navbar from './components/Navbar'
import About from './components/About'

import './App.css';

class App extends Component {

  render() {
    return (
    <div>
      <Router>
        <Navbar />
        <h1>Bike Shop Pro</h1>
        <Route exact path='/' component={Home} />

        <Route exact path='/customers' component={CustomersContainer}/>
        <Route path='/customers/:id' component={CustomerContainer} />

        <Route path='/about' component={About} />
      </Router>
    </div>
    )
  }
}

export default App;
