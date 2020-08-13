import React, { Component } from 'react'
import {connect} from 'react-redux'

import BikeList from '../components/BikeList'
import BikeForm from '../components/BikeForm'

import {fetchCustomers, addBike} from '../actions/customerActions'


class CustomerContainer extends Component {
    
    componentDidMount() {
            this.props.fetchCustomers()
    }

    render() {
        const customer = this.props.customers.find(obj => obj.id === parseInt(this.props.match.params.id))
        // debugger

        // if (this.props.loading || customer === undefined) {
        //     // this.props.fetchCustomers()
        //     return(<div>Loading</div>)
        // } else {
            // debugger
            return (
                <div>
                    Here is the customer's page
                    <h3>customer:{customer.name}</h3>
                    <BikeList bikes={customer.bikes} customer_name={customer.name}/>
                    <BikeForm addBike={this.props.addBike} customer_id={customer.id}/>
                </div>
            )

        // }
    }
}

const mapStateToProps = state => {
    return {
        customers: state.customers,
        loading: state.loading
    }
}

export default connect(mapStateToProps , {fetchCustomers, addBike})(CustomerContainer)
