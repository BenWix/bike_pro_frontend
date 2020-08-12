import React, { Component } from 'react'
import BikeList from '../components/BikeList'
import BikeForm from '../components/BikeForm'

export default class BikeContainer extends Component {
    render() {
        return (
            <div>
                <BikeList bikes={this.props.bikes}/>
                <BikeForm />
            </div>
        )
    }
}
