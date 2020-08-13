import React, { Component } from 'react'
import {connect} from 'react-redux'

import {fetchBike} from '../actions/customerActions'
import RepairList from '../components/RepairList'

class BikeContainer extends Component {
    
    componentDidMount(){
        this.props.fetchBike(this.props.match.params.id)
    }

    // renderRepairs = this.props.bike.repairs.map(repair => 
    //     <li key={repair.id}>
    //         {repair.repair_type}
    //     </li>
    // )
    
    render() {

        return (
            <div>
                Lets Look at this bike!!
                {this.props.bike.name}
                <RepairList repairs={this.props.bike.repairs}/>

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