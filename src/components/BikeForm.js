import React, {Component} from 'react'

// import {connect} from 'react-redux'

class BikeForm extends Component {
    constructor(props) {
        super(props)
        this.state={
            bike_type: '',
            name: '',
            miles: '',
            date_purchased: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        let bike = {...this.state, user_id: this.props.customer_id}
        this.props.addBike(bike)
        this.setState({
            bike_type: '',
            name: '',
            miles: '',
            date_purchased: ''
        })
    }

    render() {
        return (
            <React.Fragment>
                <h3>Add a new Bike</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
                    <br/>

                    <label>Bike Type:</label>
                    {/* <input type='text' name='bike_type' value={this.state.bike_type} onChange={this.handleChange}/> */}
                    <select name='bike_type' value={this.state.bike_type} onChange={this.handlChange}>
                        <option value='Full Suspension'>Full Suspension</option>
                        <option value='Hardtail'>Hardtail</option>
                        <option value='Road Bike'>Road Bike</option>
                        <option value='Hybrid'>Hybrid</option>
                        <option value='E-bike'>E-bike</option>
                    </select>
                    <br/>

                    <label>Miles:</label>
                    <input type='text' name='miles' value={this.state.miles} onChange={this.handleChange}/>
                    <br/>

                    <label>Date Purchased:</label>
                    <input type='date' name='date_purchased' value={this.state.date_purchased} onChange={this.handleChange}/>
                    <br/>


                    <input type='submit'/>

                </form>
            </React.Fragment>
        )
    }
}

export default BikeForm