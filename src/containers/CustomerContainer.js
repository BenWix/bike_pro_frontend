import React, { Component } from 'react'
import {connect} from 'react-redux'

import BikeList from '../components/BikeList'
import BikeForm from '../components/BikeForm'
import CustomerInfo from '../components/CustomerInfo'


import {fetchCustomers, addBike, deleteBike} from '../actions/customerActions'


class CustomerContainer extends Component {
    
    componentDidMount() {
            this.props.fetchCustomers()
    }

    render() {
        const customer = this.props.customers.find(obj => obj.id === parseInt(this.props.match.params.id))
    
        return (
            <div>
                <CustomerInfo customer={customer}/>
                <BikeList bikes={customer.bikes} deleteBike={this.props.deleteBike }customer_name={customer.name}/>
                <BikeForm addBike={this.props.addBike} customer_id={customer.id}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        customers: state.customers,
        loading: state.loading
    }
}

export default connect(mapStateToProps , {fetchCustomers, addBike, deleteBike})(CustomerContainer)
