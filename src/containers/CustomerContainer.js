import React, { Component } from 'react'
import {connect} from 'react-redux'

import BikeList from '../components/BikeList'
import BikeForm from '../components/BikeForm'

import {fetchCustomerInfo} from '../actions/customerActions'

class CustomerContainer extends Component {
    
    
    render() {
        const customer = this.props.customers.find(obj => obj.id === parseInt(this.props.match.params.id))
        
        if (customer.bikes === undefined) {
            this.props.fetchCustomerInfo(this.props.match.params.id)
        }

        if (this.props.loading || !customer || customer.bikes === undefined) {
            return(<div>Loading</div>)
        } else {
            // debugger
            return (
                <div>
                    Here is the customer's page
                    <h3>customer:{customer.name}</h3>
                    <BikeList bikes={customer.bikes} customer_name={customer.name}/>
                    <BikeForm />
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

export default connect(mapStateToProps , {fetchCustomerInfo})(CustomerContainer)
