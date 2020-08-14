import React, { Component } from 'react'

export default class RepairForm extends Component {
    constructor(props) {
        super(props)
        this.state={
            repair_type: 'Tires',
            description: '',
            date: ''
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
        let repair = {...this.state, miles: this.props.miles, bike_id: this.props.bike_id}
        this.props.addRepair(repair)
        this.setState({
            repair_type: 'Tires',
            description: '',
            date: ''
        })
    }
    
    render() {
        return (
            <React.Fragment>
                <h3>Add a new Repair</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Repair Type:</label>
                    <select name='repair_type' value={this.state.repair_type} onChange={this.handleChange}>
                        <option value='Tires'>Tires</option>
                        <option value='Drivetrain'>Drivetrain</option>
                        <option value='Suspension'>Suspension</option>
                        <option value='Total Overhaul'>Total Overhaul</option>
                        <option value='Other'>Other</option>
                    </select><br/>

                    <label>Description:</label>
                    <input type='text' name='description' onChange={this.handleChange} value={this.state.description}/>
                    <br/>

                    <label>Date:</label>
                    <input type='date' name='date' onChange={this.handleChange} value={this.state.date}/>
                    <br/>

                    <input type='submit' />
                </form>
            </React.Fragment>
        )
    }
}
