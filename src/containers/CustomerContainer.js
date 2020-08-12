import React, { Component } from 'react'
import {connect} from 'react-redux'

import {fetchCustomer} from '../actions/customerActions'

class CustomerContainer extends Component {
    
    componentDidMount() {
        this.props.fetchCustomer(this.props.match.params.id)
    }
    
    render() {
        // this.props.match.params.id
        console.log('Why is this not rendering?')
        return (
            <div>Here is the customer's page</div>
        )
    }
}

const mapStateToProps = state => {
    return {
        customer: state.customer,
        loading: state.loading
    }
}

export default connect(mapStateToProps, {fetchCustomer})(CustomerContainer)
