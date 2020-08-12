import React, { Component } from 'react'
import {connect} from 'react-redux'

import BikeContainer from './BikeContainer'

import {fetchCustomer} from '../actions/customerActions'

class CustomerContainer extends Component {
    
    
    componentDidMount() {
        // this.props.fetchCustomers()
        this.props.fetchCustomer(this.props.match.params.id)
    }
    
    render() {
        const customer = this.props.customers.find(obj => obj.id === parseInt(this.props.match.params.id))
        if (this.props.loading || !customer) {
            return(<div>Loading</div>)
        } else {
            return (
                <div>Here is the customer's page
                    <h3>customer:{customer.name}</h3>
                    <BikeContainer bikes={customer.bikes} customer={customer} />
                </div>
            )

        }
    }
}

const mapStateToProps = state => {
    return {
        customers: state.customers,
        loading: state.loading
    }
}

export default connect(mapStateToProps , {fetchCustomer})(CustomerContainer)
