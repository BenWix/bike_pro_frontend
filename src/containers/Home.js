import React, { Component } from 'react'
import {connect} from 'react-redux'

import CustomerList from '../components/CustomerList'
import CustomerForm from '../components/CustomerForm'
import {fetchCustomers} from '../actions/customerActions'

class Home extends Component {
    componentDidMount() {
        this.props.fetchCustomers()
    }
    
    render() {
        return (
            <div>
                <CustomerList customers={this.props.customers} />
                <CustomerForm />
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        customers: state.customers.customers
    }
}

export default connect(mapStateToProps, {fetchCustomers})(Home)