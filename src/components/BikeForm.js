import React, {Component} from 'react'

// import {connect} from 'react-redux'

class BikeForm extends Component {
    constructor(props) {
        super(props)
        this.state={
            bike_type: '',
            name: '',
            miles: '',
            strava_id: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log('We Will record this data one day')
        this.setState({
            bike_type: '',
            name: '',
            miles: '',
            strava_id: ''
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

                    <label>Type:</label>
                    <input type='text' name='type' value={this.state.type} onChange={this.handleChange}/>
                    <br/>

                    <label>Miles:</label>
                    <input type='text' name='miles' value={this.state.miles} onChange={this.handleChange}/>
                    <br/>

                    <label>Strava ID:</label>
                    <input type='text' name='strava_id' value={this.state.strava_id} onChange={this.handleChange}/>
                    <br/>

                    <input type='submit'/>

                </form>
            </React.Fragment>
        )
    }
}

export default BikeForm