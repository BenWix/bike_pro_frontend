import React, {Component} from 'react'

class BikeInfo extends Component  {
    state = {
        miles: this.props.bike.miles
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        let milesUpdate = {bike_id: this.props.bike.id, miles: this.state.miles}
        // this.props.updateMiles(milesUpdate)
        this.setState({
            miles: ''
        })
    }

    render() {

        return (
                <div>
                <h3>{this.props.bike.name}</h3>
                <ul>
                    <li>Bike Type: {this.props.bike.bike_type}</li>
                    <li>Miles Ridden: {this.props.bike.miles}</li>
                    <li>Date Purchased: {this.props.bike.date_purchase ? this.props.bike.date_purchase : 'unknown'}</li>
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <label>Update Miles:</label>
                    <input type='text' name='miles' value={this.state.miles} onChange={this.handleChange} />
                    <input type='submit' />
                    <br/>
                </form>
            </div>
        )
    }
}

export default BikeInfo