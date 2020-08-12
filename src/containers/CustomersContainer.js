import React, { Component } from 'react'
import {connect} from 'react-redux'
// import { Route } from 'react-router-dom'

import CustomerList from '../components/CustomerList'
import CustomerForm from '../components/CustomerForm'
import {fetchCustomers, addCustomer} from '../actions/customerActions'
// import CustomerContainer from './CustomerContainer'


class CustomersContainer extends Component {


    componentDidMount() {
        this.props.fetchCustomers()
    }
    
    render() {
        return (
            <div>
                <CustomerList customers={this.props.customers} />
                <CustomerForm addCustomer={this.props.addCustomer}/>
                {/* <Route path={`${this.props.match.path}/:id`} render={() => (<h3>Here we go</h3>)}/> */}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        customers: state.customers,
    }
}

export default connect(mapStateToProps, {fetchCustomers, addCustomer})(CustomersContainer)