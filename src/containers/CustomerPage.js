import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import CustomerList from '../components/CustomerList'
import CustomerContainer from './CustomerContainer'

const CustomerPage = ({match, customers}) => (

    <div>
        

        <Route exact path={match.url} render={() => <CustomerList customers={customers} />} />
        <Route path={`${match.url}/:custId`} render={routerProps => <CustomerContainer {...routerProps} customers={customers}/> } />
    
    </div>

)

export default CustomerPage