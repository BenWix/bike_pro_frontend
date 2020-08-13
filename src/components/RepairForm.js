import React, { Component } from 'react'

export default class RepairForm extends Component {
    constructor(props) {
        super(props)
        this.state={
            repair_type: '',
            miles: '',
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
        let repair = {...this.state, bike_id: this.props.bike_id}
        this.props.addRepair(repair)
        this.setState({
            repair_type: '',
            miles: '',
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
                    <input type='text' name='repair_type' onChange={this.handleChange} value={this.state.repair_type}/>
                    <br/>

                    <label>Miles:</label>
                    <input type='text' name='miles' onChange={this.handleChange} value={this.state.miles}/>
                    <br/>

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
