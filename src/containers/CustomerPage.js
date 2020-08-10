import React from 'react'
import { Route } from 'react-router-dom'

import CustomerList from '../components/CustomerList'
import CustomerContainer from './CustomerContainer'

const CustomerPage = ({match, customers}) => (

    <div>
        Look At All of these Customers
        <CutomerList customers={customers}>

        <Route exact path={match.url} render={() => <h3>Choose A customer from the list above</h3>} />
        <Route path={`${match.url}/:movieId`} render={routerProps => <CustomerContainer {...routerProps} customers={customers}/>} />
    
    </div>

)2

export default CustomerPage