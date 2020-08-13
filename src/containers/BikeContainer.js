import React, { Component } from 'react'
import {connect} from 'react-redux'

import {fetchBike} from '../actions/customerActions'

class BikeContainer extends Component {
    
    componentDidMount(){
        this.props.fetchBike(this.props.match.params.id)
    }
    
    render() {
        return (
            <div>
                Lets Look at this bike!!
                {this.props.bike.name}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        bike: state.bike,
        loading: state.loading
    }
}

export default connect(mapStateToProps, {fetchBike})(BikeContainer) 