import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './containers/Home'
import CustomerPage from'./containers/CustomerPage'
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
        <Route path='/customers' render={routerProps => <CustomerPage {...routerProps} customers={this.state.customers}/>} />

        {/* <Route path='/bike' component={Home} /> */}
        <Route exact path='/about' component={About} />
      </Router>
    </div>
    )
  }
}

export default App;
