import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import CustomersContainer from './containers/CustomersContainer'
import CustomerContainer from './containers/CustomerContainer'
import BikeContainer from './containers/BikeContainer';
import About from './components/About'



import './App.css';

class App extends Component {

  render() {
    return (
    <React.Fragment>
      <Router>
        <Navbar />
        <h1>Bike Shop Pro</h1>
        <Route exact path='/' component={Home} />

        <Route exact path='/customers' component={CustomersContainer}/>
        <Route path='/customers/:id' component={CustomerContainer} />
        <Route path='/bikes/:id' component={BikeContainer} />
        <Route path='/about' component={About} />
      </Router>
    </React.Fragment>
    )
  }
}

export default App;
