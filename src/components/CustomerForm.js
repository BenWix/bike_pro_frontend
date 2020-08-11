import React, {Component} from 'react'

import {connect} from 'react-redux'
import {addCustomer} from '../actions/customerActions'

class CustomerForm extends Component {

    state={
        name: '',
        email: '',
        phone: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    } 
    
    handleSubmit = event => {
        event.preventDefault()
        this.props.addCustomer(this.state)
        this.setState({
            name: '',
            email: '',
            phone: '' 
        })
    }

    render() {
        return (
            <React.Fragment>
                <h3>Add A new Customer</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type='text' name='name' onChange={this.handelChage}/>
                    <br/>
                    
                    <label>Email:</label>
                    <input type='text' name='email' onChange={this.handelChage}/>
                    <br/>
                    
                    <label>Phone Number:</label>
                    <input type='text' name='phone' onChange={this.handelChage}/>
                    <br/>
                    
                    <input type='submit' />
                </form>
            </React.Fragment>
        )
    }

}

export default connect(null, {addCustomer})(CustomerForm)
