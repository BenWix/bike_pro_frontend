import React, {Component} from 'react'

class CustomerForm extends Component {
    constructor(props) {
        super(props)

        this.state={
            name: '',
            email: '',
            phone: ''
        }
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
                    <input type='text' name='name' onChange={this.handleChange} value={this.state.name}/>
                    <br/>
                    
                    <label>Email:</label>
                    <input type='text' name='email' value={this.state.email} onChange={this.handleChange}/>
                    <br/>
                    
                    <label>Phone Number:</label>
                    <input type='text' name='phone' onChange={this.handleChange} value={this.state.phone}/>
                    <br/>
                    
                    <input type='submit' />
                </form>
            </React.Fragment>
        )
    }

}

export default CustomerForm
